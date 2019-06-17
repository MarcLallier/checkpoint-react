créer un projet se nommant **list-games** grâce à `create-react-app`.
Dans ce projet tu devras créer 2 composants : `<GameList />` et `<Game />`.

Tu devras récupérer les informations (au format JSON) en appelant l'url suivante: [http://www.campus-bordeaux.ovh:3002/joysticks/api/games](http://www.campus-bordeaux.ovh:3002/joysticks/api/games)
Tu peux utiliser au choix [Axios](https://github.com/axios/axios) ou [Fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch) pour récupérer les données.

- `<GameList />` devra récupérer les jeux de l'API et devra les afficher via des composants `<Game />`.
- `<Game />` devra récupérer via des _props_ les informations de chaque jeu (titre, description, image etc...) et les afficher au format de ton choix.
- Ajoute un bouton `supprimer` au composant `Game` qui permettra de supprimer un jeu au clic

##  Bonus


- ajoute un `select` qui liste tous les thémes et qui permet de filtrer la liste affichée.
- ajoute un bouton `voir la promo` pour chaque jeu et utilise react-router pour afficher l'image `promo` et/ou la vidéo `trailer` sur une page avec une url de type `http://localhost:3000/jeu/promo/5` ou 5 est l'id du jeu selectionné.





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
