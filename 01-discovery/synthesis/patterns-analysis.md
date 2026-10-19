# Patterns Analysis

**Save this file as:** `01-discovery/synthesis/patterns-analysis.md`

## Pattern 1: Students routinely make multiple blind trips down to the -1 floor because phone timers and mental estimates drift from actual machine cycle countdowns.

**Interviews behind it:** 01, 02, 05, 06

1. **Why does this happen?** Washing machine load sensors and water intake vary cycle duration dynamically, causing phone alarms to drift by 10–15 minutes. (02, 05)
2. **Why does that cause blind trips?** The only place the true remaining countdown is displayed is on the physical LED panels on the -1 floor. (01, 05)
3. **Why do residents walk down blindly?** There is zero digital or remote visibility connecting the -1 basement facility to student rooms on the upper floors. (01, 06)

**Root cause, one sentence:** A physical separation of 3–4 floors exists with zero information sync between the physical washer displays at -1 and the residents upstairs.

---

## Pattern 2: Removing strangers' finished laundry is socially accepted after 15–20 minutes, but placing wet clothes on dirty tables causes extreme disgust.

**Interviews behind it:** 01, 02, 03, 05

1. **Why does this happen?** Arriving residents need machines to start their own wash and cannot afford to wait indefinitely for absent owners. (02, 03)
2. **Why are owners absent after a wash completes?** Because the laundry room is isolated on the -1 floor, owners upstairs forget about their wash once out of sight. (06)
3. **Why does table placement cause conflict?** The folding tables and washer tops in the -1 laundry room are covered in dust and spilled detergent powder, re-soiling wet laundry. (01, 05)

**Root cause, one sentence:** The isolation of the -1 laundry room leads to unattended machines, forcing incoming students to handle strangers' laundry on unhygienic basement surfaces.

---

## Pattern 3: Asking about machine availability in dorm Messenger chats completely fails.

**Interviews behind it:** 01, 03, 06

1. **Why does this happen?** By the time someone reads a Messenger question and confirms an open machine, another resident has already walked down and claimed it. (06)
2. **Why is it so easily intercepted?** Inquiries are broadcast to hundreds of students in a general chat rather than connected directly to the specific machine or user. (01, 03)

**Root cause, one sentence:** Dorm Messenger chats have high latency and noise, making them useless for coordinating high-velocity physical resources.

---

**Strongest pattern:** Pattern 2 (Idle finished laundry and hygiene conflict).

**Why it is the strongest, in two sentences, citing log numbers:** Pattern 2 represents the primary emotional outrage across interviews 01, 02, 03, and 05, leading to students using makeshift plastic bags as barriers. The root cause points directly to the -1 floor isolation gap: alerting users immediately when a cycle ends eliminates the bottleneck at the source.