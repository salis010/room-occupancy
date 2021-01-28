# Room Occupancy

## Install and Run

-   Clone from GitHub
-   Install with `npm i`
-   Build with `npm run build`
-   Start with `npm run start`
-   Go to `localhost:3000` on your browser

## Tech

-   React
-   React Hooks (State Management)
-   Emotion (JS-in-CSS)
-   Jest
-   Webpack
-   Babel
-   ESLint

## Description

### Room Occupancy Algorithm

Available in `./src/utils`.
The respective test file is in `./__tests__`

The test file includes additional test cases to test for extremties such as zero rooms, a large number of rooms, and even an extra test for a negative number of rooms, just to confirm how the function would react to this.

Comments were added in `get-usage.js` to help the reviewer.

### CSS

A `ThemeProvider` injects styles defined in a theme file throughtout the app.

I copied styling colors from your homepage, and tried to create a minimalist UI, with no grid lines, or unnecessary fun-fare since the target audience are office workers.

For the same reason no monile responsiveness was implemented.

## Improvements

-   Add a notification in case the data from the JSON file fails to load
-   The `OccupancyTable` component could be made more flexible by taking a dynamic number of rows, columns, and data.
-   Statistics such as the percentage of occupied rooms, the revenue ratio between Premium and Economy, the number of Economy guests that were upgraded to Premium, and visual info such as pie-charts.
