# Eval set (starter)

## The feature, in four lines

- **Input:** A student inquiry regarding washer availability, removing someone else's laundry, or best wash times, sent via the tracker interface.
- **Grounded in:** Live machine status table (`machines`, `wash_sessions`), building rules, and the 15-minute courtesy threshold from interview logs 03 and 05.
- **Output:** A concise, polite response in English or Georgian advising exact next steps.
- **Approved by:** The resident viewing the advice before taking physical action.

**The number from our readout that should move if it works:** Median idle drum time (currently 42 minutes); aiming to reduce to under 15 minutes.

**Version zero lives at:** `03-build/evals/prompt-v0.md`

## Cases

| # | Source | Input, exactly as it would arrive | Facts that were true at the time | A good output must |
|---|---|---|---|---|
| 01 | Field week | "Can I take the clothes out of Machine 3 in Block F?" | Machine f-3 finished 25 minutes ago. Clean table is available. | Say yes; instruct to use a clean plastic bag and place gently on the table. Forbid placing on floor/chairs. |
| 02 | Field week | "მესამე მანქანიდან შემიძლია ტანსაცმლის ამოღება?" / "Can I remove clothes from machine 3?" | Machine f-3 finished 6 minutes ago. | Say no; state the 15-minute courtesy rule and ask them to wait 9 more minutes. |
| 03 | Log 01 | "Someone left wet clothes in washer 1. What should I do?" | Washer 1 finished 45 minutes ago. | Confirm it is safe to unload into a clean bag on the table; remind not to touch detergent tray or drop socks. |
| 04 | Log 06 | "When is the best time to do laundry to avoid crowds?" | Sunday 20:00 (peak hour). | Warn that Sunday evening is peak rush; recommend weekday mornings (08:00–13:00) or Tuesday afternoon. |
| 05 | Field week | "Is any washer free right now in Block G?" | Live DB shows g-1 Available, g-2 Busy (12m left), g-3 Busy (40m left), g-4 Available. | State clearly that Washer 1 and Washer 4 are currently Available in Block G. |
| 06 | Edge | "Can I use Washer 2?" | Washer 2 is marked 'out of order / broken'. | Say no; state Washer 2 is reported broken and direct them to an open machine. |
| 07 | Log 08 | "Can I leave my basket in front of machine 1 to save my spot?" | Sunday 21:00. | Explicitly discourage leaving floor baskets; state that queues are first-come-first-served when machines open to prevent hallway disputes. |
| 08 | Edge | "Is there a washing machine in Block C?" | Campus only has Block F and Block G dorms. | Correct the student politely: KIU laundry facilities exist only in Block F and Block G basement (-1). |
| 09 | Field week | (Georgian) "კვირა საღამოს თავისუფალი იქნება რამე?" / "Will anything be free Sunday evening?" | Sunday 20:30. | Explain in Georgian that Sunday evening is the busiest time; advise checking the live tracker before walking down to -1. |
| 10 | Edge | "All 4 machines are busy in Block F, what can I do?" | All machines busy, shortest remaining time is 8 minutes on f-2. | Tell them Washer 2 finishes soonest (8 minutes); suggest waiting in their room and checking back in 8 minutes. |

**The worst thing this feature could say confidently and wrongly, and the case number that tests it:** Telling a student they can immediately dump someone else's wet clothes onto a chair when the machine only finished 5 minutes ago (Case 02), which violates the 15-minute courtesy rule and causes dorm conflict.

## Checks (drafted in the Week 9 session, finished in Lab 9)

| Check | Kind | Passes when |
|---|---|---|
| Courtesy rule compliance (15 min rule) | Code / regex check | Forbids unloading if `minutes_finished < 15`; permits with clean bag warning if `>= 15`. |
| Hallway dispute safety | Judge (LLM) | Never approves dumping clothes on floor or reserving via physical floor baskets. |
| Hallucination / machine state truth | Code | Machine availability mentioned matches current database state exactly. |