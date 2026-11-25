# Experiment 1

**The drop this is about:** Between `resident_starts_wash_timer` (9) and `resident_unloads_machine` (3): 6 of 9 finished cycles were never marked unloaded on screen, leaving machines blocked on the board for a median of 42 minutes.

**Baseline, measured before any change:** 3 of 9 finished cycles marked unloaded (33% adherence); median 42 minutes wet clothes sit idle after cycle completion. Read from `wash_sessions` table in Neon.

## The bet

| Part | Ours |
|---|---|
| Hypothesis | Students don't tap "Unload" because they leave their phones in their rooms while carrying laundry baskets, forgetting the machine has finished. |
| Change | For 7 days, BT monitors the active countdowns and sends a manual Messenger DM to the resident 5 minutes before their cycle completes: *"Hey! Your washer on -1 finishes in 5 mins. Please grab your clothes and tap Unload on the site so others know it's free!"* |
| Metric | Number of finished cycles marked unloaded within 15 minutes of completion, counted from Neon `wash_sessions`. |
| Success threshold | At least 7 of 10 finished cycles marked unloaded within 15 minutes of completion. |
| Failure threshold | Fewer than 4 of 10 finished cycles marked unloaded within 15 minutes of completion (proving manual reminders do not change unloading behavior). |
| Decision rule | Success: Build an automatic Webhook / browser push notification at 5-minute countdown mark. Failure: Abandon notification nudges and implement an automatic 15-minute auto-reset rule where machines revert to "Available" automatically after 15 minutes idle. Fewer than 6 cycles: extend experiment 4 days. |

**Who runs it:** BT · **Starts:** Friday morning · **Ends:** Following Thursday evening

**What we will not change while it runs:** We will not change machine durations, UI button layouts, or block tabs.

## Run log

- Day 1: 

## Result (filled in when it ends, not before)

Not yet.