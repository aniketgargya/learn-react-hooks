# Learn React Hooks

## About this Repo
Still being built however it works, just adding more exercises!

This repo was created to help you learn react hooks easily through examples that you code and actual useful applications of react hooks.

## How to use this Repo
### On your Machine
Either clone or fork this repo, so you can download it on your machine. We recommend forking the repo so you can get updates.

### Folder and File Structure
The repo contains a folder for each hook and are strucutred as shown below.  
```
useState/
├── __tests__
│   └── ExerciseOne.test.js
├── instructions.md
├── package-lock.json
├── package.json
├── solutions.md
├── src
│   ├── App.js
│   ├── exercises
│   │   └── ExerciseOne.js
│   ├── index.html
│   ├── index.js
│   └── solutions
│       └── ExerciseOne.js
└── webpack.config.js
```
Before starting to work on the exercise, run ```npm install``` so you can view your components in the browser and we can test your code.

### Instructions
The instructions for each exercise and some information and links on each hook can be found in the ```markdown/instructions.md``` file of each hook folder.

The components that you will need to modify will be found in ```src/exercises```.

### Running and Testing
Because React is a user interface library, we highly recommend you are running the React app in a browser so you understand what is happening. In the hook folder, run ```npm start``` and the tab will open in a browser.

To check if you completed the exercise correctly, run ```npm test``` in the hook folder. This will start the testing script in watch mode, so you can keep this going and each time you save a file, the test will run and you can see the logs in the terminal.

Each hook folder is part of the same React page, so you can keep ```npm start``` and ```npm test``` running till you are done with the entire hook folder.

### Stuck?
The ```src/solutions``` folder has possible example solutions for how to complete the exercise. Remember, this is just how we chose to solve the problem! You could complete the exercise completely differently and it would still be right as long as it passes the tests. ```markdown/solutions.md``` folder contains our throught proccess, explanations of our code, and extra notes on the hook/problem.

## Setting Up For Best Experience
You don't have to follow any of these, this was how we envisioned people learning from this repository.

### Editor
We recommend using Visual Studio Code. It has great Intellisense and plugins that we also recommend.

### View Markdowns
This repo relies heavily on markdown files so might as well get an extension for previewing them. We use https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced. This will let you open the preview next to your code.

### Integrated Terminal
Although the integrated terminal in VS Code is not the best, it should suffice for this course. There is not much work that needs to be done in the terminal, and you can utilize the split feature so you can use one for running the test (```npm test```) and running React (```npm start```).

### See It
This is how we recommend it look like when coding this course. Of course you don't have to have it look like this, we just think it looks nice.
![](/github-readme/setup.png)

## Building Learn React Hooks
### Inspiration
I wanted to learn Rust earlier this year and enjoyed using Rustlings https://github.com/rust-lang/rustlings, so I was inspired to create something similar about something I am more familiar with: React Hooks!

### Built With

For building exercise tests we used:
- Jest
- React Testing Utils 

For building the React app bundles we used:
- Webpack
- Webpack Dev Server
- Various Babel Libraries

If you want to learn more about the tests, check out the ```__tests__``` directories.

### Enjoy It?
If you enjoyed using this repo, star the repo, it will let me know people liked it.

If you want new features or anything, open an issue on the repo and we'll respond.

If you want to contribute, open a pull request.
