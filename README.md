# Web Experiments

A miscellaneous website with all sorts of goodies: classic minigames, web dev cheatsheets, scientific calculators, scientific graph tools, and for trying out experimental frontend technologies

## Technologies Used

- TypeScript, JavaScript, HTML and CSS

- React, NextJS

- Custom CSS modules and Tailwind CSS

## Features
- HTML, CSS, JS, NPM, MACOS and VIM cheatsheets and many more
- Scientific Calculator and Graphing tools
- Classic minigames: Tetris, Pac Man, Space Invaders (coming soon)
- Search Function now searches for games and returns search results
- Landing page animations (coming soon)

## Future plans
- improved text to speech API, maybe incorporating AI voice

## Getting Started

### Prerequisites

- Node.js installed

- npm or yarn package manager

### Installation

1. Clone the repository:

```bash

git clone https://github.com/AndrewZhouMQ123/Web_Experiments

```

2. Navigate to the project frontend directory:

```bash

cd frontend

```

3. Install dependencies:

```bash

npm install

```

4. Start the development server:

```bash

npm start

```

### Running the Application

- Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## Development Notes

### Troubleshooting

- Issues with SSML tags in Web Speech API.

### NextJS App router Integration

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- Install VSCode Extension: PostCSS Language Support, solves Unknown at rule @tailwindcss(unknownAtRules)

## Deploy to Vercel

- Deploy to Vercel using the github repo
- Setup Postgres database (I used supabase)
- Connect database to project
- Create ids_table in database and insert the ids for dynamic routing