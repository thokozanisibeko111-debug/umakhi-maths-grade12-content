# Maths Grade 12 Content Website

This repository contains a simple Next.js application that organises the **Maths Handbook & Study Guide – Grade 12** content into chapters for Paper 1 and Paper 2.  The site reads `public/content_structure.json` to display chapter titles and key topics.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`.

## Deployment to Vercel

This project is ready to deploy on [Vercel](https://vercel.com/).  After pushing the repository to GitHub, import it into Vercel and deploy as a Next.js app.  No additional configuration is needed.

## Content structure

The `public/content_structure.json` file contains an array of chapters with:

* `chapter` – the chapter number.
* `title` – the title of the chapter.
* `paper` – which examination paper the chapter belongs to (`Paper 1` or `Paper 2`).
* `topics` – an array of topics covered.

You can regenerate this file or extend it with additional metadata as needed.
