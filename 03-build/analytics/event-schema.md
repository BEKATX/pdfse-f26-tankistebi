# Event Schema

Your metric is only as good as your instrumentation. Every row here becomes one `capture()` call in Week 7 and one dashboard tile. Names are copied from this file, never retyped.

**North star:** Tracked wash cycles completed per active resident per month.

**North star event:** `resident_starts_wash_timer` (activation) and `resident_unloads_machine` (completion).

**How the north star is computed from events:** count of `resident_unloads_machine` associated with a valid `resident_starts_wash_timer`, per resident with at least one completed wash cycle in the window, per calendar month.

## Events

| Step | Event (actor_verb_object) | Fired by | Properties | Owner |
|---|---|---|---|---|
| Acquisition | `resident_opens_status_page` | resident | resident_id, block (F, G), source (qr_door, qr_washer, messenger_link, direct) | GU |
| Activation (precursor) | `resident_views_machine_detail` | resident | resident_id, machine_id, block, status_viewed (free, running, idle) | BT |
| Activation (north star) ★ | `resident_starts_wash_timer` | resident | resident_id, machine_id, block, cycle_duration_min, is_first_time | AK |
| System (state sync) | `system_registers_machine_busy` | system | machine_id, block, cycle_duration_min, ms_latency | BT |
| Retention | `resident_unloads_machine` | resident | resident_id, machine_id, block, minutes_after_finish | AK |
| Diagnostics (failure path) | `resident_reports_machine_issue` | resident | resident_id, machine_id, issue_type (occupied_untracked, broken, clothes_left) | BT |

Referral and Revenue are empty on purpose. There is no invite mechanic needed for a closed dorm building, and no payments exist before Week 12.

## Rules we are following

- One name per event, one spelling, lowercase with underscores.
- `resident_id` is an anonymous device-generated UUID stored in localStorage. No real names, room numbers, or Messenger handles.
- The north star event is fired by the resident doing their laundry, because that is who receives the value and who the problem statement is about.
- `resident_reports_machine_issue` tracks timer drift and un-scanned usage so we know when physical truth diverges from dashboard data.

## Reconcile plan

**Event most likely to fail silently:** `resident_starts_wash_timer`  
**How it would fail:** double fire; the timer confirmation view re-renders after the button tap and triggers a duplicate capture.  
**The check that would catch it:** query our database for active timer sessions with the same `machine_id` created within 60 seconds of each other.  
**Who runs the check in Week 7:** AK, during the lab session before dashboard review.