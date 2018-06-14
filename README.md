This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Folder Structure

After creation, your project should look like this:

```
burgerbuilder/
  README.md
  config/
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    assets/
    components/
    containers/
    hoc/
    App.js
    App.test.js
    index.css
    index.js
    axios-orders.js
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


Jest has an integrated coverage reporter that works well with ES6 and requires no configuration.<br>
Run `npm test -- --coverage` (note extra `--` in the middle) to include a coverage report like this:

![coverage report](http://i.imgur.com/5bFhnTS.png)

Note that tests run much slower with coverage so it is recommended to run it separately from your normal workflow.

#### Configuration
To run successfully update src/axios.orders.js and scr/containers/BurgerBuilder and BurgerBuilder.js with Google Firebase URL