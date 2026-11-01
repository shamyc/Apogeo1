# White & Salt homepage recreation

Responsive Vite website based on the White & Salt homepage, with locally bundled Manrope typography, a mobile menu, a six-project gallery, accessible project dialogs, audit and contact links, and a responsive footer.

## Development

Requires Node.js 22.12+ (Node.js 24 is available in this environment).

```sh
npm ci --cache /tmp/apogeo-npm-cache
npm run dev
```

```sh
npm run build
npm test
```

Browser tests use `/usr/bin/chromium` in this cloud environment. Start the development server on port 5173 before running tests.

## Reference assets

Original image URLs are collected in `src/assets.json`. Images remain hosted on `images.squarespace-cdn.com`; that domain must be accessible to view the original photography. The cloud environment currently blocks that CDN, so image loading and a pixel-level visual comparison remain unverified. No original Squarespace scripts or tracking code are included. The logo is recreated as text.

Contact, audit, blog, social, privacy, and full case study links point to the original public destinations; this project implements the homepage and project preview dialogs.
