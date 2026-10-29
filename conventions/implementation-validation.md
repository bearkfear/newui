# Implementation validation

## Rule

Implement the requested behavior before creating or expanding automated tests. Provide reviewable examples, including Storybook stories for UI work, without adding test assertions or interaction test functions.

When handing off an implementation, describe what is ready for user validation. Tests may be suggested at this point. Create or expand tests only after the user explicitly states that the component or requested implementation is approved and authorizes test work. Do not infer approval from a request for adjustments, continued discussion, silence, or passing checks. Approval applies only to the reviewed scope.

Existing tests, type checks, and builds may be run during implementation. Report relevant failures without expanding the test scope.

## Rationale

User validation confirms that the implementation matches the intended result before investing in automated tests for that behavior.
