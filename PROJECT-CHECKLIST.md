# First Real Client Project — Collection Checklist

The two projects currently on the site run on invented data and a public dataset.
Neither proves you changed a business. This file exists to make sure the next one does.

Do the first one free. One real case study outweighs ten simulations.

---

## Who to approach

Small, manual, data-generating. In rough order of how easy the win is:

| Business | The manual pain | What you'd build |
|---|---|---|
| Kos / homestay | Booking di WA, ketersediaan kamar di kepala | The Sinok system — for real this time |
| Laundry kiloan | Nota kertas, tidak tahu pelanggan mana yang balik | Intake bot + revenue/repeat dashboard |
| Warung / kedai | Rekap harian di buku, stok ditebak | Daily sales entry + stock alert |
| Toko online (Shopee/Tokopedia) | Rekap penjualan diketik ulang tiap bulan | Sheets pipeline + margin dashboard |
| Klinik / bengkel kecil | Jadwal + rekam kunjungan tercecer | Appointment log + occupancy report |

Ask people you already know. The first client is almost never a stranger.

---

## Before you write a line of code

Capture these. Without them you have a demo, not a case study.

### 1. The "before" state — write it down verbatim
- [ ] What exactly does the owner do today, step by step?
- [ ] **How long does it take?** Ask them to time it once. This is your single most valuable number.
- [ ] How often? Daily, weekly, monthly?
- [ ] What goes wrong? Get a specific story, with a date if possible.
- [ ] What decision can't they make because the data isn't there?

### 2. The raw data, untouched
- [ ] Get a copy **before** you clean anything. Screenshot it. This is your "before" evidence.
- [ ] How many rows/records? Over what period?
- [ ] Write down every data-quality problem you find, as you find it.

### 3. Permission, in writing
- [ ] May you publish the case study? (A WhatsApp message saying yes is enough.)
- [ ] May you name the business, or should it be anonymised ("a 12-room homestay in Bandung")?
- [ ] May you show screenshots? Blur what needs blurring.

---

## After you ship

- [ ] **Time the "after."** Same task, same person. `2 hours → 10 minutes` is the whole case study.
- [ ] Wait 2–4 weeks. Then ask: are they still using it? *If they stopped, that's the most useful
      thing you'll learn all year — and worth writing about honestly.*
- [ ] Ask for two or three sentences you can quote. Their words, not yours.
- [ ] Ask what you got wrong. Put it in the case study.

---

## Writing it up

Keep the modal under ~250 words. Link to a longer write-up if you want to say more.

Structure:

1. **The business** — one line. Size, location, what they sell.
2. **The before** — with the number. *"Rekap penjualan bulanan: 6 jam Excel, tiap akhir bulan."*
3. **What was actually broken** — not what you built. The problem.
4. **What you built** — briefly. Nobody cares about your tech stack as much as you do.
5. **The after** — with the number. *"40 menit, dan angkanya bisa dipercaya."*
6. **What you got wrong** — one honest paragraph. This is what makes people trust the other five.
7. **Their words** — the quote.

Do **not** write:
- Row counts as achievements ("541K rows processed" — the tool did that, not you)
- Percentages to two decimals on small samples
- "Increased efficiency by X%" without saying how you measured it

---

## Then update the site

- [ ] Delete the `.project-card--placeholder` slot in `index.html`
- [ ] Add the new card with `data-badge--real`
- [ ] Update `about.p3` in `js/main.js` — the "I'm looking for the first real business" line is
      now false, and a false line about honesty is worse than no line at all
- [ ] Update `projects.subtitle` — it currently says "Neither is client work yet"
- [ ] Add the client quote to the site. A testimonial section becomes worth building once you
      have one real quote. Not before.
