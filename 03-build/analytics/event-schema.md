# Event Schema

**Save this file as:** `03-build/analytics/event-schema.md`

Your metric is only as good as your instrumentation. Every row here becomes one `capture()` call in Week 7 and one dashboard tile. Names are copied from this file, never retyped.

**North star:** Successful wash starts preceded by a remote status check per active resident per week.

**North star event:** `resident_starts_wash`

**How the north star is computed from events:** count of `resident_starts_wash` where `had_prior_status_check = true`, divided by count of distinct `resident_id`s with at least one status check in a rolling 7-day window.

## Events

| Step | Event (actor_verb_object) | Fired by | Properties | Owner |
|---|---|---|---|---|
| Acquisition | `resident_opens_status_board` | resident | resident_id, block_id, floor_number | GU |
| Activation (precursor) | `resident_views_machine_detail` | resident | resident_id, machine_id, current_status | GU |
| Activation (north star) ★ | `resident_starts_wash` | resident | resident_id, machine_id, cycle_duration_minutes, had_prior_status_check | AK |
| Retention | `resident_sets_cycle_end_reminder` | resident | resident_id, machine_id, notify_minutes_before | AK |
| Activation (failure path) | `resident_abandons_due_to_all_full` | resident | resident_id, occupied_machines_count, min_wait_time_minutes | BT |

Referral and Revenue remain empty on purpose. There is nothing to refer and no payment collected before Week 12.

## Rules we are following

- One name per event, one spelling, lowercase with underscores.
- `resident_id` is an anonymized internal string. No student names, room numbers, emails, or Messenger handles.
- The north star event is fired by the resident who gains the value of avoiding empty trips to the -1 floor.
- `resident_views_machine_detail` acts as the precursor so we can diagnose whether drop-offs are caused by high machine congestion or lack of intent.

## Reconcile plan

**Event most likely to fail silently:** `resident_starts_wash`  
**How it would fail:** Double firing if the resident taps the confirmation button multiple times on an unstable dorm Wi-Fi connection.  
**The check that would catch it:** Count unique wash records in our application database for the same week and compare against captured event counts in PostHog.  
**Who runs the check in Week 7:** GU
