# Aggieworks Take-Home Assignment
A [React](https://reactjs.org/) web application written in [TypeScript](https://www.typescriptlang.org/) for the AggieWorks Fall 2022 application.

# Quickstart
If you would just like to see the web app itself, __FILL IN WHEN I SET IT UP LOL__
If you would like to build the app yourself:
 - Clone this Git repository.
 - Run `npm install` to install the necessary dependencies.
 - Run `npm run build` to bundle the package. It usually runs in a watch loop, so use `Ctrl+C` to exit the script.
 - Open `build/index.html` in your browser.

# Dependencies
 - [Node](https://nodejs.org/)
 - [TypeScript](https://www.typescriptlang.org/)
 - [ESBuild](https://esbuild.github.io/)
 - [React](https://reactjs.org/)

I'm not a big fan of dependencies, so I looked into the `create-react-app` workflow and tried to cut down on any packages I found unnecessary for a simple app like this. `create-react-app` uses [WebPack](https://webpack.js.org) to bundle packages, but I decided to use ESBuild mostly due to its philosophy of speed, and the fact that it is written in Go. Definitely some bias at play here.