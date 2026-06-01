# Varala Commerce LLC Website

A Vue.js-powered static front-end website for `varalacommerce.com`, a USA-based wholesale distribution business.

## Pages

- Home
- About Us
- Product Catalog
- Contact Us
- Purchasing Policy
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

## Deploy With GitHub Pages

1. Create a GitHub repository, for example `varala-commerce`.
2. Upload or push these project files to the repository.
3. In GitHub, open `Settings > Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select branch `main` and folder `/root`.
6. Save.
7. In `Settings > Pages > Custom domain`, enter:

```text
varalacommerce.com
```

8. In your domain DNS settings, point the domain to GitHub Pages.

Recommended DNS records for an apex domain:

```text
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   your-github-username.github.io
```

After DNS updates, return to GitHub Pages and enable `Enforce HTTPS` when available.

## Files

- `index.html` loads Vue and the app entry.
- `src/main.js` contains the Vue app, page routing, catalog content, forms, and policy text.
- `src/styles.css` contains the responsive design.
