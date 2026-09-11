# The Gossip Grid — Be the Rumor

A tactical reverse-stealth HTML5 puzzle game built for Itch.io.

## Core Idea
You are not a human character — you are a **Rumor (Afwaah)**. Infect villagers across a top-down village grid while avoiding the moving **Truth-telling Guards**.

- Each villager role has a different spread range.
- You can only spread from an infected source to a non-infected target.
- If source or target is inside active guard radius, the spread is blocked.
- Guards move every turn, so timing and route planning are key.

## Roles
- **Introvert**: range 1
- **Farmer**: range 2
- **Postman**: range 3
- **Storyteller**: range 4

## Run Locally
```bash
npm start
```
Then open `http://localhost:8080`.

## Validation
```bash
npm test
```

## Create Itch Upload File
```bash
npm run package:itch
```
This generates:

- `gossip-grid-itch.zip`

Upload this ZIP directly to an Itch.io HTML5 project page.
