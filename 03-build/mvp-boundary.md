# MVP Boundary

The smallest complete user journey that tests whether the product creates value. Complete: the person gets the value, start to finish. Smallest: nothing that is not on that path is in Sprint 1.

**Value hypothesis under test:** A resident on an upper floor who checks live machine availability and claims a cycle timer from their phone will avoid empty trips down to the -1 basement and prevent wet laundry from being dumped on dirty surfaces (logs 01, 02, 05, 06; usability sessions 1, 2).

**The one person walking this journey:** Resident-F304, 3rd-year student on the 3rd floor of Block F, carries full laundry baskets down 3 flights of stairs to -1 twice a week, frustrated by finding full machines and guessing timers.

## The journey 

1. Resident in their dorm room opens the tracker link (from a browser bookmark or pinned Messenger post) and selects their building (Block F or Block G).
2. Resident checks the 4 washer cards on screen to see which machines are available and how many minutes remain on running machines.
3. Resident walks down to -1 with their basket, loads an open washer, and taps "Start Wash" on that washer's card, selecting a cycle duration (30m, 45m, or 60m).
4. The system registers the machine as busy, starts the live countdown, and displays the finish time to all residents.
5. When the countdown reaches 0:00, the machine card switches to "Finished - Needs Unloading"; the owner (or the next resident) taps "Unloaded" once the drum is emptied, returning the machine to "Available".

**Why this is complete:** After step 5, the washer is freed for the next student, the owner was prompted before wet clothes sat forgotten, and nobody walked down to -1 to find an unexpected roadblock.

**Why this is smallest:** We considered removing step 5 and just letting the timer reset to "Available" at 0:00. But logs 01, 02, and 05 show that laundry sitting in stopped machines is the primary cause of students dumping clothes on dusty chairs. Without an explicit "Finished / Unload" state, the physical problem is not solved.

## Cut list

| Feature | Reason (cite the log, session, or hypothesis) | Comes back when |
|---|---|---|
| User sign-up & password login | Session 1 and log 04: any registration wall leads to immediate abandonment. Anonymous device UUID is zero-friction | Sprint 3, only if malicious trolling occurs |
| Automated SMS or Messenger push bot | Messages-out guide: SMS costs money, Messenger bots require Facebook App approval queues longer than the sprint. On-screen timers and browser audio alerts are free | Week 10, if residents ignore the browser timer |
| Advance machine booking / queue reservations | Usability session 3: reserving machines when students aren't physically present creates "ghost claims" and hallway arguments (log 08) | Week 10, after live timer adoption exceeds 80% |
| IoT hardware current-sensing plugs | Hypothesis is testable with software QR timers; buying and configuring ESP32s adds hardware lead time we cannot afford before Week 7 | Never, unless software compliance fails completely |
| Machine load capacity / detergent recommendations | 0 of 10 logs asked for detergent tips; residents only care about time and machine vacancy | Never |
| Maintenance report ticketing to campus staff | Dorm administration operates outside student control; our problem is peer coordination | Only if building management requests an admin view |
| Block C support | Dormitory campus only has Block F and Block G | Never |

## Step to event

| Step | Event (actor_verb_object) | In the schema? |
|---|---|---|
| 1 | `resident_opens_status_page` | yes |
| 2 | `resident_views_machine_detail` | yes |
| 3 | `resident_starts_wash_timer` | yes (North star event ★) |
| 4 | `system_registers_machine_busy` | added today (fired by system; machine_id, block, cycle_minutes, ms_latency; owner BT) |
| 5 | `resident_unloads_machine` | yes |

**North star step:** 3

## The DECISIONS.md line
