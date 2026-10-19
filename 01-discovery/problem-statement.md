# Problem Statement

**Save this file as:** `01-discovery/problem-statement.md`

## The statement

1. **Who has the problem:** Undergraduate students living on upper floors of KIU dorm blocks F and G who do laundry in the -1 floor facility once or twice a week, like Davit. (01, 02, 05, 06)
2. **When it happens:** Peak evening hours, especially Sunday and Monday nights between 20:00 and 23:00, when students carry heavy laundry loads down four flights of stairs to the -1 floor only to find all four washers occupied or finished cycles sitting idle. (01, 02, 05, 06)
3. **What it costs them:** 30 to 45 minutes of wasted study time per empty trip up and down stairs, clothes left sitting forgotten in idle machines for over two hours, and clean wet laundry dumped onto dusty chairs or detergent-covered tables. (01, 02, 03, 05, 06)
4. **What they do about it today:** Setting uncoordinated phone alarms, posting unanswered questions in the general dorm Messenger chat, or leaving laundry baskets on the basement floor in front of washers to informally hold a place in line. (01, 02, 03, 05, 06)
5. **Why that workaround fails them:** Phone timers drift by 10 to 15 minutes from machine sensors, Messenger inquiries get buried under spam, and floor baskets create chaotic queue disputes: "მესინჯერში რომ წერენ ხოლმე '-1-ზე თავისუფალია რამე?', სანამ ვინმე უპასუხებს, უკვე სხვა ჩადის და იკავებს." (03, 05, 06)

## What the evidence ruled out

We initially believed students could coordinate laundry availability through existing dorm communication channels. That was killed: across all logs, general dorm chats were described as useless or ignored for live resource status. (01, 03, 06)

## What is still open

Whether students will reliably check a remote status board before walking to the -1 floor, or if the habit of walking down blindly is too ingrained. This is the riskiest assumption in `02-design/prototype-plan.md`.

## Pattern behind it

- **Pattern:** Students routinely make multiple blind trips down to the -1 floor because phone timers and mental estimates drift from actual machine countdowns. (01, 02, 05, 06)
- **Root cause:** A physical barrier of up to four flights of stairs exists with zero real-time information sync between the physical washer displays on the -1 floor and student rooms upstairs.