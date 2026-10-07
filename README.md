# Tahmid Chowdhury, portfolio

This repository contains the React single-page portfolio for me, Tahmid Chowdhury. The public site lives in `frontend/` and uses the existing Create React App setup; no new runtime dependencies were added.

## Local development

```bash
cd frontend
npm install
npm start
```

Open `http://localhost:3000`. Create a production build with `npm run build`, or run the existing tests with `npm test`.

## Content notes

The portfolio uses the contact details, education, experience, skills, project descriptions, and quantitative claims already supplied in the project/source materials. The Tesla Stock Prediction result is explicitly described as a trading simulation/backtest, not live investment performance. Repository links are included only for projects with source-supported URLs. The RSS feed contains a stable, human-readable work permalink; replace its example deployment URL if the site is deployed elsewhere.

The site intentionally avoids analytics and third-party tracking. Identity and content use h-card-friendly classes (`h-card`, `p-name`, `u-photo`, `u-email`) and project content is structured as semantic articles.
