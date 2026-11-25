# Usability Findings

## Session 1 · Resident-F102 · Resident, Block F 1st Floor · their phone · ran AK, logged GU

**Task read:** "You are in your dorm room with a basket of dirty laundry. Use this link on your phone to find an available washing machine and start your load."

| Time | What they did | What they said (verbatim) | Note |
|---|---|---|---|
| 0:00 | task read | | |
| 0:04 | tapped top right corner | "სად უნდა შევიდე?" / "Where do I log in?" | predicted first mistake: yes; failure behavior 1 |
| 0:11 | noticed "Block F" tab selected by default | "ა, პირდაპირ ჩანს მანქანები." / "Ah, the machines are shown directly." | unprompted |
| 0:18 | tapped Washer 2 (green / "Available") | | |
| 0:26 | selected 45 min and tapped "Start Timer" | "ესე იგი დაწყებულია." / "So it's started." | one action complete |

**Time to first tap:** 0:04  
**Time to the one action, or did not complete:** 0:26  
**Result vs rule:** PASS. Completed the action in 26 seconds without assistance (recovering immediately from looking for a login).  
**Surprise:** Looked for a login button first out of habit, but was visibly relieved that no registration was required.  
**Answer to "what were you expecting to happen?":** "I expected to have to create an account with my university email first."

---

## Session 2 · Resident-F305 · Resident, Block F 3rd Floor · their phone · ran BT, logged AK

**Task read:** "You are in your dorm room with a basket of dirty laundry. Use this link on your phone to find an available washing machine and start your load."

| Time | What they did | What they said (verbatim) | Note |
|---|---|---|---|
| 0:00 | task read | | |
| 0:06 | looked at machine list | "მესამე მანქანას 14 წუთი უწერია, მეორეს — თავისუფალი." / "Washer 3 shows 14 mins, Washer 2 says free." | unprompted |
| 0:14 | tapped Washer 2 | | |
| 0:21 | paused at the timer input | "საიდან იცის რამდენი ხანი რეცხავს ჩემი პროგრამა?" / "How does it know how long my wash cycle takes?" | unprompted |
| 0:34 | tapped preset "Quick Wash (30m)", tapped Start | | one action complete |

**Time to first tap:** 0:14  
**Time to the one action:** 0:34  
**Result vs rule:** PASS.  
**Surprise:** Wanted cycle presets (Quick 30m / Daily 45m / Cotton 60m) because nobody remembers the exact minute count of the machine programs.  
**Answer to "what were you expecting to happen?":** "I expected it to ask which program I turned on at the machine."

---

## Session 3 · Resident-G204 · Resident, Block G 2nd Floor · their phone · ran GU, logged BT

**Task read:** "You are in your dorm room with a basket of dirty laundry. Use this link on your phone to find an available washing machine and start your load."

| Time | What they did | What they said (verbatim) | Note |
|---|---|---|---|
| 0:00 | task read | | |
| 0:05 | stared at screen | "ეს F ბლოკია, მე G-ში ვარ." / "This is Block F, I'm in G." | failure behavior 3 (in spirit) |
| 0:12 | tapped the "Block G" switch at top | | switched building |
| 0:22 | tapped Washer 1 ("Busy - 8 min left") | "დაკავებულს რომ დავაჭირო, რიგში ვერ ჩავდგები?" / "If I tap the busy one, can't I get in line?" | unprompted |
| 0:49 | closed the drawer, looked up at GU | "თავისუფალი არ არის არცერთი, მესინჯერში უნდა ვიკითხო მაინც." / "None are free, I still have to ask in Messenger." | failure behavior 2 & timeout (>45s) |

**Time to first tap:** 0:12  
**Time to the one action, or did not complete:** Did not complete (exceeded 45s threshold and defaulted to Messenger).  
**Result vs rule:** FAIL, because when all machines were busy, the prototype gave no clear action and the user fell back to Messenger.  
**Surprise:** If no machine is free, the user immediately defaults back to their old workaround (Messenger) unless there is a "Notify me when a machine frees up" button.  
**Answer to "what were you expecting to happen?":** "I expected to tap the machine that has 8 minutes left and get a reminder ping when it finishes so nobody else steals it."

---

## After 3 sessions: apply the decision rule

**Sessions run:** 3 · **Fails:** 1 · **Rule says:** 3 or more fails out of 5 to change course. Current tally is 1 fail, 2 passes. Continue running sessions 4 and 5 before deciding.

Meanwhile, Session 3 exposed that when all 4 machines in a block are full, residents hit a dead end and return to Messenger. In prototype v2, when a machine has <15 minutes left, add a **"Remind Me"** button.

**DECISIONS.md line added:**
