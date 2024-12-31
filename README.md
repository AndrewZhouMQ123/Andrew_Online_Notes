# Web Experiments
- Written in TypeScript (Feels like writing Java but the type checking doesn't feel consistent and pops up in very weird places) and Compiled to JavaSript.

## Cheat Sheets for quick review
- Linux/Mac, HTTPS, Git, HTML, CSS, JS, NPM
- Not an exhaustive list, but things that I have used or come across or plan to learn/use.

## Experiments with Frontend Technologies
- Currently plain HTML, CSS and JS.

## Graphics, Calculator and Text-to-speech reader
- Implemented using built in HTML, JS functions and APIs.

## Animations
- Animated 3D Linux File System Tree
- Zoom In Zoom Out
- Panning
- Click for quick review

## Future Plans
- Incorporate React, Tailwind, Three.js
- Make a backend for this project

## Development Notes and Issues
### Initial Configs for TypeScript
- npm init -y
- npm init @eslint/config@latest
- npm install typescript --save-dev
### Trying out frontend JavaScript testing framework
- npm install mocha --save-dev
- npm install sinon --save-dev
- npm install chai --save-dev
- npm i --save-dev @types/mocha
- npm install @types/sinon --save-dev
- npm i --save-dev @types/chai
- npm install -D @types/chai@latest @types/sinon@latest
- npm install -D @types/mocha @types/node
### Trying to get TypeScript to Work
- tsc --module es2022 --target es2022 --moduleResolution node --outDir ../dist diagrams.ts
- tsc --build tsconfig.json
- Running tsc locally will compile the closest project defined by a tsconfig.json,
or you can compile a set of TypeScript files by passing in a glob of files you want.
When input files are specified on the command line, tsconfig.json files are ignored.
- https://www.typescriptlang.org/docs/handbook/compiler-options.html
- the reason why the javascript was not rendering on my browser, is because of file:// access restrictions in modern browsers. They are bypassed when served through a proper web server.
### No way to run tests in Browser, not natively supported
- https://stackoverflow.com/questions/42857778/how-do-you-run-mocha-tests-in-the-browser
- https://github.com/bradydowling/mocha-in-browser
- https://stackoverflow.com/questions/44906775/how-do-i-mock-dom-elements-when-using-mocha-javascript
- Still not working for me, so I implemented some test functions from scratch.
### Uninstall libraries
- npm uninstall chai --save-dev
- npm uninstall --save-dev @types/chai
- npm uninstall mocha --save-dev
- npm uninstall --save-dev @types/mocha
- npm uninstall --save-dev sinon
- npm uninstall --save-dev @types/sinon
### Integrating React
- npm install react react-dom
- npm install @types/react @types/react-dom