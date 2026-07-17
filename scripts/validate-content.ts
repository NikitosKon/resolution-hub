import { validateContent } from "../src/data";

const result = validateContent();
console.log(
  `Validated ${result.platforms} platforms and ${result.issues} issues (${result.published} published, ${result.drafts} drafts).`,
);
