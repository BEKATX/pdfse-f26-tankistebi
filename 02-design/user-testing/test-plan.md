# Prototype Test Plan

**Save this file as:** `02-design/user-testing/test-plan.md`

The test itself was written in Lab 4 and is frozen. This file adds the people, the schedule, and who runs each session. Sessions are logged in `02-design/user-testing/usability-findings.md`, one block each, as you run them.

**Prototype v1 link:** [url here]

**Riskiest assumption under test:** Dorm residents will check a remote mobile status board from their room before heading down to the -1 floor, rather than walking down blindly or leaving baskets on the floor to hold a spot.

## The frozen test (copied from `02-design/prototype-plan.md`, section 5, unchanged)

**Task, read aloud word for word:** "You are in your 3rd-floor dorm room with a basket of dirty laundry on Sunday evening. Show me what you would do with this screen before going downstairs."

**Success:** The tester identifies an open or soon-to-be-open machine and determines whether to walk down within 30 seconds without asking for guidance.

**Failure behaviors:**
1. Asks "do I have to go to the basement to check?" or "what do I press?"
2. Taps away from the status screen to look for a chat or settings menu.
3. States they would still walk down to the -1 floor to verify with their own eyes before taking their laundry.

**Decision rule (out of 5):** If 3 or more of 5 testers fail, our assumption is weakened, and we test a physical floor-level status indicator before building further.

**Predicted first mistake:** Tapping to "reserve" a machine rather than reading live availability.

## Five testers

| # | Code name | Role (as in your ICP) | Why they fit the ICP | Session runner (asks) | Session logger (writes) | Target day | Status (messaged / booked / done) |
|---|---|---|---|---|---|---|---|
| 1 | Resident-F3 | 4th-yr CS, Block F | Log 01; regular laundry user, experienced 3 empty trips | BT | GU | Thu | booked |
| 2 | Resident-F207 | 2nd-yr, Block F | Log 02; experienced timer drift and table dumping | AK | BT | Fri | booked |
| 3 | Resident-G2 | 2nd-yr CS, Block G | Log 05; deals with -1 floor machine congestion in Block G | GU | AK | Fri | booked |
| 4 | Resident-F305 | 3rd-yr, Block F | New resident living on 3rd floor; carries baskets to -1 | BT | GU | Sat | messaged |
| 5 | Resident-G301 | 3rd-yr, Block G | New resident; washes during peak Sunday hours | AK | BT | Sun | messaged |

## Session protocol (same every time)

1. The tester opens the link on their own phone. Not yours.
2. The runner reads the task word for word, then says nothing.
3. The logger starts the timer on the last word of the task and writes: time to first tap, time to the one action, every unprompted sentence verbatim.
4. When the tester stops, or at 60 seconds, the runner asks one question only: "What were you expecting to happen?"
5. The logger writes the verdict against the rule before anyone discusses the session.
