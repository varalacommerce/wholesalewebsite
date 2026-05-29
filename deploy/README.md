# Varala Commerce Website

A Vue.js-powered static front-end website for `varalacommerce.com`, a USA-based wholesale reselling business.

## Pages

- Home
- About Us
- Product Catalog
- Contact Us
- Written Policy
- Delivery Policy
- Privacy Policy
- Terms & Conditions

## Run Locally

This project uses Vue 3 from a CDN, so no `npm` install is required.

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173
```

## Files

- `index.html` loads Vue and the app entry.
- `src/main.js` contains the Vue app, page routing, catalog content, forms, and policy text.
- `src/styles.css` contains the responsive design.
