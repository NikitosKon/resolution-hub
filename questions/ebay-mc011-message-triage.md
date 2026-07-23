# Reader questions: ebay-mc011-message-triage

## Scope and evidence boundary

- Platform: eBay; language: Russian; primary intent: diagnostic triage of an MC011 or related restriction message.
- The page must start from the reader's authenticated notice, registered eBay site, account type, affected function, and exact requested action. It is not a universal document checklist or a reinstatement promise.
- Official evidence is market-scoped (S1–S6 in `research/ebay-mc011-message-triage.md`). The MC011-specific official example found is eBay Japan and cannot be generalized to UK, US, Ukraine, EU, or another market.
- No matching publishable `LEVEL 2` confirmed-owner record exists. The intake file `knowledge/confirmed-experience/intake/ebay-mc011-documents-case-intake.md` is not evidence.
- This artifact records questions only. It does not answer them, prescribe a submission sequence, or infer the cause or outcome of a particular restriction.

## Immediate questions

### Q1 — Is the notice genuine, and is the same request visible in authenticated eBay Messages?

- Reader priority: P0 (first check)
- Why it matters: The reader must distinguish an account action from a spoofed email before opening links or sending information.
- Evidence level: LEVEL 1 (eBay security and restriction help) + LEVEL 3 (SERP safety intent)
- Source/record IDs: S1, S5; SERP Intent Analysis / Missing Topics
- Confidence: HIGH for checking Messages; LOW for the unprovided notice
- Architect action: **answer with source-linked verification guidance and qualify by market; block any authenticity conclusion without the notice**

### Q2 — Which eBay site or registered market and account type apply?

- Reader priority: P0
- Why it matters: Help text, document examples, upload rules, and appeal routes differ by market and seller context.
- Evidence level: LEVEL 1
- Source/record IDs: S1, S2, S3, S4; research Evidence gaps 1 and 7
- Confidence: HIGH
- Architect action: **answer as required context; block market-specific examples until confirmed**

### Q3 — What does the exact authenticated message ask the seller to do?

- Reader priority: P0
- Why it matters: The message-specific instruction controls the next safe action; the code alone does not identify documents, deadline, channel, or exception.
- Evidence level: LEVEL 1
- Source/record IDs: S1, S3; research F3, F6; SERP Recommended Angle
- Confidence: HIGH for message-specific handling; LOW for an unseen notice
- Architect action: **answer with a transcription/redaction prompt and qualify; block any exact requirement until reviewed**

### Q4 — Is this a general restriction, a concrete document request, a payout issue, or an appeal question?

- Reader priority: P0
- Why it matters: These are separate intents with different official routes and should not be collapsed into one MC011 checklist.
- Evidence level: LEVEL 1 (official process distinctions) + LEVEL 3 (recurring search language)
- Source/record IDs: S1, S2, S4; SERP Intent Analysis / Missing Topics; internal intent boundary to `mc011-documents-requested`
- Confidence: MEDIUM
- Architect action: **answer with a classification table and qualify; link only after the reader confirms the matching state**

## Risk questions

### Q5 — Which account function is actually restricted: listings, selling, messages, profile changes, payouts, or another function?

- Reader priority: P0
- Why it matters: eBay lists multiple possible effects, but no single effect applies to every restriction.
- Evidence level: LEVEL 1
- Source/record IDs: S1; research F2; SERP Intent Analysis
- Confidence: HIGH for the conditional list; LOW for this account
- Architect action: **answer conditionally; do not state that every MC011 blocks every function**

### Q6 — Does the notice name a deadline, a payment action, a listing change, tracking, or another special step?

- Reader priority: P0
- Why it matters: A special instruction in the authenticated notice takes precedence over generic advice.
- Evidence level: LEVEL 1
- Source/record IDs: S1, S3; research F3, F6, Evidence gap 2
- Confidence: HIGH for checking the notice; LOW for any missing deadline or action
- Architect action: **answer with a notice-reading checklist and qualify; block any deadline claim without the notice**

### Q7 — Could this restriction affect payouts or money already owed?

- Reader priority: P0
- Why it matters: Funds and active sales are a high-risk concern, but eBay describes payout effects as conditional and does not establish a universal duration.
- Evidence level: LEVEL 1 + LEVEL 3 for recurrence of the concern
- Source/record IDs: S1, S3; D3; research F2, F6, Evidence gap 6
- Confidence: HIGH for possible conditional impact; LOW for timing or outcome
- Architect action: **answer conditionally; block payout-release predictions and timelines**

### Q8 — Is it safe to reply through an email link, or should the seller use the authenticated account route?

- Reader priority: P0
- Why it matters: The reader needs a safe route and should avoid phishing, password disclosure, and unsolicited attachments.
- Evidence level: LEVEL 1
- Source/record IDs: S1, S5
- Confidence: HIGH within the cited security guidance
- Architect action: **answer with official-route and privacy guidance; do not request secrets**

### Q9 — Can the seller open or use another eBay account while this one is restricted?

- Reader priority: P0
- Why it matters: A workaround can violate eBay policy and create an additional compliance risk.
- Evidence level: LEVEL 1
- Source/record IDs: S6
- Confidence: HIGH for the cited policy; local agreement should be checked before jurisdiction-specific wording
- Architect action: **answer with a direct prohibition on circumvention; do not suggest replacement accounts**

## Account access questions

### Q10 — Can the seller still sign in and see the notice in eBay Messages or Seller Hub?

- Reader priority: P1
- Why it matters: The available authenticated action surface determines what can be checked without relying on an email or anecdote.
- Evidence level: LEVEL 1 (Messages routing) + LEVEL 3 (account-navigation pattern)
- Source/record IDs: S1, S5; SERP Opportunities
- Confidence: HIGH for checking Messages; LOW for access to this account
- Architect action: **answer as a diagnostic branch and qualify; do not assume access or loss of access**

### Q11 — What should the reader record if the public help page does not match the signed-in notice?

- Reader priority: P1
- Why it matters: Public help pages are market-specific and cannot replace the account-specific instruction.
- Evidence level: LEVEL 1
- Source/record IDs: S1, S3, S4; research Evidence gaps 1–3
- Confidence: HIGH
- Architect action: **answer with a comparison prompt (market, exact wording, requested action, blocked function) and qualify**

### Q12 — What if the reader cannot sign in or cannot locate the authenticated copy?

- Reader priority: P1
- Why it matters: The safe route and available evidence are unknown when the account action surface is unavailable.
- Evidence level: LEVEL 3 (recurring access concern); no direct market-specific source in the current research
- Source/record IDs: SERP User language and Missing Topics; research Evidence gap 2
- Confidence: LOW
- Architect action: **qualify and block any universal recovery route until the registered market and available official support path are confirmed**

## Money and payout questions

### Q13 — Does the MC011 message explicitly mention a payout hold, outstanding balance, or payment action?

- Reader priority: P0
- Why it matters: eBay lists payout effects and outstanding payment actions as possible, not automatic, branches.
- Evidence level: LEVEL 1
- Source/record IDs: S1; research F2, F3
- Confidence: HIGH for asking the question; LOW for the reader's account
- Architect action: **answer with a conditional classification prompt; do not infer a money state from MC011 alone**

### Q14 — How long will a payout remain held or when will money be released?

- Reader priority: P0
- Why it matters: Timing is a material financial claim and current evidence does not support a universal duration or result.
- Evidence level: LEVEL 3 (recurring community question only)
- Source/record IDs: D3; research Evidence gap 6
- Confidence: LOW
- Architect action: **block on current market-specific official evidence; do not answer with a number or promise**

## Verification questions

### Q15 — Does this exact notice request identity, address, inventory, purchase, tracking, or another kind of evidence?

- Reader priority: P0
- Why it matters: Different requests require different evidence categories; the code does not establish one global document set.
- Evidence level: LEVEL 1 + LEVEL 3 for recurring question language
- Source/record IDs: S2, S3; D1, D2, D4; research F4, F6, F7
- Confidence: HIGH for the categories appearing in scoped sources; LOW for global applicability
- Architect action: **answer with a request-category matrix and qualify market scope; block any specific list without the notice**

### Q16 — Do the records need to be current, readable, complete, and consistent with the account details?

- Reader priority: P0
- Why it matters: Official seller-registration guidance describes document-quality requirements in a specific context, while the exact MC011 workflow remains market- and message-specific.
- Evidence level: LEVEL 1
- Source/record IDs: S2; research F4, F5, Evidence gaps 3–4
- Confidence: HIGH within the US seller-registration context; LOW as a universal MC011 rule
- Architect action: **answer only with explicit context labels; qualify and do not transplant US requirements globally**

### Q17 — What file format, size limit, upload channel, or submission deadline applies?

- Reader priority: P0
- Why it matters: The available US and Japan sources describe different workflows and limits; no universal MC011 limits are established.
- Evidence level: LEVEL 1 (market-specific examples)
- Source/record IDs: S2, S3; research F5, F7, Evidence gap 4
- Confidence: HIGH that limits are context-specific; LOW for an unprovided account
- Architect action: **block numeric or channel claims until the market and notice are confirmed**

## Mistake-prevention questions

### Q18 — What can the seller do if the exact invoice, receipt, or tracking record is unavailable?

- Reader priority: P0
- Why it matters: Community discussions show this is a recurring concern, but they do not establish an accepted substitute and include unsafe advice.
- Evidence level: LEVEL 3 (discovery-only question signal)
- Source/record IDs: D1, D2, D4; research Observed patterns
- Confidence: MEDIUM for recurrence of the question; LOW for any answer
- Architect action: **qualify and block any substitute-document recommendation without current official, market-specific evidence**

### Q19 — Could altered, fabricated, bought, or mismatched evidence be used to satisfy the request?

- Reader priority: P0
- Why it matters: The page must prevent document fraud and should not turn unsafe community suggestions into an option.
- Evidence level: LEVEL 1 for matching/current/readable requirements + LEVEL 4 for Resolution Hub safety rules
- Source/record IDs: S2, S6; D2; project safety rules
- Confidence: HIGH for the safety boundary
- Architect action: **answer with a clear prohibition and redirect to genuine records; never provide evasion guidance**

### Q20 — Can an eBay Japan MC011 checklist be copied to another registered market?

- Reader priority: P0
- Why it matters: The only MC011-specific official example found is explicitly market-bounded; copying it would create a false universal checklist.
- Evidence level: LEVEL 1
- Source/record IDs: S3; research F6, F7, Evidence gaps 1 and 3
- Confidence: HIGH that the market boundary must be disclosed
- Architect action: **answer with a market-scope warning; do not present Japan's examples or limits as global**

## Next-step questions

### Q21 — Does the notice indicate that an appeal is available, and which official route applies in this market?

- Reader priority: P1
- Why it matters: eBay describes appeal eligibility case-by-case and separates some payment and verification issues from the complaint route.
- Evidence level: LEVEL 1
- Source/record IDs: S4; research F8
- Confidence: HIGH for case-by-case framing; LOW for a particular reader
- Architect action: **answer conditionally with the notice and market as prerequisites; do not imply appeal eligibility**

### Q22 — What should the reader verify immediately before submitting a reply or evidence?

- Reader priority: P1
- Why it matters: A short pre-submission check can reduce accidental mismatch, privacy exposure, and submission through the wrong route without promising an outcome.
- Evidence level: LEVEL 1 + LEVEL 4 safety guidance
- Source/record IDs: S1, S2, S3, S5; project safety rules
- Confidence: HIGH for the safety checks; LOW for account-specific requirements
- Architect action: **answer with a bounded checklist; qualify every item by the authenticated notice and market**

### Q23 — When should the reader move from this triage guide to `mc011-documents-requested`?

- Reader priority: P1
- Why it matters: The documents guide has a narrower intent and should be used only after the reader confirms a concrete document request.
- Evidence level: LEVEL 1 (message-specific steps) + LEVEL 3 (SERP intent separation)
- Source/record IDs: S1, S3; SERP Recommended Angle / Opportunities; content-plan intent boundary
- Confidence: HIGH for the scope distinction
- Architect action: **answer with one conditional internal link; avoid repeating a universal checklist**

## Questions answered by official sources

The following questions have a usable official source for the principle, but the page must still qualify by registered market and individual notice. Do not turn these records into answers for an unseen account:

- Q1 (authenticated Messages copy and phishing checks): S1, S5.
- Q3 and Q6 (the notice-specific steps control the next action): S1, S3.
- Q5 and Q13 (possible account-function and payout effects are conditional): S1, S3.
- Q9 (no additional account or false information to circumvent restrictions): S6.
- Q15–Q17 (verification/document examples and limits are context-specific): S2, S3.
- Q21 (appeal eligibility and route can be case-by-case): S4.

## Questions supported only by observed patterns

These questions are useful because they recur in community or search language, but no answer may be presented as eBay policy without a current first-party source:

- Q7 (payout concern and release uncertainty): D3; LEVEL 3; LOW for any timing or outcome.
- Q12 (loss of access to the authenticated message): SERP User language / Missing Topics; LEVEL 3; LOW.
- Q18 (missing invoice, receipt, or tracking record): D1, D2, D4; LEVEL 3; LOW for any substitute.
- Q14 (review duration and payout release): D3; LEVEL 3; LOW.
- The recurring questions about name/address matching, tracking evidence, and confirmation of submission: D1, D2, D4; LEVEL 3; LOW for a universal answer.

## Questions requiring owner experience

No publishable owner experience is available for this slug. Any question below can be used only if a matching case is later verified, redacted, and approved for publication:

- Can the owner show a genuinely matching MC011 notice, with market, account type, requested action, and affected function recorded?
- Is there a permitted redacted screenshot or exact quotation showing the message-specific route, without passwords, authentication codes, full identity documents, or other secrets?
- What actions were actually taken and what outcome was observed, without presenting correlation as causation or implying a repeatable result?

- Reader priority: P2 (trust enhancement, not a substitute for official guidance)
- Why it matters: A first-hand example would clarify how the triage process looks in practice, but the current intake is `INTAKE_ONLY — NOT_CONFIRMED_EXPERIENCE`.
- Evidence level: LEVEL 2 is unavailable; current status is `OWNER_INPUT_REQUIRED`.
- Source/record IDs: `knowledge/confirmed-experience/intake/ebay-mc011-documents-case-intake.md`; research Verified owner experience
- Confidence: LOW until evidence review
- Architect action: **block any case study or first-person claim; omit or mark `EXPERIENCE_REQUIRED` if the final angle depends on it**

## Questions that cannot safely be answered

The following must remain unanswered or explicitly marked as account-specific until the required evidence is obtained:

- What triggered this particular MC011 notice (including assumptions about account age, sales volume, location, category, or linked accounts)?
- Which documents, file formats, file sizes, substitute records, deadline, or upload channel will eBay accept for an unprovided notice?
- Whether a payout will be held, when it will be released, or whether an account will be restored.
- How long review will take, the probability of a successful appeal, or the outcome of contacting support.
- Whether a US or Japan document example applies to a Russian-speaking reader's registered eBay site.
- Whether opening another account, changing identity details, or another workaround would bypass the restriction. Such circumvention guidance is prohibited.

- Reader priority: P0 for publication safety
- Why it matters: These are high-impact claims with missing market, notice, source-freshness, and evidence inputs.
- Evidence level: LEVEL 1 shows the gaps and scoped alternatives; no evidence supports a universal answer.
- Source/record IDs: research Evidence gaps 1–8; S1–S6; project safety rules
- Confidence: HIGH that the claims are not safely universal; LOW for any individual outcome
- Architect action: **block on `MANUAL_REVIEW_REQUIRED`, `SOURCE_FRESHNESS_REQUIRED`, and, where first-hand proof is necessary, `EXPERIENCE_REQUIRED`**

## Rerun note

2026-07-23: Created after reading the latest `research/ebay-mc011-message-triage.md`, `serp/ebay-mc011-message-triage.md`, the `resource-ebay-mc011-triage` row in `content-plan/pages.csv`, and the available confirmed-experience records. No answers, article prose, outline, CTA, or publication route was created.
