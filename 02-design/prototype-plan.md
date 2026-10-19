# Prototype Plan

**Save this file as:** `02-design/prototype-plan.md`

## 1. The riskiest assumption

> We assume that dorm residents will check a live mobile status board before leaving their room, rather than walking down to the -1 floor blindly or leaving baskets on the floor to hold a spot.

**Why this one is riskiest:** Students are accustomed to checking manually with their own eyes (01, 02, 06). If residents do not trust or check a screen before grabbing their laundry basket, real-time availability tracking is useless.

## 2. The one action

> A student can see the real-time availability and remaining cycle countdown of all four washers on the -1 floor from their room.

## 3. Fidelity

| Choice | Why it is the cheapest thing that can kill the assumption in section 1 | Tool | Time we will spend |
|---|---|---|---|
| Clickable mobile web screen | Tests whether students can glance at machine countdowns on their phone; code adds database overhead not needed to test glance behavior. | Figma / v0 mobile prototype | One evening |

## 4. Screens, each traced to evidence

| Screen | What the tester does on it | The log or problem-statement sentence that earns it |
|---|---|---|
| 1. -1 Floor Overview | Sees all 4 machines with status badges: "Free", "Running (14 min left)", or "Idle Finished" | Students make 2–3 blind trips because availability cannot be checked remotely (01, 02, 06) |
| 2. Machine Detail Card | Views exact cycle end time and taps "Notify me when free" | Phone timers drift by 10–15 mins from actual machine countdowns (02, 05) |
| 3. Alert Confirmation | Sees confirmation that an alert will fire 5 minutes before cycle ends | Clothes get left for 2 hours because -1 floor is out of sight (03, 06) |

**Will not appear, even if a tool generates it:** User login / SSO accounts, payment/token processing, machine remote control/start, social dorm chat.

## 5. The test that can fail

- **Task, read aloud to tester, word for word:** "You are in your 3rd-floor dorm room with a basket of dirty laundry on Sunday evening. Show me what you would do with this screen before going downstairs."
- **Success looks like:** The tester identifies an open or soon-to-be-open machine and determines whether to walk down within 30 seconds without asking for guidance.
- **Failure looks like:** The tester asks "do I have to go to the basement to check?"; taps away from the status screen to look for a chat; or states they would still walk down to verify with their own eyes.
- **Decision rule:** If 3 or more of 5 testers fail to trust or understand the status display without explanation, we pivot to testing a physical indicator at the floor level before building.
- **Our prediction of the first thing a tester gets wrong:** Tapping to "reserve" a machine rather than just reading availability.

## 6. Five testers

| Code name | From log, or new | Who on the team books them |
|---|---|---|
| Resident-F3 | log 01 | Beka |
| Resident-F207 | log 02 | Anastasia |
| Resident-G2 | log 05 | Giorgi |
| Resident-F305 | new (3rd floor Block F) | Beka |
| Resident-G301 | new (3rd floor Block G) | Giorgi |