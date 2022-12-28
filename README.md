# Hero Chat
Hero Chat is a fantasy based website where 'want-to-be' superheros can socialize and share posts about their amazing world-saving adventures. This is the first build / release and lays the foundations of a world that will be expanded to include other user types such as 'City Majors' and 'Fans' that will be able to interact are reward Superheros.

The context is that the 'World Government Agency' has hidden a top-secret website deep in the internet who's location is only known by the worlds Superheros. 

Once inside the Comic-book styled environment makes for a fun place where these saviours of the world can hang-out and unwind. 

## Features
### Landing page
- Styled to give the feel of a government database login
- user can only login from this screen
- user of flashing button for added drama

### Login in
- User enters the comic-styled world. 
- strong visual identity and comic book text language
- User has option to create an account

### Home screen
- Lists all posts 
- Shake effect on Username
- Hero Search side panel (top panel on mobile view)
- Independent scrolling of the post and hero search components

### Post view
- Constant styling message
- Owner can choose to edit or delete post
- Comments have full CRUD functionality 
- Posts have full CRUD functionality

### Profile view
- Find out more about the superhero 
- Owner can edit the profile and powers


## UX Design
### Working within the limitations
Due to how the course has been structured I had two weeks to create a project that met the Code Institute pass requirements for this module. This was two-weeks over the Christmas and New Year period. So I knew I needed to created something realistically achievable within these hard timeline limitations. 

I had not worked with React before and had limited knowledge of creating an Django API that linked to a React repository... so time would need to be allowed to ensure this basic function worked.

This information lead my thinking in the UX Design process. This needed to be a simple site with a strong design and basic functionality. Sometime that could be expanded on in the future so that the site would be a strong portfolio project. 

### Why SuperHeros?
I knew it was going to be a basic post, comments and profile react website, but I did not want to do 'another' social media site and that's when SuperHeros popped into my mind. This theme enabled me to show a different design style from my pervious portfolio projects and share some humour and personality.

### Research
Looking at the style of classic superhero comics you see that they have a lot of energy. Through the fonts and the language a strong and positive emotion is projected to the readers. 

### Mock ups
In Adobe XD I created some wire frames and explored the functionality of the website. 

--INSERT IMAGES

### Colors

|Color|Main use within the site|
|---|---|
|![#FFFC00](https://placehold.co/15x15/FFFC00/FFFC00.png) `#FFFC00`| Background of site
| ![#000000](https://placehold.co/15x15/000000/000000.png) `#000000` | Text and borders
| ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) `#FFFFFF` | Container backgrounds and input fields
| ![#4AF626](https://placehold.co/15x15/4AF626/4AF626.png) `#4AF626` | Terminal text

### Fonts
|Font|Main uses within the site|
|---|---|
|[font-family: grenadine-mvb, sans-serif;](https://github.com/andrewcargill/superheros/blob/23969f79fd8e7012b0bf0574c454119024858f7b/src/App.module.css#L2)| Informational text - This is a more formal font that is easy to read.|
|[font-family: cc-smash-open, sans-serif;](https://github.com/andrewcargill/superheros/blob/23969f79fd8e7012b0bf0574c454119024858f7b/src/App.module.css#L27)|Superhero usernames. There is a lot of movement and drama in this font.|
|[font-family: collector-comic, sans-serif;](https://github.com/andrewcargill/superheros/blob/23969f79fd8e7012b0bf0574c454119024858f7b/src/App.module.css#L15)|Headlines and captions. This font replicates the fonts used in comic books. It is fun and dramatic with a sense of movement and energy|
|[font-family: courier-std, monospace;](https://github.com/andrewcargill/superheros/blob/23969f79fd8e7012b0bf0574c454119024858f7b/src/App.module.css#L35)|Terminal: Used on the landing page and powers edit view. This is the cold voice of 'authority' |

### Tables and Databases
INSERT IMAGES OF TABLES

### Diagrams to implementation 
This is how the planned site evolved into the developed site.
Time was on my mind throughout the sites development, with design and functionality choices and sacrifices constantly being made, to ensure the project stayed on track and that a finished site was live by the deadline date.

|Planned|Finished Site|Comment|
|---|---|---|
|Home page has post view and searchable hero powers|Finished site has post view and searchable hero profiles|I switched to the hero search as it was more realistic with the remaining available development time|
|Profile page|Implemented as planned||
|Powers|This was implemented in the API as planned|Added to the profiles for ease of use|
|Creating a post|Implemented as planned||
|General styling|This was followed but evolved through development| I would have liked to have replicated the exact design in the mockups for all components|
## Development
### Reuse of components
- The navigation is used throughout the site along with the post, comment, profile and powers components. 
- Loading spinners are imported as a centralized component
- Two main CSS files are reused across the site.
    - App.module.css : Contains all fonts
    - Containers.module.css : Contains all content containers

### Userstories and sprints
I implemented userstories for every step of the frontend development of this project. The main project [can be viewed here.](https://github.com/users/andrewcargill/projects/8)

#### Sprints
|Date|Sprint|Userstories|
|---|---|---|
|16.12.22|Site setup|[site set up](https://github.com/andrewcargill/superheros/issues/7) |
|||[Basic Deployment](https://github.com/andrewcargill/superheros/issues/8) |
|||[Basic styling of site](https://github.com/andrewcargill/superheros/issues/9) |
|||[Navigation routing](https://github.com/andrewcargill/superheros/issues/10) |
|16.12.22|API|[Connect API](https://github.com/andrewcargill/superheros/issues/12) |
|||[Create Sign up form](https://github.com/andrewcargill/superheros/issues/11) |
|||[User can sign up](https://github.com/andrewcargill/superheros/issues/13) |
|||[Basic styling of site](https://github.com/andrewcargill/superheros/issues/9) |
|17.12.22|User login|[User login](https://github.com/andrewcargill/superheros/issues/15) |
|||[Navigation](https://github.com/andrewcargill/superheros/issues/17) |
|||[User logout](https://github.com/andrewcargill/superheros/issues/16) |
|||[Styling of sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|17.12.22|Landing page|[Landing page](https://github.com/andrewcargill/superheros/issues/18) |
|||[Navigation](https://github.com/andrewcargill/superheros/issues/17) |
|||[User logout](https://github.com/andrewcargill/superheros/issues/16) |
|||[Sign up styling](https://github.com/andrewcargill/superheros/issues/14) |
|17.12.22|Create Post|[Create a post](https://github.com/andrewcargill/superheros/issues/22) |
|||[styling of sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|||[Flesh out signed out landing page](https://github.com/andrewcargill/superheros/issues/20) |
|18.12.22|Comments|[Create comment](https://github.com/andrewcargill/superheros/issues/27) |
|||[Skeleton Post Comments List](https://github.com/andrewcargill/superheros/issues/25) |
|||[Styling of sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|||[Flesh out sign out landing page](https://github.com/andrewcargill/superheros/issues/20) |
|19.12.22|API fix|[API crash on comments](https://github.com/andrewcargill/superheros/issues/31) |
|||[Create Comment](https://github.com/andrewcargill/superheros/issues/27) |
|||[Skeleton Post Comments list](https://github.com/andrewcargill/superheros/issues/25) |
|||[Styling of sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|19.12.22|Profiles|[view all and single profiles](https://github.com/andrewcargill/superheros/issues/36) |
|||[view single super power](https://github.com/andrewcargill/superheros/issues/34) |
|||[Owner can edit super power](https://github.com/andrewcargill/superheros/issues/35) |
|||[Styling of sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|19.12.22|Profiles and super powers|[Skeleton list view of profiles](https://github.com/andrewcargill/superheros/issues/39) |
|||[View single super power](https://github.com/andrewcargill/superheros/issues/34) |
|||[Owner can edit super powers](https://github.com/andrewcargill/superheros/issues/40) |
|||[Styling of sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|19.12.22|Navigation|[Navigation triggering](https://github.com/andrewcargill/superheros/issues/42) |
|||[List of super powers](https://github.com/andrewcargill/superheros/issues/35) |
|||[Styling of sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|||[Flesh out signed out landing page](https://github.com/andrewcargill/superheros/issues/20) |
|20.12.22|Landing page / create post|[Flesh out landing page](https://github.com/andrewcargill/superheros/issues/20) |
|||[Flesh out create post view](https://github.com/andrewcargill/superheros/issues/48) |
|||[Owner can edit/ delete Comments](https://github.com/andrewcargill/superheros/issues/45) |
|||[Fleshing out sign up form](https://github.com/andrewcargill/superheros/issues/47) |
|||[Fleshing out post components](https://github.com/andrewcargill/superheros/issues/47) |
|20.12.22|General|[Navigation background](https://github.com/andrewcargill/superheros/issues/29) |
|||[Fleshing out of sign in form](https://github.com/andrewcargill/superheros/issues/47) |
|||[Fleshing out of post components](https://github.com/andrewcargill/superheros/issues/28) |
|||[Fleshing out of sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|21.12.22|Side container|[Sidebar - Skeleton](https://github.com/andrewcargill/superheros/issues/53) |
|||[Fleshing out sign up form](https://github.com/andrewcargill/superheros/issues/47) |
|||[BUG: Fix filters on API (Comments/posts)](https://github.com/andrewcargill/superheros/issues/32) |
|||[BUG: Updating post image crashing](https://github.com/andrewcargill/superheros/issues/26) |
|21.12.22|API fix|[BUG: Fix filters on API](https://github.com/andrewcargill/superheros/issues/32) |
|||[BUG: Pagination on post list](https://github.com/andrewcargill/superheros/issues/33) |
|||[BUG: Posts - Username link color](https://github.com/andrewcargill/superheros/issues/54) |
|||[BUG: Owner image not showing in powers list view](https://github.com/andrewcargill/superheros/issues/43) |
|22.12.22|Styling|[Fleshing out of sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|||[Profile view displays powers](https://github.com/andrewcargill/superheros/issues/51) |
|||[BUG: Profile edit - updating image causes crash](https://github.com/andrewcargill/superheros/issues/38) |
|||[BUG: Change naming on profile usestate](https://github.com/andrewcargill/superheros/issues/37) |
|22.12.22|Various|[BUG: Stlying of powers search for small devices](https://github.com/andrewcargill/superheros/issues/55) |
|||[BUG: API admin view 'powers'](https://github.com/andrewcargill/superheros/issues/30) |
|||[BUG: Post page - Comments not wrapping](https://github.com/andrewcargill/superheros/issues/52) |
|||[BUG: Create Post - Center input field/ image sizing](https://github.com/andrewcargill/superheros/issues/49) |
|22.12.22|Styling|[Fleshing out sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|||[Profile view displays powers](https://github.com/andrewcargill/superheros/issues/51) |
|||[BUG: Profile edit form](https://github.com/andrewcargill/superheros/issues/38) |
|||[BUG: Profile edit useState](https://github.com/andrewcargill/superheros/issues/37) |
|23.12.22|Various|[BUG: Updating post image](https://github.com/andrewcargill/superheros/issues/26) |
|||[Powers - User can see top list of powers](https://github.com/andrewcargill/superheros/issues/50) |
|||[BUG: Username color on posts](https://github.com/andrewcargill/superheros/issues/54) |
|||[BUG: Post edit view image update crash](https://github.com/andrewcargill/superheros/issues/38) |
|23.12.22|Navigation|[Update navigation](https://github.com/andrewcargill/superheros/issues/57) |
|||[Sign in - help text](https://github.com/andrewcargill/superheros/issues/60) |
|||[Sidebar search user](https://github.com/andrewcargill/superheros/issues/61) |
|||[Fleshing out Profile page](https://github.com/andrewcargill/superheros/issues/56) |
|25.12.22|Various|[Fleshing out of powers edit view](https://github.com/andrewcargill/superheros/issues/64) |
|||[Flesh out single post view](https://github.com/andrewcargill/superheros/issues/59) |
|||[BUGS: Post - username link color](https://github.com/andrewcargill/superheros/issues/54) |
|||[BUG: useState profile edit form](https://github.com/andrewcargill/superheros/issues/37) |
|26.12.22|Hero Search|[Fleshing out hero search](https://github.com/andrewcargill/superheros/issues/68) |
|||[Styling: Post Page](https://github.com/andrewcargill/superheros/issues/52) |
|||[BUG: posts username link color](https://github.com/andrewcargill/superheros/issues/54) |
|26.12.22|Styling|[Edit post buttons](https://github.com/andrewcargill/superheros/issues/66) |
|||[Buttons on profile update view](https://github.com/andrewcargill/superheros/issues/65) |
|||[BUG: Create post - Center input field](https://github.com/andrewcargill/superheros/issues/49) |
|||[BUG: Posts user name link color](https://github.com/andrewcargill/superheros/issues/54) |
|26.12.22|Various|[Updating post image not working](https://github.com/andrewcargill/superheros/issues/26) |
|||[Posts: Username link color](https://github.com/andrewcargill/superheros/issues/54) |
|||[Profile edit view - useState naming](https://github.com/andrewcargill/superheros/issues/37) |
|27.12.22|Styling|[Formatting: Wrap caption text on posts](https://github.com/andrewcargill/superheros/issues/70) |
|||[BUG: Investigate instability of site](https://github.com/andrewcargill/superheros/issues/72) |
|||[Formatting: Image centered on post/ profile edit forms](https://github.com/andrewcargill/superheros/issues/71) |
|||[Loading icon on posts view page](https://github.com/andrewcargill/superheros/issues/62) |


## Testing

<details><summary>
Front End Manual Testing
</summary>




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
||Signed in and Post owner|Post 'edit' loaded edit view|!BUG|
|||BUG: Sometimes takes you back to home||
||Signed in and Post owner|Clicked on username loads correct user profile|PASS|
|Comments|Signed in|If no comments - correct message shown|PASS|
||Signed in|If comments already posted - edit option displayed|PASS|
||Signed in|User can add a comment|PASS|
||Signed in|User can delete a comment|PASS|
||Signed in|User can edit a comment|PASS|
||Signed in|User can see all comments related to current viewed post|PASS|
||Signed in|Correct comments load for correct post|PASS|
||Signed in|Link to comment owners profile view|PASS|
|Post edit|Signed in|Caption loads in edit view|PASS|
||Signed in|Caption only updates on 'update'|PASS|
||Signed in|'Cancel' returns to post|PASS|
||Signed in|Image updates and saves|!BUG|
|||BUG: .JPG files work. Some PNG do not||
||Signed in|Responsive mobile > desktop|PASS|
|Add post|Signed in|Responsive mobile > desktop|PASS|
||Signed in|Correct username shown on post save|PASS|
||Signed in|Uploading image|!BUG|
|||BUG: .JPG files work. Some PNG do not||
||Signed in|Caption added and saved|PASS|
||Signed in|Default image if no image|PASS|
|Profile view|Signed in||PASS|
||Signed in |Responsive mobile > desktop|PASS|
||Signed in|Page loads as expected|PASS|
||Signed in and owner|edit options displayed|PASS|
||Signed in|User cannot delete post|PASS|
|Profile Edit|Signed in|Responsive mobile > desktop|PASS|
||Signed in and Profile owner|Profile 'edit' loaded edit view|!BUG|
|||BUG: Sometimes takes you back to home||
||Signed in and Profile owner|Bio text is shown|!BUG|
|||No text is shown||
||Signed in and Profile owner|Current image shown|!BUG|
||Signed in and Profile owner|User can update bio|PASS|
||Signed in and Profile owner|User can update image|PASS|
|||JPG files are fine. Some PNG cause crash||
||Signed in and Profile owner|Cancel returns to Profile view|PASS|
||Signed in and Profile owner|Update saves and returns to Profile view|PASS|
|Powers Edit|Signed in and owner|Edit dropdown visible via profile view|PASS|
|Powers Edit|Signed in and owner|Edit button loads powers edit view|PASS|
|Powers Edit|Signed in and owner|All powers can be updated|PASS|
||Signed in and owner |Responsive mobile > desktop|PASS|
||Signed in and owner|Cancel returns to Profile view|PASS|
||Signed in and owner|Update saves changes and returns to Profile view|PASS|
||Signed in and owner|Only numbers can be entered|PASS|
||Signed in and owner|Error message if values over 5|PASS|

</details>

<details><summary>
Backend Manual Testing
</summary>

|Area|Test|Result|
|---|---|----|
|Deployed site|Home shows message and no errors|PASS|
||/profiles/ shows all profiles|PASS|
||/profiles/:id shows single profile|PASS|
||/posts/ shows all posts|PASS|
||/posts/:id shows single post|PASS|
||/comments/shows all comments|PASS|
||/comments/:id shows single comment|PASS|
||/powers/shows all powers|PASS|
||/powers/:id shows single power|PASS|
||/admin/ allows superuser to login|PASS|
||/admin/ basic admin view and functions|PASS|

|Dev site|/posts/ show pagination|PASS|
||/comments/ show pagination|PASS|
||/powers/ show pagination|PASS|
||/profiles/ show pagination|PASS|
||/posts/ show text search by user__username|PASS|
||/admin/ shows login for Superuser and then loads admin panel|PASS|

</details>

## Bugs

## Deployment

## Future Development
- Users can compare the powers of two superheros (along the line of top trumps)
- City Major login - They can reward superheros with money and also add posts that link to specific Superheros
- Public login - They can rate superheros and send fan-mail (direct messages to Superheros) 


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