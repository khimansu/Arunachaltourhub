# ArunachalTourHub.com

A complete static website for an Arunachal Pradesh tour operator. No build step, no
dependencies — plain HTML, one CSS file, one JS file. Drop it into GitHub Pages and it runs.

## File structure

Flat by design — every page is a single `.html` file at the root, not its own folder:

```
arunachaltourhub/
├── index.html                              (homepage)
├── tawang-tour-package.html
├── arunachal-tour-packages.html
├── arunachal-tour-package-from-kolkata.html
├── best-travel-agency-in-kolkata.html
├── ...78 more pages, all flat...
├── blog/                                   (blog posts grouped together)
│   ├── index.html
│   ├── arunachal-tour-by-bike.html
│   └── ...
├── assets/                                 (css, js, images)
│   ├── css/site.css
│   ├── js/site.js
│   └── img/
├── sitemap.xml, robots.txt, CNAME, .nojekyll, 404.html
```

URLs are `arunachaltourhub.com/tawang-tour-package.html`, not
`arunachaltourhub.com/tawang-tour-package/`. Every internal link, the sitemap, canonical
tags and structured data all use this flat form consistently.

---

## Blog keyword update (24 Sep 2026)

- **11 new blog posts** in `blog/`, one per search intent: `where-is-tawang`, `why-arunachal-pradesh-is-famous`, `arunachal-visit-best-time`, `arunachal-pradesh-travel-guidelines`, `how-many-days-are-enough-for-arunachal-pradesh`, `do-we-need-permission-to-enter-arunachal-pradesh`, `can-foreigners-visit-arunachal-pradesh`, `how-to-travel-arunachal-pradesh`, `how-to-tour-arunachal-pradesh`, `how-many-passes-in-arunachal-pradesh`, `how-many-tribes-in-arunachal-pradesh`.
- Each post has the exact keyword in the title, H1, first paragraph and a heading, its own FAQ with FAQPage schema, BlogPosting and breadcrumb schema, a "Related guides" block and a "Further reading" block.
- **Blog index and sitemap** list all 11. **13 existing pages** (permit, best-time, Tawang, itinerary, guide, map, places, Guwahati, Kolkata, Delhi, Mumbai, packages, Ziro) gained a short "Related guides" list linking to the relevant new posts.
- `KEYWORD-MAP.md` has a new section mapping each keyword to its post.
- **Facts to confirm before you publish:** permit fees and the PAP rules (group of two or more, 30 days) change. Check them against the official portal, then update the permit page and the two permit posts together.

## SEO keyword update (24 Sep 2026)

- **New pages:** `guwahati-to-arunachal-tour.html`, `arunachal-tour-in-bengali.html` (Bengali), `blog/arunachal-travel-by-bus-and-car.html`.
- **Retitled / new H1s** on the places, operators, packages, itinerary, cost, permit, best-time, map, travel-guide, Kolkata, Guwahati, Assam/Meghalaya combo, Tawang, Mechuka, blog and home pages, so the exact search phrases sit in titles and headings.
- **New sections:** month notes (October, December, May), price tables for Kolkata and Guwahati, the ILP "permit / pass" explainer, travel time by car and bus, Dirang hotels, and an intro line on every city page.
- **Nav, footer and sitemap** updated for the new pages.
- **Internal links:** contextual anchor links added in body text on every page (first mention of a topic links to its page, max 9 per page, never in headings, nav or the hero). Each Assam district page now links to other districts in its division.
- **External links:** a "Further reading" block on key pages links to Arunachal Pradesh Tourism, Wikipedia, Britannica and Wikivoyage (`rel="noopener"`, opens in a new tab).
- `KEYWORD-MAP.md` lists every target keyword and the page it lives on.

## What's new in this update

- **WhatsApp/phone number updated everywhere** to +91 86382 26178 (was the placeholder number).
- **Trip Planner** (`/trip-planner/`) — an interactive 3-question tool that recommends one
  of the 7 packages based on days available, interests and who's travelling. Runs entirely
  client-side, no server needed.
- **Booking page** (`/book-now/`) — a dedicated booking flow: process steps, payment schedule
  (25% advance / balance before arrival), what's needed for the permit, and a booking-specific
  form that composes a WhatsApp message headed "BOOKING REQUEST" (distinct from the general
  enquiry).
- **35 Assam district pages** (`/arunachal-tour-package-from-<district>/`) plus a hub page
  at `/arunachal-tour-packages-from-assam/`. Each carries real, differentiated data (division,
  headquarters, approximate drive time to Guwahati, and which Arunachal gateway it routes
  through) rather than the same copy with the name swapped — see the note on doorway pages below.
- **13 "Best Travel Agency in X" pages** (`/best-travel-agency-in-<city>/`) — content aimed at
  people choosing between operators, not at people choosing a route. Deliberately makes no
  claims about awards, review counts or ratings that I can't verify, and neither should you
  add any until they're real.
- **Nav and footer reorganised** around the above — "Plan & book" now leads with the planner
  and booking page; "From your city" links to the Assam hub.

Total page count: **82** (was 34).

### Bugs found and fixed in this pass
- **Booking form had no JS handler** — it rendered fine but did nothing on submit. Added a
  dedicated handler that composes a "BOOKING REQUEST" WhatsApp message (separate from the
  general enquiry message).
- **4 of the 13 "Best Travel Agency" pages were orphaned** — reachable only via the sitemap,
  with zero internal links pointing at them (Jorhat, Silchar, Siliguri, and one other). Fixed by
  adding a linked list on the About page and a rotating cross-link block at the bottom of every
  agency page, so all 13 now link to each other and are linked from a hub.
- **3 pages skipped a heading level** (h1 straight to h3, or h2 straight to h4) — on the
  packages page, the blog index, and the places page's sidebar table of contents. Fixed by
  adding the missing intermediate heading in each case. This matters for both accessibility
  (screen readers navigate by heading level) and how Google parses page structure.

### Full-site audit results (all 82 pages + 404)
Checked programmatically, not by sampling:
- Unique `<title>` and meta description on every page (0 duplicates, 0 missing)
- Every title 15–65 characters, every description 60–165 characters (Google's typical
  display limits — nothing gets truncated or looks thin in search results)
- Exactly one `<h1>` per page, all 82 unique, no skipped heading levels anywhere
- Canonical tag and viewport meta tag present on every page
- Every `<img>` has `alt` text (the site is otherwise inline SVG, which doesn't need it)
- 0 orphan pages — every page has at least one internal link pointing to it
- 0 broken internal links, 0 malformed JSON-LD
- Average page weight ~21 KB of HTML; CSS (16.5 KB) and JS (5.8 KB) are shared and cached
  after the first page load

This doesn't guarantee rankings — off-site signals (Google Business Profile, backlinks, reviews)
still matter more than on-page perfection, and that's covered in section 3 below — but it means
there's no *technical* reason for Google to discount any page on the site.

---

## 1. Before you publish — edit these three things

### a) Your contact details (5 minutes, do this first)

Open **`assets/js/site.js`** and change the top block:

```js
window.ATH = {
  WHATSAPP: "919876543210",              // country code + number, digits only, no + or spaces
  PHONE:    "+91 98765 43210",
  EMAIL:    "hello@arunachaltourhub.com"
};
```

Every phone link, email link, WhatsApp button and enquiry form across all 34 pages reads from
here. You do not need to edit any HTML.

Then search the whole folder for the old number in case it appears in plain text:

```bash
grep -rn "98765 43210" . --include=*.html | head
```

Those occurrences are inside `data-tel-text` / `data-mail-text` spans that JavaScript
overwrites on load, so they are only a fallback — but update them anyway so they are correct
if JS is blocked.

### b) Your address and legal pages

- `arunachal-tour-operators/index.html` — company story, years operating
- `contact/index.html` — replace `[Your street address]`
- `privacy-policy/index.html` — replace `[registered business name]`, `[address]`
- `terms-and-conditions/index.html` — replace `[your city]`, and **have a lawyer read it**

### c) Your prices

All prices live in one place: `TOURS` at the top of the build script's `parts.py`, but since
you're editing the built site directly, use find-and-replace across the HTML. The figures used
are indicative 2026 land-only rates and you should replace them with your real ones:

| Tour | Price used |
|---|---|
| Dirang & Bomdila, 5 days | ₹14,800 |
| Ziro Valley, 5 days | ₹16,400 |
| Tawang, 7 days | ₹22,900 |
| Mechuka, 8 days | ₹27,500 |
| Assam + Arunachal, 9 days | ₹31,200 |
| Meghalaya + Arunachal, 10 days | ₹34,600 |
| Grand tour, 13 days | ₹46,800 |

---

## 2. Deploy to GitHub Pages

```bash
cd arunachaltourhub
git init
git add .
git commit -m "Launch ArunachalTourHub.com"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/arunachaltourhub.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save.**

The repo can be named anything — because a `CNAME` file is included, the site serves from your
custom domain, not from `username.github.io/repo-name`.

### DNS at your domain registrar

Add these four **A records** for the apex domain `arunachaltourhub.com`:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

And one **CNAME record** for `www`:

```
www  →  YOUR-USERNAME.github.io
```

Back in **Settings → Pages**, enter `arunachaltourhub.com` under Custom domain and tick
**Enforce HTTPS** once the certificate is issued (can take up to 24 hours).

### Files that make this work

| File | Purpose |
|---|---|
| `CNAME` | Tells GitHub Pages to serve your custom domain |
| `.nojekyll` | Stops Jekyll from processing the folder |
| `404.html` | Custom not-found page GitHub Pages serves automatically |
| `sitemap.xml` | 34 URLs with priorities, for Search Console |
| `robots.txt` | Allows everything, points at the sitemap |

### Editing later

Every page is a standalone flat HTML file named after its URL. To change the Tawang
page, edit `tawang-tour-package.html` directly, commit, push. Changes are live in about a
minute. Blog posts are the one exception — they live inside `blog/` (e.g.
`blog/arunachal-tour-by-bike.html`) so the blog stays grouped together.

---

## 3. Do this in week one (this is what actually gets you ranked)

The site is technically sound, but a new domain ranks on **trust signals it earns off-site**.
In order of impact:

1. **Google Business Profile.** Free, and for a local travel agency it is the single highest-return
   thing you can do. Verify your Guwahati address, add photos, categories (Tour operator,
   Travel agency), and collect reviews from past clients. This also feeds the map pack for
   "arunachal travel agency" and "best travel agency in kolkata for arunachal tour".
2. **Google Search Console.** Add the property, submit `https://arunachaltourhub.com/sitemap.xml`,
   and request indexing on the homepage, packages page and places page.
3. **Bing Webmaster Tools.** Import from Search Console in one click. Bing traffic is small but free.
4. **Real photographs.** This is the site's biggest current weakness — it ships with zero photos
   because I had none of yours. Add your own images of Sela Pass, Tawang Monastery, Ziro
   terraces and your vehicles. Name the files descriptively (`tawang-monastery-morning-prayers.jpg`),
   compress to WebP under 200 KB, and always write `alt` text. Put them in `assets/img/`.
5. **Get listed.** TripAdvisor, Justdial, Google Maps, the Arunachal Tourism operator directory,
   IATO or ADTOI if you qualify, and any North East travel forums you genuinely participate in.

---

## 4. How the keywords map to pages

All 98 keywords from your Ubersuggest export are covered. Each page targets one cluster, so
your pages don't compete with each other for the same query.

| Page | Keywords | Combined monthly volume | Examples |
|---|---:|---:|---|
| `/arunachal-tour-places/` | 5 | 27150 | arunachal tour place, arunachal travel places, arunachal travel spot, arunachal tour places, arunachal tour spot |
| `/` | 5 | 5990 | arunachal tour, arunachal travel, arunachal tour 2023, arunachal tour travel, arunachal tour details |
| `/arunachal-tour-packages/` | 4 | 5470 | arunachal tour package, arunachal travel package, arunachal travel packages, east arunachal tour package |
| `/arunachal-tour-itinerary/` | 5 | 620 | arunachal tour plan, arunachal tour itinerary, arunachal travel itinerary, arunachal travel plan, arunachal tour itinerary 7 days |
| `/arunachal-tour-package-from-kolkata/` | 10 | 600 | arunachal tour packages from kolkata, arunachal tour package from kolkata, arunachal tour from kolkata, arunachal tour plan from kolkata, arunachal tour itinerary from kolkata, best arunachal tour package from kolkata … |
| `/arunachal-tour-map/` | 2 | 480 | arunachal tour map, arunachal travel map |
| `/arunachal-tour-operators/` | 10 | 420 | arunachal tour and travels, arunachal tour operators, arunachal travel agency, best travel agency in kolkata for arunachal tour, arunachal tour hub, best travel agency for arunachal tour in kolkata … |
| `/arunachal-tour-package-from-guwahati/` | 9 | 70 | arunachal tour package from guwahati, arunachal tour packages from guwahati, arunachal tour package from guwahati price, guwahati to arunachal tour plan, guwahati to arunachal travel agency, arunachal tour from guwahati … |
| `/arunachal-travel-guide/` | 2 | 50 | arunachal tour guide, arunachal travel guide |
| `/best-time-to-visit-arunachal/` | 8 | 40 | arunachal tour best time, arunachal tour in december, arunachal tour in october, arunachal travel best time, arunachal travel time, arunachal tour in may … |
| `/blog/` | 6 | 40 | arunachal travel blog, arunachal tour video, arunachal tour in bengali, arunachal travel quotes, arunachal tour blog, arunachal travel reddit |
| `/assam-arunachal-tour-package/` | 3 | 20 | assam arunachal tour packages, assam and arunachal tour, assam arunachal tour package |
| `/assam-meghalaya-arunachal-tour-package/` | 4 | 10 | assam meghalaya arunachal tour packages, assam meghalaya arunachal tour package, assam meghalaya and arunachal tour, assam meghalaya arunachal tour |
| `/meghalaya-arunachal-tour-package/` | 1 | 10 | meghalaya arunachal tour |
| `/blog/arunachal-tour-by-bike/` | 3 | 0 | arunachal tour by bike, arunachal travel bus, arunachal tour car |
| `/arunachal-tour-package-from-bangalore/` | 2 | 0 | arunachal tour package from bangalore, arunachal tour packages from bangalore |
| `/tawang-tour-package/` | 1 | 0 | tawang arunachal tour |
| `/arunachal-tour-package-from-mumbai/` | 2 | 0 | arunachal tour packages from mumbai, arunachal tour from mumbai |
| `/arunachal-tour-cost/` | 3 | 0 | arunachal tour package price, arunachal travel cost, arunachal tour budget |
| `/arunachal-tour-package-from-pune/` | 2 | 0 | arunachal tour package from pune, arunachal tour packages from pune |
| `/arunachal-tour-package-from-dibrugarh/` | 2 | 0 | arunachal tour package from dibrugarh, arunachal tour from dibrugarh |
| `/dirang-bomdila-tour-package/` | 1 | 0 | dirang hotels in dirang market in arunachal tour |
| `/arunachal-tour-package-from-delhi/` | 1 | 0 | arunachal tour package from delhi |
| `/mechuka-tour-package/` | 1 | 0 | mechuka arunachal tour package |
| `/arunachal-tour-package-from-itanagar/` | 2 | 0 | arunachal tour package from itanagar, arunachal tour from itanagar |
| `/arunachal-tour-package-from-tezpur/` | 1 | 0 | arunachal tour from tezpur |
| `/arunachal-travel-permit/` | 3 | 0 | arunachal tour permit, arunachal travel pass, arunachal travel permit |

**The three things worth noticing:**

- **`/arunachal-tour-places/` is your biggest opportunity by far** — 27,150 combined monthly
  searches, driven by "arunachal tour place" at 27,100 with a search difficulty of only 24.
  That is an unusually soft target for that volume. It is informational, not commercial, so it
  won't convert directly — but it will bring the traffic and authority that lifts everything else.
  Keep expanding this page.

- **Kolkata is your strongest commercial cluster** — ten separate keywords, ~600 monthly
  searches, all with buying intent, and low difficulty (15–18). The Kolkata page is deliberately
  the longest of the city pages for this reason.

- **"arunachal tour hub" is in your own keyword set.** That's your brand name. Once Google
  associates the domain with the business you should own it outright — the Google Business
  Profile in step 1 is what makes that happen fastest.

---

## 5. What's already built in

**On-page SEO**
- Unique `<title>` and meta description on every page, written to the terms people search
- One `<h1>` per page, containing the target keyword naturally
- Canonical URLs, Open Graph and Twitter Card tags
- Clean folder-based URLs (`/tawang-tour-package/`, not `/tawang.html`)
- Deep internal linking — every page links to its cluster siblings and back to the hubs

**Structured data (JSON-LD), validated**
- `TravelAgency` + `WebSite` on the homepage
- `TouristTrip` + `Offer` with real prices on all seven package pages
- `FAQPage` on 20+ pages — this is what wins the expandable FAQ results in Google
- `BreadcrumbList` sitewide, `BlogPosting` on articles

**Performance and accessibility**
- No frameworks, no jQuery, ~14 KB of CSS, ~4 KB of JS
- Hero artwork is inline SVG, so there's no image to download
- Skip link, visible keyboard focus, `prefers-reduced-motion` respected, semantic landmarks
- Responsive to 320px, with a sticky call/WhatsApp bar on mobile

---

## 6. Honest limitations

- **No photographs.** Covered above — it's the first thing to fix.
- **The enquiry form goes to WhatsApp, not email.** GitHub Pages is static and cannot receive
  form submissions. The form composes a pre-filled WhatsApp message instead, which for an Indian
  travel agency usually converts better anyway. If you'd rather have email, sign up for
  [Formspree](https://formspree.io) or [Basin](https://usebasin.com) (both have free tiers),
  point the `<form action>` at your endpoint, and delete the submit handler in `site.js`.
- **Prices and flight fares are indicative.** Verify before publishing.
- **Permit information was accurate as of September 2026** and is sourced to the official
  Arunachal eILP portal, but government fees change. Re-check
  [eilp.arunachal.gov.in](https://www.eilp.arunachal.gov.in/) periodically, since a wrong permit
  fee on your site is the kind of error that loses trust.
- **City pages must stay genuinely different from each other.** Right now each has real,
  distinct content — actual flight times, train options, leave-day maths, local advice. If you
  add more cities, resist the temptation to copy a page and swap the city name. Google
  classifies near-duplicate location pages as doorway pages and suppresses the lot of them.
- **The 35 Assam district pages are deliberately thinner than the city pages** — they carry
  real, differing facts (division, headquarters, drive-time band, gateway routing) but not the
  same depth of hand-written prose as Kolkata or Delhi. That's an intentional trade-off given
  the volume. If any of them start ranking and getting real traffic, that's your signal to go
  back and flesh out that specific page with more detail — don't do it pre-emptively for all 35.
- **The road/drive-time estimates on district pages are approximate**, based on general
  geography and division groupings, not measured. They're flagged as approximate on the pages
  themselves — spot-check the ones that matter to you (e.g. wherever you get your first real
  enquiry from) before trusting them further.

---

## 7. Where to grow next

Ordered by expected return:

1. **More destination pages** — Pasighat, Roing & Mayudia, Namdapha, Anini, Dong Valley,
   Bomdila. You have content sketches for each already in `/arunachal-tour-places/`.
2. **More departure cities** — Chennai, Hyderabad, Ahmedabad, Siliguri, Bhubaneswar, Patna.
   Only if you can write genuinely distinct content for each.
3. **A real blog cadence** — one honest post a month beats ten thin ones. Trip reports with
   your own photos, road condition updates after the monsoon, festival date announcements.
   "Sela Pass road status" type posts earn links from people planning trips.
4. **Customer reviews on-page** with `Review` schema, once you have them.
5. **Hindi and Bengali versions** — "arunachal tour in bengali" is already in your keyword set,
   and Kolkata is your strongest market. Use `hreflang` if you build these.

---

Built September 2026. Structure, copy and SEO by Claude; facts on permits verified against the
official Arunachal Pradesh eILP portal.
