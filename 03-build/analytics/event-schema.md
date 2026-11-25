# Event Schema

Your metric is only as good as your instrumentation. Every row here becomes one `capture()` call in Week 7 and one dashboard tile. Names are copied from this file, never retyped.

**North star:** Tracked wash cycles completed per active resident per month.

**North star event:** `resident_starts_wash_timer` (activation) and `resident_unloads_machine` (completion).

**How the north star is computed from events:** count of `resident_unloads_machine` associated with a valid `resident_starts_wash_timer`, per resident with at least one completed wash cycle in the window, per calendar month.

## Events

| Step | Event (actor_verb_object) | Fired by | Properties | Owner | Live |
|---|---|---|---|---|---|
| Acquisition | `resident_opens_status_page` | resident (browser) | resident_id, block (F, G), source (qr_door, messenger_link, direct) | GU | yes |
| Activation (precursor) | `resident_views_machine_detail` | resident (browser) | resident_id, machine_id, block, status_viewed (free, running, idle) | BT | yes |
| Activation (north star) ★ | `resident_starts_wash_timer` | resident (browser, after server OK) | resident_id, machine_id, block, cycle_duration_min, is_first_time | AK | yes |
| System (state sync) | `system_registers_machine_busy` | system (server) | machine_id, block, cycle_duration_min, ms_latency | BT | yes |
| Retention | `resident_unloads_machine` | resident (browser) | resident_id, machine_id, block, minutes_after_finish | AK | yes |
| Diagnostics (failure path) | `resident_reports_machine_issue` | resident (browser) | resident_id, machine_id, issue_type (occupied_untracked, broken, clothes_left) | BT | no: story S5 slipped to Sprint 2 |

Referral and Revenue are empty on purpose. There is no invite mechanic needed for a closed dorm building, and no payments exist before Week 12.

## Rules we are following

- One name per event, one spelling, lowercase with underscores.
- `resident_id` is an anonymous device-generated UUID stored in localStorage. No real names, room numbers, or Messenger handles.
- The north star event is fired by the resident doing their laundry, because that is who receives the value and who the problem statement is about.
- `resident_reports_machine_issue` tracks timer drift and un-scanned usage so we know when physical truth diverges from dashboard data.

## Reconcile plan (written in Lab 5)

**Event most likely to fail silently:** `resident_starts_wash_timer`  
**How it would fail:** double fire; the timer confirmation view re-renders after the button tap and triggers a duplicate capture.  
**The check that would catch it:** query our database for active timer sessions with the same `machine_id` created within 60 seconds of each other.  
**Who runs the check in Week 7:** AK, during the lab session before dashboard review.

---

## Gate reconcile (Lab 7)

**Production URL walked:** the Live product link in our README (`https://vantage-xi-opal.vercel.app`) · **walked by:** BT (did not build S3 timer) · **on a phone, mobile data:** yes

| Source | Count | Window | Exactly how it was counted |
|---|---|---|---|
| PostHog | 3 | From deploy commit to end of Lab 7 walk | Trends insight, total count of `resident_starts_wash_timer`, internal filter off |
| Database | 3 | Same window | `SELECT count(*) FROM wash_sessions WHERE started_at > NOW() - INTERVAL '2 hours';` |

**Match:** yes, on the second try.

**If no, first:** PostHog showed 6, Database showed 3. Exactly double. A `posthog.capture` call was left inside the React button's `onClick` handler as well as inside the API response handler. AK removed the duplicate client call. Three new test cycles were run: PostHog 3, Database 3.

**Silent failure we predicted in Lab 5:** double fire on the timer start. **Did it happen?** Yes, exactly as predicted: duplicate capture call on button tap. The reconcile check caught it before real dorm students saw the app.

**Internal filter set in PostHog:** `resident_id does not contain test_` and `Host does not contain localhost`; enabled on all dashboard tiles. **Our test record is:** machine `f-1` with `resident_id = test_walker_bt`.

**Checked by:** AK · **events still not Live, with owner and by when:** `resident_reports_machine_issue`, BT, by Tuesday before Lab 8.