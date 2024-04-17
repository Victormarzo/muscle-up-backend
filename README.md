# Muscle Up - backend
Back-end for Muscle Up, an individual gym training solution to keep up with your evolution

## About
Muscle Up is a web browser application, best suited for mobile query, that helps you tracking and evolving your gym training
### How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Populate `.env.development` file based on `.env.example`. `REACT_APP_API_BASE_URL` should point to your API server 
4. Create and populate the database

```bash
npm run dev:migration:generate
```
5. Run the back-end in a development environment:

```bash
npm run dev
```
