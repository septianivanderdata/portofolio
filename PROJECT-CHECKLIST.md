# Turning Sinok Into a Measured Case Study

**Status:** Sinok Homestay (3 rooms, Balige, Kab. Toba) has been running the Telegram → n8n → Sheets
system since **July 2026**. The owner has given permission to publish. Post-implementation data is not
available yet.

That means the site can honestly say *"a real business runs on this"* — and nothing more. It cannot yet
say the business got better, because nobody has measured it. This file is about closing that gap.

Everything below applies to Sinok first, and to any client after.

---

## Who to approach

Small, manual, data-generating. In rough order of how easy the win is:

| Business | The manual pain | What you'd build |
|---|---|---|
| Kos / homestay | Booking di WA, ketersediaan kamar di kepala | The Sinok system, again — you already know it works |
| Laundry kiloan | Nota kertas, tidak tahu pelanggan mana yang balik | Intake bot + revenue/repeat dashboard |
| Warung / kedai | Rekap harian di buku, stok ditebak | Daily sales entry + stock alert |
| Toko online (Shopee/Tokopedia) | Rekap penjualan diketik ulang tiap bulan | Sheets pipeline + margin dashboard |
| Klinik / bengkel kecil | Jadwal + rekam kunjungan tercecer | Appointment log + occupancy report |

Ask people you already know. The first client is almost never a stranger.

---

## Before you write a line of code

Capture these. Without them you have a demo, not a case study.

### 1. The "before" state — reconstruct it now, while memory is fresh

For Sinok this is **already partly lost** — the system went live before the before-state was measured.
Recover what you can by asking the owner directly, and write down that it's a recollection, not a stopwatch.

- [ ] Roughly how long did the monthly recap take when it was WhatsApp + notebook? Ask for a range.
- [ ] **How many double bookings happened, and when?** "Beberapa kali" is not a number. Ask for dates.
- [ ] How many bookings per month, typically, before the system?
- [ ] What decision couldn't they make? (Pricing? Knowing the quiet months?)
- [ ] Mark anything reconstructed from memory as such. A remembered "about 2 hours" is still useful.
      A remembered "2 hours" presented as measured is a lie.

### 2. The raw data, untouched
- [ ] Get a copy **before** you clean anything. Screenshot it. This is your "before" evidence.
- [ ] How many rows/records? Over what period?
- [ ] Write down every data-quality problem you find, as you find it.

### 3. Permission, in writing
- [x] May you publish the case study? — **Yes, owner has agreed.**
- [x] May you name the business? — **Yes**, named on the site as Sinok Homestay, Balige.
- [ ] May you show *real booking screenshots*, once they exist? Blur guest names and phone numbers.
- [ ] Keep the permission message. If it was verbal, ask for it again over WhatsApp so it's on record.

---

## For Sinok, right now (July 2026)

- [ ] **Start counting.** Real bookings entered via the bot, from day one. Nothing else on the site
      needs a number more than this one does.
- [ ] **Time the "after."** How long does the monthly recap take now? Same person, same task.
- [ ] **Count double bookings after go-live.** If it's zero after six months, that is the case study.
      If it isn't zero, that's a more interesting case study.
- [ ] **Check back in Sept/Oct 2026.** Are they still using it? *If they stopped, that's the most
      useful thing you'll learn all year — and worth writing about honestly.*
- [ ] Ask the owner for two or three sentences you can quote. Their words, in Indonesian, unedited.
- [ ] Ask what you got wrong. Put it in the case study.

### Known limitation to fix or disclose
- [ ] Occupancy is still computed flat per month, not prorated for cross-month stays. Either fix it,
      or keep saying so. Don't quietly drop the disclosure.
- [ ] The `~54%` projection comes from simulated data. Once real bookings accumulate, replace it with
      a real one — or remove it.

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

Once you have the measured before/after:

- [ ] Swap Sinok's badge from `data-badge--live` to `data-badge--real` (`badge.measured`)
- [ ] Rewrite the Sinok TL;DR — the "what isn't yet" paragraph becomes the results paragraph
- [ ] Replace the simulated figures in the Build Numbers grid with real ones
- [x] Delete the `.project-card--placeholder` slot (done — card, CSS, and `proj.next.*` keys removed)
- [ ] Update `about.p3` in `js/main.js` — it currently says there's no measured outcome yet. A false
      line *about honesty* is worse than no line at all.
- [ ] Add the owner's quote. A testimonial section becomes worth building once you have one real
      quote. Not before.
