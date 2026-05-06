# AKL → Hamilton → MEL → SYD · May 2026

> **[→ Open Interactive Trip Dashboard](https://allstoncodes.github.io/nz-aus-2026)** — day-by-day timeline, per-day Leaflet map, hotel info, booking checklist (Hamilton + Waitomo + Hobbiton now included)

*For Allston + Donnie's eyes. Repo goes private after May 26 return.*

**Last update:** 2026-05-06 — restructured around GCal-aligned itinerary with Hamilton/Waitomo/Hobbiton self-drive leg + QF 73 evening return (booked).

---

Supplementary Mermaid + ASCII visualizations of the 11-day trip. Primary visual: the interactive HTML dashboard at the link above.

---

## 1. Trip Arc — Gantt Overview

```mermaid
%%{init: {'theme':'dark'}}%%
gantt
    dateFormat  YYYY-MM-DD
    title       AKL to MEL to SYD - May 2026
    axisFormat  %b %d

    section Outbound
    UA 917 SFO to AKL                    :done,    f0, 2026-05-14, 2d

    section Auckland
    Day 1 - Arrival, War Museum, Writers :done,    a1, 2026-05-16, 1d

    section AKL to Hamilton drive
    Day 2 - Fullers Cruise drive Hamilton :active, a2, 2026-05-17, 1d

    section Hamilton + Waitomo
    Day 3 - Black Abyss Waitomo          :active,  h1, 2026-05-18, 1d

    section Hamilton to AKL drive
    Day 4 - Hobbiton drive back AKL      :active,  h2, 2026-05-19, 1d

    section AKL to MEL
    Day 5 - AKL to MEL flight TBD        :crit,    f1, 2026-05-20, 1d

    section Melbourne
    Day 6 - Penguin Parade Kennett koalas :done,   m1, 2026-05-21, 1d
    Day 7 - Aussie friends fly SYD        :done,   m2, 2026-05-22, 1d

    section Sydney + Vivid
    Day 8 - Vivid Sydney start            :done,   s1, 2026-05-23, 1d
    Day 9 - Opera House Bondi BridgeClimb :done,   s2, 2026-05-24, 1d
    Day 10 - Memorial Day final spa       :done,   s3, 2026-05-25, 1d

    section Return
    QF 73 SYD to SFO 2125 to 1745        :done,    f3, 2026-05-26, 1d
```

---

## 2. Activity Distribution — Pie Breakdown

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1E293B', 'primaryTextColor': '#F8FAFC', 'primaryBorderColor': '#334155'}}}%%
pie title Time Allocation (11 days · excludes sleep)
  "Transit"   : 42.67
  "Food"      : 40.25
  "Outdoor"   : 33.92
  "Culture"   : 18
  "Logistics" : 18
  "Downtime"  : 26.5
  "Wellness"  : 4
```

---

## 3. Route Flowchart

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1E293B', 'primaryTextColor': '#F8FAFC', 'primaryBorderColor': '#F59E0B', 'lineColor': '#94A3B8'}}}%%
flowchart LR
  SFO["SFO\nSan Francisco"]
  AKL["AKL\nAuckland"]
  HOB["Hobbiton\n+ Waitomo"]
  MEL["MEL\nMelbourne"]
  PHI["Penguin Parade\nPhillip Island"]
  SYD["SYD\nSydney"]
  VIV["Vivid Sydney\nKayak Tour"]
  BUR["Burrawa\nClimb"]

  SFO -->|"UA 917 · May 14\nnonstop 13.5h"| AKL
  AKL --> HAM["Hamilton + Waitomo\nrental car drive"]
  HAM --> HOB
  HOB --> AKL
  AKL -->|"AKL to MEL · May 20\nflight TBD"| MEL
  MEL --> PHI
  MEL -->|"JQ 500 · May 22\n$161/pp"| SYD
  SYD --> VIV
  SYD --> BUR
  SYD -->|"QF 73 · May 26 21:25\nnonstop 13.5h · seat 54K"| SFO

  style SFO fill:#1E293B,stroke:#475569,color:#94A3B8
  style AKL fill:#1E293B,stroke:#F59E0B,color:#F59E0B
  style MEL fill:#1E293B,stroke:#0D9488,color:#0D9488
  style SYD fill:#1E293B,stroke:#8B5CF6,color:#8B5CF6
  style HOB fill:#14532D,stroke:#22C55E,color:#F8FAFC
  style PHI fill:#14532D,stroke:#22C55E,color:#F8FAFC
  style VIV fill:#2E1065,stroke:#8B5CF6,color:#F8FAFC
  style BUR fill:#2E1065,stroke:#8B5CF6,color:#F8FAFC
```

---

## 4. ASCII Timeline (compact fallback)

Each row = 1 day, 20 characters spanning 24 hours (~1.2h per char). Category key below.

```
       0  4  8  12 16 20 24
       -  -  -  -  -  -  -
May14  ....LLLLL.....LLLTTT  SFO  - Departure Day (flight dep 22:45)
May15  TTTTTTTTTTTTTTTTTTTT  Pac  - In-flight over Pacific (13h25m UA 917)
May16  ..LLTFFCCCCFFFFCCFFDS  AKL  - Arrival - War Museum - Writers Festival
May17  ..FOOOOOOOOOOOOTTLLDS  AKL  - Fullers Cruise - drive to Hamilton
May18  ..FFFLOOOOOOLLFFFLLDS  HAM  - Black Abyss Waitomo (5hr)
May19  ..FOOOOFFTTTFLLLDDDDS  HAM  - Hobbiton - drive back to AKL
May20  ..LTTTLLLLLDDFFCCFFDS  AKL>MEL transit - check in MEL
May21  ..FOOOOOFFFOOOOOOFLDS  MEL  - Penguin Parade - Kennett River koalas
May22  ..FFFCCCDDFFCCFFFFTTL  MEL>SYD - Aussie friends meetup - fly SYD evening
May23  ..FOOTTCCFFCCFCFCFLLD  SYD  - Vivid Sydney + Opera House
May24  ..FOOTTLLFFCWWWFTLCDS  SYD  - BridgeClimb Burrawa or Bondi-Coogee
May25  ..FFFCCCFFFLOFFFDDDDS  SYD  - Memorial Day final spa
May26  ..FFFCCCFFFLLLTTTTTT  SYD>SFO departure QF 73 dep 21:25 (evening red-eye, lands SFO 17:45 same day)

KEY:  T=transit  O=outdoor  F=food  C=culture  W=wellness
      L=logistics  D=downtime  S=sleep  .=midnight buffer
```

---

## 5. Flight Legs Summary

| Leg | Flight | Date | Dep → Arr | Per Person | Status |
|---|---|---|---|---|---|
| SFO → AKL | UA 917 | May 14 | 22:45 → 07:10+2 | $971 | **BOOKED ✓** |
| AKL → MEL | TBD | May 20 | ~09:45 → ~13:00 | TBD | **Re-search needed** (date moved from 5/19 → 5/20) |
| MEL → SYD | TBD | May 22 | evening per GCal | TBD | **Re-search needed** (was JQ 500 06:00; new GCal slots Aussie friends meetup until 21:15) |
| SYD → SFO | QF 73 | May 26 | 21:25 → 17:45 (same day, gain a day) · seat 54K | AUD $60 paid | **BOOKED ✓** (KLM partner) |

*Prices include 1 checked bag. Sourced via Fli MCP on 2026-05-03; QF 73 booked 2026-05-04.*

---

## 6. City Split — Time Budget

| City | Days | Nights | Key Activities |
|---|---|---|---|
| Auckland + Hamilton | Sat–Tue (5/16–5/19) | 3 (2 AKL + 1 Hamilton) | War Museum · Writers Festival · Fullers Cruise · Black Abyss Waitomo · Hobbiton |
| Melbourne (MEL) | Wed–Fri (5/20–5/22) | 2 | Penguin Parade · Kennett River koalas · Aussie friends · Selena's eats |
| Sydney (SYD) | Fri–Tue (5/22–5/26) | 4 | Vivid Sydney · Opera House · BridgeClimb Burrawa · Bondi-Coogee · Symbio Wildlife (Corey rec) |
| **Total** | **11 ground days** | **9** | Driving NZ leg adds rental car logistics (Donnie + IDP) |
