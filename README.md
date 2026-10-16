# Indian Constitution — Educational Website

A static, offline-friendly website about the Constitution of India: how it was made, all articles and
parts, every amendment (1st–106th), and 20 landmark Supreme Court cases. Built with plain HTML, CSS and
JavaScript — no build step, no dependencies, no CDN.

## Pages

| Page | Contents |
| --- | --- |
| `index.html` | Home — overview, stats, Preamble, milestone timeline, quick facts |
| `making.html` | Making of the Constitution — full timeline, key figures, committees, borrowed features |
| `articles.html` | The Preamble, every article (Parts I–XXII), the 12 Schedules — searchable and filterable |
| `amendments.html` | All 106 amendments with search and a "landmark only" filter |
| `cases.html` | 20 landmark judgments with facts, holding and significance |
| `faq.html` | Common questions answered + a glossary of constitutional terms |

## Run it

Just open `index.html` in a browser. Everything works from `file://` (data is loaded via `<script>` tags,
not `fetch`, to avoid CORS restrictions).

For a local server (optional):

```bash
npx serve .
# or
python -m http.server
```

## Deploy

Push the folder to GitHub and enable GitHub Pages (Settings → Pages → deploy from branch, root folder).
No configuration needed. Any static host works (Netlify, Cloudflare Pages, S3, etc.).

## Structure

```
.
├── index.html, making.html, articles.html, amendments.html, cases.html, faq.html
├── css/style.css
└── js/
    ├── site.js                 # theme toggle, mobile nav, active link, back-to-top
    ├── articles.js             # renders + searches the articles browser
    ├── amendments.js           # renders + searches the amendments list
    ├── cases.js                # renders + searches the cases list
    └── data/
        ├── articles-data-1.js  # Preamble + Parts I–IVA (1–51A)
        ├── articles-data-2.js  # Part V (52–151)
        ├── articles-data-3.js  # Parts VI, VIII (152–242)
        ├── articles-data-4.js  # Parts IX–XII (243–300A)
        ├── articles-data-5.js  # Parts XIII–XXII (301–395) + Schedules
        ├── amendments-data.js  # all 106 amendments
        └── cases-data.js       # 20 landmark cases
```

## Editing content

- Article summaries live in `js/data/articles-data-*.js` as `{ n, t, d, tags }` objects grouped by Part.
  Tags: `key`, `fr` (fundamental right), `dpsp`, `duty`, `repealed`.
- Amendments: `js/data/amendments-data.js` as `{ n, y, name, d, landmark }`.
- Cases: `js/data/cases-data.js` as `{ slug, name, year, citation, bench, tags, facts, holding, significance }`.

## Disclaimer

Content is summarised for study and awareness. For authoritative text, see the
[Ministry of Law & Justice](https://legislative.gov.in/constitution-of-india/), [India Code](https://www.indiacode.nic.in/)
and the [Supreme Court of India](https://main.sci.gov.in/).
