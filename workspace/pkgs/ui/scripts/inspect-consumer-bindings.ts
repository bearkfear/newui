import ts from "typescript";
import type { BundleCase } from "./bundle-cases";
import { bundleConsumer, type ConsumerCondition } from "./consumer-bundle";

function readButtonExports(statement: ts.Statement, bindings: Record<string, string>) {
  if (!ts.isExportDeclaration(statement) || !statement.exportClause) return;
  if (!ts.isNamedExports(statement.exportClause)) return;
  for (const specifier of statement.exportClause.elements) {
    if (["RootButton", "AreaButton"].includes(specifier.name.text)) {
      bindings[specifier.name.text] = (specifier.propertyName ?? specifier.name).text;
    }
  }
}

function readButtonContexts(statement: ts.Statement) {
  if (!ts.isVariableStatement(statement)) return [];
  return statement.declarationList.declarations.flatMap(({ name }) =>
    ts.isIdentifier(name) && /^ButtonGroupContext\d*$/.test(name.text) ? [name.text] : [],
  );
}

export async function inspectConsumerBindings(entry: BundleCase, condition: ConsumerCondition) {
  const result = await bundleConsumer(entry, condition, false);
  const output = result.outputFiles[0];
  if (!output) throw new Error("Consumer build produced no output.");
  const source = ts.createSourceFile("consumer.js", output.text, ts.ScriptTarget.Latest, true);
  const buttonBindings: Record<string, string> = {};
  const buttonDefinitions: string[] = [];
  const buttonContextDefinitions: string[] = [];
  for (const statement of source.statements) {
    readButtonExports(statement, buttonBindings);
    if (ts.isFunctionDeclaration(statement) && statement.name) {
      if (/^Button\d*$/.test(statement.name.text)) buttonDefinitions.push(statement.name.text);
    }
    buttonContextDefinitions.push(...readButtonContexts(statement));
  }
  return {
    name: entry.name,
    condition,
    buttonBindings,
    buttonDefinitions,
    buttonContextDefinitions,
  };
}
