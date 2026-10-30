import { ArrowRight, BookOpen } from "lucide-solid";
import { createMemo, createSignal, createUniqueId, For } from "solid-js";
import { Accordion, Badge, Button, Card, Dialog, Footer, Hero, Prose, Tabs } from "../../index";
import { type HelpArticle, helpArticles, helpFaqs } from "./help-data";

export function HelpPage(props: { onStatus: () => void }) {
  const [category, setCategory] = createSignal("All");
  const [article, setArticle] = createSignal<HelpArticle>();
  const guideId = createUniqueId();
  const visible = createMemo(() =>
    helpArticles.filter((item) => category() === "All" || item.category === category()),
  );
  return (
    <div class="example-page">
      <HelpHero onEssentials={() => setArticle(helpArticles[0])} onStatus={props.onStatus} />
      <section id={guideId} class="example-stack" aria-label="Browse guides">
        <div>
          <h2 class="example-section-title">Make yourself at home</h2>
          <p class="example-muted">Good answers, without the guesswork.</p>
        </div>
        <Tabs.Root
          value={category()}
          onValueChange={(details) => setCategory(details.value)}
          variant="segmented"
          size="sm"
        >
          <Tabs.List aria-label="Guide categories" class="example-filters">
            <For each={["All", "Workspace", "Billing", "Collaboration"]}>
              {(value) => <Tabs.Trigger value={value}>{value}</Tabs.Trigger>}
            </For>
          </Tabs.List>
          <For each={["All", "Workspace", "Billing", "Collaboration"]}>
            {(value) => (
              <Tabs.Content value={value}>
                <div class="example-equal-columns">
                  <For each={visible()}>
                    {(item) => <ArticleCard article={item} onOpen={() => setArticle(item)} />}
                  </For>
                </div>
              </Tabs.Content>
            )}
          </For>
        </Tabs.Root>
      </section>
      <section class="example-stack" aria-label="Frequently asked questions">
        <h2 class="example-section-title">A few things you might be wondering</h2>
        <HelpFaqs />
      </section>
      <HelpFooter guideId={guideId} onStatus={props.onStatus} />
      <ArticleDialog article={article()} onClose={() => setArticle(undefined)} />
    </div>
  );
}

function ArticleCard(props: { article: HelpArticle; onOpen: () => void }) {
  return (
    <Card.Root as="article">
      <Card.Content>
        <div class="example-stack">
          <span class="example-article-icon">
            <BookOpen aria-hidden="true" size={20} />
          </span>
          <div>
            <Badge size="sm">{props.article.category}</Badge>
          </div>
          <h3 class="example-section-title">{props.article.title}</h3>
          <p class="example-muted">{props.article.summary}</p>
          <div class="example-row">
            <span class="example-muted">{props.article.readTime}</span>
            <Button
              size="sm"
              variant="ghost"
              onClick={props.onOpen}
              aria-label={`Read: ${props.article.title}`}
              endIcon={<ArrowRight />}
            >
              Read guide
            </Button>
          </div>
        </div>
      </Card.Content>
    </Card.Root>
  );
}

function HelpFaqs() {
  return (
    <Accordion.Root multiple>
      <For each={helpFaqs}>
        {(faq) => (
          <Accordion.Item value={faq.question}>
            <Accordion.ItemHeading>
              <Accordion.ItemTrigger>
                {faq.question}
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
            </Accordion.ItemHeading>
            <Accordion.ItemContent>
              <p class="example-muted">{faq.answer}</p>
            </Accordion.ItemContent>
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  );
}

function ArticleDialog(props: { article: HelpArticle | undefined; onClose: () => void }) {
  return (
    <Dialog.Root
      open={props.article !== undefined}
      onOpenChange={(details) => {
        if (!details.open) props.onClose();
      }}
    >
      <Dialog.Content size="lg">
        <Dialog.Header>
          <Dialog.Title>{props.article?.title}</Dialog.Title>
          <Dialog.Description>
            {props.article?.category} · {props.article?.readTime}
          </Dialog.Description>
          <Dialog.CloseTrigger />
        </Dialog.Header>
        <Dialog.Body>
          <Prose>
            <p>{props.article?.summary}</p>
            <For each={props.article?.sections}>
              {(section) => (
                <>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </>
              )}
            </For>
          </Prose>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger
            asChild={(closeProps) => (
              <Button {...closeProps()} variant="outline">
                Back to guides
              </Button>
            )}
          />
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}

function HelpHero(props: { onEssentials: () => void; onStatus: () => void }) {
  return (
    <Hero.Root tone="accent" spacing="md" class="example-help-hero">
      <Hero.Content>
        <Hero.Eyebrow>A FRIENDLY PLACE TO START</Hero.Eyebrow>
        <Hero.Title size="2">
          A little guidance.
          <br />A lot more possibility.
        </Hero.Title>
        <Hero.Description>
          Practical guides for your next project, your team, and everything in between.
        </Hero.Description>
        <Hero.Actions>
          <Button onClick={props.onEssentials}>
            Start with the essentials <ArrowRight size={16} />
          </Button>
          <Button variant="outline" onClick={props.onStatus}>
            Check service status
          </Button>
        </Hero.Actions>
      </Hero.Content>
    </Hero.Root>
  );
}

function HelpFooter(props: { guideId: string; onStatus: () => void }) {
  return (
    <Footer.Root tone="subtle">
      <Footer.Content>
        <Footer.Brand>
          <strong>forma</strong>
          <p class="example-muted">Good work starts with a little clarity.</p>
        </Footer.Brand>
        <Footer.Links>
          <Footer.Group>
            <Footer.Title>Find your way</Footer.Title>
            <Footer.Link href={`#${props.guideId}`}>Browse guides</Footer.Link>
            <Footer.Link
              href="#status"
              onClick={(event) => {
                event.preventDefault();
                props.onStatus();
              }}
            >
              Service status
            </Footer.Link>
          </Footer.Group>
        </Footer.Links>
      </Footer.Content>
      <Footer.Meta>Made for the way teams work together.</Footer.Meta>
    </Footer.Root>
  );
}
