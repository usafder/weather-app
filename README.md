# Weather App

A small web app to display the weather conditions of a city.

Demo available [here](https://best-weather.netlify.app/)

## Features
- Displays the city name, current weather icon, temperature, humidity and wind speed
- Loads a specific city using the query string ‘?city=Tokyo’
- Detects the current city using geolocation and displays its weather if no city is mentioned
- The background colour changes based on the temperature
- Caches the API data and refreshes it after 5m
- Responsive design. Works well in all devices (desktop/tablet/mobile)

## Tech Stack
- Cross-browser compatible back to Internet Explorer 11
- Uses the latest versions of TypeScript, ESLint, prettier, babel, webpack, Emotion, React (with Hooks, FC), Redux and Redux Saga
- Uses data from OpenWeatherMap API and axios for API requests
- Uses icons from [weather-icons](http://erikflowers.github.io/weather-icons/)
- Uses Google Fonts
- Deployed on Netlify


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint`

Displays lint errors in console.

