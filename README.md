# Web Experiments

A collection of frontend experiments using TypeScript, HTML, CSS, and JavaScript, with plans to incorporate modern frameworks like React and Three.js.

## Technologies Used

- TypeScript

- HTML

- CSS

- JavaScript

- React (planned)

- Tailwind CSS (planned)

- Three.js (planned)

## Features

- Graphics experiments

- Calculator implementation

- Text-to-speech reader using Web Speech API

## Future Plans

- Incorporate React for component-based architecture.

- Use Tailwind CSS for styling.

- Implement 3D graphics with Three.js.

- Develop a backend for additional functionality.

- Create an animated 3D Linux file system tree with zoom and pan capabilities.

## Getting Started

### Prerequisites

- Node.js installed

- npm or yarn package manager

### Installation

1. Clone the repository:

```bash

git clone https://github.com/AndrewZhouMQ123/web-experiments.git

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

### TypeScript Configuration

- Initial setup involved creating a `tsconfig.json` and configuring ESLint.

- Commands used:

```bash

npm init -y

npm init @eslint/config@latest

npm install typescript --save-dev

tsc --module es2022 --target es2022 --moduleResolution node --outDir ../dist diagrams.ts

tsc --build tsconfig.json

```
- Running tsc locally will compile the closest project defined by a tsconfig.json
- or you can compile a set of TypeScript files by passing in a glob of files you want. When input files are specified on the command line, tsconfig.json files are ignored.
- or you can setup the folder you want to compile using "include" in the config
- the reason why the javascript was not rendering on my browser, is because of file:// access restrictions in modern browsers. They are bypassed when served through a proper web server.

### Testing Frameworks

- Installed Mocha, Chai, and Sinon for testing:

```bash

npm install mocha sinon chai --save-dev

npm install @types/sinon @types/chai @types/mocha --save-dev

npm install -D @types/chai@latest @types/sinon@latest @types/mocha @types/node

```
### Running Tests

- Tests are set up with Mocha, Chai, and Sinon.

- Run tests using:

```bash

npm test

```
- No way to run tests in Browser, not natively supported
- https://stackoverflow.com/questions/42857778/how-do-you-run-mocha-tests-in-the-browser
- https://github.com/bradydowling/mocha-in-browser
- https://stackoverflow.com/questions/44906775/how-do-i-mock-dom-elements-when-using-mocha-javascript

### Troubleshooting

- Issues with SSML tags in Web Speech API.

- Browser restrictions with file:// protocol; recommend serving files through a local server.

### Webpack Integration Challenges

- Attempted to integrate Webpack but encountered issues with module configurations.

- Decided to use Create React App for a more streamlined setup.

```bash

npm install --save-dev webpack webpack-cli webpack-dev-server ts-loader
npm run build

```

### Migrate To React

- Set up a new React app using Create React App:

```bash

npm init create-react-app my-app
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
npm start
npm run build
npm run eject

```

- Create React App & react-script is deprecated so use a React framework instead
- NextJS

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

## Deploy on Vercel