# Webpack template SCSS v.1

Basic configuration of Webpack.

## Technologies

		"name": "webpack5",
		"version": "1.0.0",
		"description": "",
		"main": "index.js",
		"scripts": {
		"start": "set NODE_ENV=development&&webpack serve",
		"dev": "set NODE_ENV=development&&webpack",
		"build": "set NODE_ENV=production&&webpack"
		},
		"keywords": [],
		"author": "",
		"license": "ISC",
		"devDependencies": {
		"@babel/core": "^7.17.8",
		"@babel/preset-env": "^7.16.11",
		"babel-loader": "^8.2.4",
		"css-loader": "^6.7.1",
		"favicons": "^6.2.2",
		"favicons-webpack-plugin": "^5.0.2",
		"html-loader": "^3.1.0",
		"html-webpack-plugin": "^5.5.0",
		"mini-css-extract-plugin": "^2.6.0",
		"postcss": "^8.4.12",
		"postcss-loader": "^6.2.1",
		"postcss-preset-env": "^7.4.3",
		"sass": "^1.49.9",
		"sass-loader": "^12.6.0",
		"style-loader": "^3.3.1",
		"webpack": "^5.70.0",
		"webpack-cli": "^4.9.2",
		"webpack-dev-server": "^4.7.4"
		},
		"browserslist": "> 0.25%, not dead",
		"dependencies": {
		"jquery": "^3.6.0"
		}

## Start using for a new project

Clone the repo
Run npm i to install dependencies
Run commands in terminal:

Development Server

```
npm start
```

Production Build

```
npm run build
```

Development mode

```
npm run dev
```

```
1. npm i -D babel-loader @babel/core @babel/preset-env webpack webpack-cli webpack-dev-server
2. npm i -D style-loader css-loader postcss-loader postcss postcss-preset-env sass-loader sass mini-css-extract-plugin
3. npm i jquery
4. npm install --save-dev favicons favicons-webpack-plugin
5. npm i -D cssnano css-minimizer-webpack-plugin postcss-easy-import postcss-loader postcss-nested postcss-scss
6. npm install --save normalize.css
```