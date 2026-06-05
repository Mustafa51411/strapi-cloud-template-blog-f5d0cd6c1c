# ARLOX CMS Guide

This Strapi project controls static website content only.

Shopify still controls:

- Products
- Collections
- Prices
- Inventory
- Checkout
- Orders

Strapi controls:

- About Page
- Contact Page
- FAQ Page
- Reviews Page

## Client Workflow

1. Open the Strapi admin URL.
2. Go to `Content Manager`.
3. Open one of:
   - `About Page`
   - `Contact Page`
   - `FAQ Page`
   - `Reviews Page`
4. Edit the content.
5. Click `Save`.
6. Click `Publish`.
7. Refresh the website.

## Page Fields

### About Page

- `seo`: Google/SEO title and description.
- `hero`: Main top section.
- `sections`: First item is Vision, second item is Makers.
- `values`: Three value cards.
- `stats`: Number cards.

### Contact Page

- `seo`: Google/SEO title and description.
- `hero`: Main top section.
- `contactIntro`: Text above the contact form.
- `contactCards`: Phone/email cards.

### FAQ Page

- `seo`: Google/SEO title and description.
- `hero`: Main top section.
- `faqItems`: Questions and answers.

### Reviews Page

- `seo`: Google/SEO title and description.
- `hero`: Main top section.
- `reviewIntro`: Text below the title.
- `reviewCtaLabel`: Review button text.

## Frontend URL

Use this in the frontend `.env`:

```bash
VITE_STRAPI_URL="https://hopeful-duck-1d6f1130fb.strapiapp.com"
```
