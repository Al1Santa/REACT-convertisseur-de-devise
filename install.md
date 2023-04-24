# installer yarn

```bash
 yarn init
 ```

 ## webpack

 ```bash
 yarn add --dev webpack webpack-cli
 ```

 ## lancer webpack 

 ### création de main.js

 ```bach
 yarn add --dev webpack webpack-cli
 ``` 

 ## mode dev

 ```bash
 ./node_modules/.bin/webpack --mode development
 ``` 

 ## mode dev

 ```bash
 ./node_modules/.bin/webpack --mode production
 ``` 
### Dans pacjage.json


```bash
"scripts": {
    "build:dev": "webpack --mode development",
    "build":"webpack --mode production"
  },
  ```

  permet de lancer le mode dev avec : ```bash  
                                            yarn build:dev```

permet de lancer le mode prod avec : ```bash  
                                            yarn build```


# BABEL

```bash
    yarn add -dev @babel/core babel-loader @babel/preset-env @babel/preset-react
```
### contenu du .babelrc 
```bash
{
    "presets": [
      [
        "@babel/preset-env", {
        "useBuiltIns": "usage",
        "corejs": 3
      }], 
      ["@babel/preset-react", {
        "runtime": "automatic"
      }]
    ],
    "plugins": [
      "@babel/plugin-proposal-object-rest-spread"
    ]
  }
```

puis crée un fichier webpack.config.js qui permet de relié babel à webpack
```bash
const path = require('path');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    }
  }
};
```

# installation outils webpack dev serveur

```bash
"scripts": {
    "build:dev": "webpack --mode development",
    "build": "webpack --mode production",
    "start": "webpack serve"
  },
```
## ajout ligne script package.json

```bash
  "start": "webpack serve"
 ```

 puis : ```bash
                yarn start
                ```

# installation

```bash
 yarn add react react-dom
 ```