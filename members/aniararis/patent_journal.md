# Pattern journal · Anastasia Khevtsuriani (@aniararis)

Same prompt every week: Where did you apply this pattern this week, where did you exercise agency beyond your assigned lane, and what did you hack together to test something faster than the plan allowed? Link the DECISIONS.md lines you drove.

## Week 1 · Act like an owner, not a role

Approached discovery with an ownership mindset, focusing on understanding students’ everyday problems before jumping to solutions. Took responsibility for exploring the laundry experience from the resident’s perspective, including the effort of checking machines, remembering finished cycles, and handling other people’s clothes.

## Week 2 · Evidence over opinion

Conducted Interviews 02, 04, and 06 with Block F residents and logged Interview 03 with a Block C resident. Used concrete experiences to challenge assumptions: removing someone else’s finished laundry can be socially accepted, while placing it on an unclean surface creates a separate hygiene concern. Documented the plastic bag workaround and the warning that false machine availability would make students abandon a system. Contributed interview evidence relevant to the laundry problem selection recorded in [DECISIONS.md](https://github.com/BEKATX/pdfse-f26-tankistebi/blob/main/DECISIONS.md).

## Week 3 · Synthesis over summary

Connected findings across the interviews rather than treating each complaint separately. Interview 06 linked the isolated -1 floor location to laundry being forgotten for over two hours, while Interviews 02 and 03 showed how unattended clothes lead to removal and hygiene workarounds. Interview 04 added a constraint for any future solution: availability information must be trustworthy. Together, these findings suggest that the problem involves remembering, coordinating, and handling clothes safely—not just waiting for a free machine. Used the existing plastic bag workaround as a concrete starting point for thinking about a quick hygiene test.

## Week 4 · Test the riskiest assumption

Focused on validating whether residents would actually use a browser-based laundry tracker instead of relying on the dorm Messenger chat. One of our biggest assumptions was that students would check machine availability before walking down to the basement if the information was accessible without downloading an app or creating an account. I contributed to removing the registration barrier by implementing an anonymous UUID generator using browser `localStorage`, allowing us to track individual usage and retention without collecting personal information.

Beyond my assigned lane: I helped establish the technical requirements for anonymous resident identification so analytics could distinguish users without requiring university email logins.

My hack: I used `localStorage` to generate and persist unique resident IDs, avoiding the need to build an authentication system during the prototype stage.

## Week 5 · One metric that matters

Pushed back against measuring registered accounts or website visits as our main success metric. Opening the website does not necessarily mean a resident's laundry problem has been solved. We focused on tracking actual wash activity, with completed wash cycles per active resident per month as our North Star.

Beyond my assigned lane: I reviewed the event schema to ensure `resident_id` remained an anonymous device-generated identifier without personal contact details. I also helped prepare our analytics for the production walkthrough by defining how timer-start events could be reconciled against database records.

My hack: I manually seeded database records through the SQL editor so we could test the frontend machine cards before our API routes and database integration were fully implemented.

## Week 6 · The smallest complete journey

My main contribution was developing the wash cycle timer API at `/api/machines/[id]/start`. I focused on calculating `ends_at` on the server in UTC rather than relying on the user's device clock. This was important because residents could access the application from devices with different timezones or incorrect system clocks, potentially causing inaccurate countdowns.

Beyond my assigned lane: I helped GU review our `.gitignore` configuration to ensure sensitive production database credentials stored in `.env.local` were never committed to GitHub.

My hack: I mocked server responses with static JSON files while the database tables were being configured, allowing BT to continue building and testing the frontend without waiting for API integration.

## Week 7 · Ship to learn

Our first production walkthrough showed why testing locally is not enough. During the production deployment check, we discovered that PostHog was recording six events while Neon contained only three corresponding database rows. I investigated the discrepancy and identified a duplicate event capture caused by a `posthog.capture` call inside the React button's `onClick` handler firing alongside the API response handler. I removed the duplicate client-side capture and verified that both PostHog and Neon recorded three events.

Beyond my assigned lane: I reviewed S5b (Inaccurate Timer Flag Modal) on the production URL and verified that its submission worked. I also ran and documented Usability Test Session 1 with Resident-F102.

My hack: I manually reconciled PostHog events against the raw database records rather than trusting the dashboard alone, which helped us catch an analytics bug before real students relied on our metrics.

## Week 8 · Read what happened, not what you hoped

Applied this pattern by analyzing our actual field-week results instead of relying on our initial expectations. We predicted eight wash starts but recorded nine, and status page visits reached 31 against our prediction of 25. However, our biggest drop-off occurred after the wash cycle finished: only three of the nine cycles were marked as unloaded, leaving six finished cycles uncleared on the board. The median idle time was 42 minutes.

Beyond my assigned lane: I reconciled PostHog against Neon to confirm that our field-week numbers reflected real usage, and I took responsibility for Interview 11 with Resident-F304 to investigate why the unload action was missed.

My hack: I compared timer completion with the unload event and followed up directly with a resident. This revealed that they had removed their clothes but left their phone upstairs, meaning the problem was not necessarily forgotten laundry but the difficulty of interacting with the site while carrying wet clothes. This evidence helped justify testing post-cycle reminders.
