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

3. Populate `.env.development` and `.env` file based on `.env.example`. Both files must be equal (for now).
4. Create the postgress db.
```bash
docker-compose up database
```
5. Create and populate the database
```bash
npm run dev:migration:generate
```
```bash
npm run dev:seed
```
6. Run the back-end in a development environment:

```bash
npm run dev
```
