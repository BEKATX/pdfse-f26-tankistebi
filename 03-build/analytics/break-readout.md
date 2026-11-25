# Field-week readout

**Our state:** A: real people used it.

## 1. Is it real?

| Source | Count of `resident_starts_wash_timer` | Window | How it was counted |
|---|---|---|---|
| PostHog | 9 | Lab 7 to Lab 8 | Trends insight, total count, internal filter on (`resident_id does not contain test_`) |
| Database | 9 | Same | `SELECT count(*) FROM wash_sessions WHERE started_at > NOW() - INTERVAL '7 days' AND resident_id NOT LIKE 'test_%';` |

**Match:** Yes. Reconciled and verified by AK.

## 2. Prediction against reality

**Our prediction, pasted from `sprint-2.md` exactly as committed:** By Lab 8: 8 `resident_starts_wash_timer` events from real dorm residents (excluding our test records). Also: at least 25 `resident_opens_status_page` visits across Block F and G. We are wrong if: fewer than 4 wash timers are started, or if students post in the dorm Messenger chat asking "is washer 2 really free?" because they don't trust the board.

| What we predicted | Predicted | Real |
|---|---|---|
| Tracked wash cycles started (`resident_starts_wash_timer`) | 8 | 9 |
| Status page visits (`resident_opens_status_page`) | 25 | 31 (Block F: 19, Block G: 12) |
| Active dorm residents using the tracker | 4 | 5 |

**Did "we are wrong if" fire?** No. 9 cycles were started (exceeding the threshold of 4), and no skepticism messages appeared in the building Messenger chat.

## 3. Where people stop

| Journey step (event name, pasted) | Count, real people only |
|---|---|
| `resident_opens_status_page` | 31 (21 direct Messenger link, 10 QR door sticker) |
| `resident_views_machine_detail` | 16 |
| `resident_starts_wash_timer` (North star) | 9 (45m: 5, 60m: 3, 30m: 1) |
| `system_registers_machine_busy` | 9 |
| `resident_unloads_machine` | 3 |
| Finished cycles not marked unloaded | 6 |

**Widest drop:** Between `resident_starts_wash_timer` (9) and `resident_unloads_machine` (3): 6 of 9 completed cycles were never marked unloaded by the resident.

## 4. Who is standing at the drop

**The actor:** The resident who started the wash load.

| Person or group (code names) | What reached them | What they did | What they did not do |
|---|---|---|---|
| Resident-F304 (3rd floor F) | Messenger link | Started 3 wash cycles | Marked only 1 cycle as unloaded; left wet clothes in washer for ~50 mins |
| Resident-F105 (1st floor F) | Messenger link | Started 2 wash cycles | Unloaded 1 on screen, forgot the second |
| Resident-G204 (2nd floor G) | Messenger link | Started 2 wash cycles | Left both finished without tapping unload |
| Resident-G301 (3rd floor G) | Messenger link | Started 1 wash cycle | Did not tap unload |
| Organic walk-in (Block F -1) | QR door sign | Started 1 wash cycle | Unloaded 1 |

**One timing or count that sizes the drop:** Median 42 minutes that wet clothes sat inside a completed machine before being emptied, calculated from `ends_at` to the next machine action.

## 5. What the data refuses to say

| Question | Who we ask (code name) | Asked by, and by when |
|---|---|---|
| Did students forget their laundry in the drum, or did they take it out and just forget to tap "Unload" on their phone? | Resident-F304 | AK, done (Interview 11): "I took the clothes out, but my phone was up in my room, so I didn't bother opening the site again." |
| Why did Block G have fewer visits than Block F (12 vs 19)? | Resident-G301 | BT, done (Interview 12): "The QR sticker on Block G's -1 door fell off on Tuesday morning." |
| What did waiting students do when a machine said "Finished - Needs Unloading"? | Resident-G204 | GU, by Friday |

## 6. Claims

**Direction (two claims our counts support):**
1. Students actively check machine status before walking down: 31 opens generated 9 real wash starts without prompting.
2. The physical friction of unloading isn't the drum—it's the screen: once students are at the machine with wet laundry in both hands, they do not pull out their phone to tap "Unload".

**Not yet:** "Students don't care about forgotten laundry." Resident-F304 specifically apologized for leaving clothes in the drum; the issue is being away from their phone.

## 7. What changes

**Comes off the plan:** Advanced multi-floor queue reservations. 9 starts on 4 machines showed that basic live availability is enough to prevent staircase crowding.
**Goes on:** Automated cycle completion nudges and an auto-clear timeout (if a machine sits on "Finished" for >15 minutes, allow waiting students to safely mark it cleared).

## 8. Who is next

**Our field table as a funnel:** asked 4 · link delivered 4 · opened 4 · did first step 4 · reached north star 4

| Next person (code name, role) | Channel, and our evidence for it | Sent by | Sent in the lab? |
|---|---|---|---|
| Resident-F207 (Block F 2nd floor, Interview 02) | Direct Messenger | BT | Yes |
| Resident-F402 (Block F 4th floor, student council) | Direct Messenger | AK | Yes |
| Resident-G104 (Block G 1st floor) | Direct Messenger | GU | Yes |
| Re-stick QR code sign on Block G -1 door | Physical door sign | BT | Done in lab |

**The exact message we sent:** "Hey! We put the KIU dorm laundry tracker live last week on -1, and 9 cycles were tracked successfully without staircase guessing. Here is the link to check if Block F or G washers are free before walking down: https://vantage-xi-opal.vercel.app. Could you try it this Sunday evening when doing laundry?"

**Target before Lab 9:** 8 active residents holding a working link.