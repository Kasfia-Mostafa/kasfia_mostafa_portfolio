# Kasfia Mostafa Portfolio

A newspaper-style personal portfolio built with React and Vite, featuring animated section reveals, project highlights, research publications, certifications, and contact channels.

LINK 1: [https://kasfiamostafa.vercel.app/](https://www.kasfiamostafa.tech/)
LINK 2: [https://kasfiamostafa.vercel.app/](https://kasfiamostafa.vercel.app/)

## Live Experience

This portfolio includes:

- A custom animated loading screen
- GSAP + ScrollTrigger section and element animations
- A newspaper-inspired editorial layout
- Dedicated sections for education, work experience, projects, research, and certifications
- Resume download support from the public assets
- Contact actions including copy-to-clipboard email and social links

## Tech Stack

- React 19
- Vite 8
- GSAP (with ScrollTrigger)
- React Icons
- Tailwind CSS (configured in project)
- ESLint 9

## Getting Started

### 1) Clone the repository

```bash
git clone <your-repo-url>
cd "Kasfia Mostafa"
```

### 2) Install dependencies

```bash
npm install
```

### 3) Start development server

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev`: Runs the app in development mode with hot reload.
- `npm run build`: Builds the app for production into `dist/`.
- `npm run preview`: Serves the production build locally.
- `npm run lint`: Runs ESLint checks.

## Project Structure

```text
.
|-- public/
|   |-- Kasfia_Mostafa.pdf
|   |-- favicon.svg
|   `-- icons.svg
|-- src/
|   |-- App.jsx
|   |-- App.css
|   |-- index.css
|   |-- main.jsx
|   |-- assets/
|   `-- components/
|       `-- ProjectCard.jsx
|-- eslint.config.js
|-- postcss.config.js
|-- tailwind.config.js
|-- vite.config.js
`-- package.json
```

## Content Editing Guide

Most portfolio content is maintained in `src/App.jsx` using structured arrays:

- `experiences`: Work history and appointment letter links
- `educationStories`: Education details
- `projects`: Project cards, links, and stack details
- `certificates`: Certification metadata and proof links
- `researchPapers`: IEEE publication data
- `specialisms`: Skills shown in the masthead sidebar

To update the resume file used by the "Download Resume" button, replace:

- `public/Kasfia_Mostafa.pdf`

## Appointment Letter Links

Each work experience entry supports a separate link using the `appointmentLetter` field in `src/App.jsx`.

Example:

```jsx
{
	company: "Company Name",
	role: "Role",
	period: "MM/YYYY - MM/YYYY",
	appointmentLetter: "https://drive.google.com/file/d/your-id/view",
	description: "...",
	quote: "...",
}
```

## Build For Production

```bash
npm run build
```

Production files are generated in `dist/`.

## Deployment

This app can be deployed to any static host that supports Vite builds, such as:

- Vercel
- Netlify
- GitHub Pages

Use `npm run build` and deploy the `dist/` folder.

## License

This project is for personal portfolio use. Add a license file if you want to make reuse terms explicit.
