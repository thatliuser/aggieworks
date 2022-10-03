# AggieWorks Take-Home Assignment
A [React](https://reactjs.org/) web application written in [TypeScript](https://www.typescriptlang.org/) for the AggieWorks Fall 2022 application.

# Quickstart
If you would just like to see the web app:
 - Visit the [website](https://thatliuser.github.io/aggieworks)!

If you would like to build the app yourself:
 - Clone this Git repository.
 - Run `npm install` to install the necessary dependencies.
 - Run `npm run build` to bundle the package. It usually runs in a watch loop, so use `Ctrl+C` to exit the script.
 - Open `build/index.html` in your browser.
 - Play around with it!

# Dependencies
 - [Node](https://nodejs.org/)
 - [TypeScript](https://www.typescriptlang.org/)
 - [ESBuild](https://esbuild.github.io/)
 - [React](https://reactjs.org/)

I'm not a big fan of dependencies, so I looked into the `create-react-app` workflow and tried to cut down on any packages I found unnecessary for a simple app like this. `create-react-app` uses [WebPack](https://webpack.js.org) to bundle packages, but I decided to use ESBuild mostly due to its philosophy of speed, and the fact that it is written in Go. Definitely some bias at play here.

# Important Notices
 - This is the first web app I have ever written. This is my first time using CSS, TypeScript, React, and Node. I learned all of this technology within 3 days. If there's any mistakes or weird conventions, then it's probably because of that. I hope that even within this short timespan, this work is impressive enough! Thank you.
