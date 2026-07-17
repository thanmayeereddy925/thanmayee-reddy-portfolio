# Thanmayee Gadi — Portfolio

A static, single-page portfolio. No build step, no framework — just `index.html`, `style.css`, `script.js`, and `images/`.

## Deploy to Vercel

**Option A — Vercel CLI (fastest)**
1. Install the CLI once: `npm install -g vercel`
2. From inside this folder, run: `vercel`
3. Answer the prompts (link/create a project, keep defaults — it's a static site, no build command needed).
4. Run `vercel --prod` to push it live.

**Option B — GitHub + Vercel dashboard**
1. Create a new GitHub repo and push this folder to it.
2. Go to vercel.com → **Add New Project** → import that repo.
3. Framework preset: **Other** (or "Static"). No build command, no output directory override needed.
4. Deploy.

Either way you'll get a live `.vercel.app` URL, and you can attach a custom domain later from the Vercel project settings.

## Adding your project images (recommended — visible to everyone)

Open `script.js` and find the `PROJECTS` array near the top. Each project has an `image: null` line. To add a real image:

1. Drop the image file into `images/projects/` (e.g. `images/projects/smart-agri.jpg`).
2. Change that project's line to: `image: "images/projects/smart-agri.jpg"`
3. Redeploy (`vercel --prod`, or just push to GitHub if it's connected).

## Quick preview edits (only visible to you, in your browser)

Click the **Edit Projects** button in the bottom-right corner of the live site, then click any project image to upload a photo. This is a fast way to preview how a project will look — but it's saved to your browser's local storage only, so nobody else visiting the site will see it. For images everyone can see, use the method above.

## Editing text content

- Hero name, tagline, stats → `index.html`, inside `<section class="hero">`
- About text → `<section id="about">`
- Services → `<section id="services">`
- Experience / education / certifications → `<section id="experience">`
- Contact details / socials → `<section id="contact">` and the `<footer>`
- Project titles, descriptions, tags → the `PROJECTS` array at the top of `script.js`

## Structure

```
index.html    → page content
style.css     → all styling (colors/fonts are CSS variables at the top)
script.js     → nav behavior, hero animation, project rendering, edit mode, contact form
images/
  profile.jpg      → your headshot
  projects/        → drop project screenshots here
```
