# Himanshu Kumar Portfolio (React + Vite + Tailwind)

A modern, responsive portfolio website for **Himanshu Kumar** (Senior Software Developer | Backend & Node.js Specialist), built with React, Vite, and Tailwind CSS.

## Features

- Clean, card-based professional dark theme
- Smooth scrolling and subtle animations (Framer Motion)
- Fully responsive layout (mobile/tablet/desktop)
- Resume download support via `/public/resume.pdf`
- GitHub Pages deploy-ready setup
- Reusable data-driven sections (skills, experience, projects)

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Local Development

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

1. Update `base` in `vite.config.js` to your repository name if different from `HimanshuPotfolio`.
2. Ensure your GitHub repo is named correctly or adjust the base path.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```
5. In GitHub repository settings:
   - Go to **Settings → Pages**
   - Set source to **Deploy from a branch**
   - Select `gh-pages` branch and root `/`

## Resume Setup

Place the latest resume file at:

```text
public/resume.pdf
```

The "Download Resume" button is already wired to this path.

## Easy Customization

- Update social links in `src/App.jsx` (`socialLinks` object)
- Update projects, experience, and skills arrays in `src/App.jsx`
- Replace GitHub placeholder link with actual profile URL

