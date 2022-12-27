# Hero Chat
Hero Chat is a fantasy based website where 'want-to-be' superheros can socialize and share posts about their good world saving adventures.

The context is that the 'World Government Agency' has hidden a top-secret website deep in the internet who's location is only known by the worlds Superheros. 

Once inside the Comic-book styled environment makes for a fun place where these saviours of the world can hang-out and unwind. 

## Testing
|Page|State|Test|Result
|---|---|---|---|
|Landing|Not signed in|User sees landing page|PASS|
||Not signed in|No menu visible|PASS|
||Not signed in|Sign in button flashing|PASS|
||Not signed in|Responsive mobile > desktop|PASS|
||Not signed in|Sign in loads sign in view|PASS|
|Sign in|Not signed in|'sign up here' > 'sign up' view|PASS|
||Not signed in|Enter wrong details - Error feedback|PASS|
||Not signed in|Responsive mobile > desktop|PASS|
||On sign in|home view loaded|PASS|
|Sign up|||PASS|
||Not signed in|'sign in' link > sign in view|PASS|
||Not signed in|Feedback on none-unique name|PASS|
||Not signed in|Feedback on password criteria|PASS|
||Successful sign up|Taken to home view|PASS|
||Not signed up|No menu bar visible|PASS|
||Not signed up|Responsive mobile > desktop|PASS|
|Sign out|Logged in|Navbar 'sign out' > landing view|PASS|
|Home|Signed in|Menu visible|PASS|
||Signed in|'Loader' spins on load up of posts|PASS|
||Signed in|'Loading..' text on load up of 'hero search|PASS|
||Signed in|Posts can be vertically scrolled|PASS|
||Signed in|Posts load in blocks of 10 posts|PASS|
||Signed in|Shack effect on post owner hover|PASS|
||Signed in|Hero search results vertical scrolling|PASS|
||Signed in|Hero search functioning with text input|PASS|
||Signed in|Responsive mobile > desktop|PASS|
||Signed in|When post owner name clicked - post owner profile view loaded|PASS|
||Signed in|When post image clicked - correct post view loaded|PASS|
|Navbar|Signed in|Visible to signed in user|PASS|
||Signed in|Responsive mobile > desktop|PASS|
||Signed in|'Home' loads home view|PASS|
||Signed in|'Profile' loads current users profile|PASS|
||Signed in|'+post' loads add post view|PASS|
||Signed in|'logo' loads home view|PASS|
|Hero Search|Signed in|On clicking on a user it loads correct profile page|PASS|
||Signed in|No results show no results |PASS|
||Signed in|Text search displays correct results|PASS|
|Post view|Signed in but not post owner|Can view the post and comments|PASS|
||Signed in but not post owner|Clicked on post owner name loads post owners profile view|PASS|
||Signed in and Post owner|Post displayed with edit options|PASS|
||Signed in and Post owner|Post can be deleted|PASS|
||Signed in and Post owner|Post 'edit' loaded edit view|PASS|
||Signed in and Post owner|Clicked on username loads correct user profile|PASS|
|Comments|Signed in|If no comments - correct message shown|PASS|
||Signed in|If comments already posted - edit option displayed|PASS|
||Signed in|User can add a comment|PASS|
||Signed in|User can delete a comment|PASS|
||Signed in|User can edit a comment|PASS|
||Signed in|User can see all comments related to current viewed post|PASS|



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)