# Hero Chat
Hero Chat is a fantasy based website where 'want-to-be' superheros can socialize and share posts about their amazing world-saving adventures. This is the first build / release and lays the foundations of a world that will be expanded to include other user types such as 'City Majors' and 'Fans' that will be able to interact are reward Superheros.

The context is that the 'World Government Agency' has hidden a top-secret website deep in the internet who's location is only known by the worlds Superheros. 

Once inside the Comic-book styled environment makes for a fun place where these saviours of the world can hang-out and unwind. 

---

[Visit the website](https://superherosocial.herokuapp.com/)

[Visit the API](https://superheros.herokuapp.com/)


---



![Picture of website on various screen sizes](../superheros/src/assets/readme/readme_app.jpg)

---

## Contents
- [Project Goals](#project-goals)
- [Features](#features)
- [UX Design](#ux-design)
- [Development](#development)
- [Testing](#testing)
- [Bugs](#bugs)
- [Deployment](#deployment)
- [Future Development](#future-development)
- [Credits](#credits-and-acknowledgement)

---

## Project Goals
A react frontend website and django backend API. Linked together to provide full CRUD functionality. 

A site that can only be accessed via login and provides users with the features of creating posts, comments and profiles. 

### The factors in setting these goals:
- Project submission deadline (Production time of 2 weeks).
- Entry level knowledge and understanding of creating a React frontend and API backend.
- This project fell over the Christmas and New Year period so there was no access to Mentor support and limited access to tutor support. 

### Project goals:

|No.|Goal|Description|
|---|---|---|
|1|Log in/log out/Sign up | User can create an account and login or log out|
|2|Posts page styled with SuperHero theme | A responsive homepage with post CRUD functionality|
|3|Comments | Comments for each post with CRUD functionality|
|4|Profiles (Created on new account) | Profiles with full CRUD Functionality |
|5|Powers (Created on new account) | Powers for each User with full CRUD Functionality |
|6| Powers search and rating | Powers can be searched via a drop down menu |
|7| Site styled in strong comic-book styling | A design theme that runs consistently across the site |
|8| Front-end react website and custom built API| Hosted on Heroku |
|9| Deployment of final website to Heroku | Upon project completion | 
|10| Document all known bugs and issues | Ensure documentation is clear and honest |


---



## Features

### Landing page

![image of landing page](../superheros/src/assets/readme/readme_landingpage.jpg)
- Styled to give the feel of a government database login
- user can only login from this screen
- user of flashing button for added drama

### Login in
![screen grab of sign in and sign up](../superheros/src/assets/readme/readme_signinup.jpg)
- User enters the comic-styled world. 
- strong visual identity and comic book text language
- User has option to create an account

### Home screen
![screen grab of posts](../superheros/src/assets/readme/readme_posts.jpg)
- Lists all posts 
- Shake effect on Username
- Hero Search side panel (top panel on mobile view)
- Independent scrolling of the post and hero search components

### Post view
![screen grab of post view](../superheros/src/assets/readme/readme_post.jpg)
- Constant styling message
- Owner can choose to edit or delete post
- Comments have full CRUD functionality 
- Posts have full CRUD functionality

### Profile view
![screen grab of profile view](../superheros/src/assets/readme/readme_profile.jpg)
- Find out more about the superhero 
- Owner can edit the profile and powers

---


## UX Design
### Working within the limitations
Due to how the course has been structured I had two weeks to create a project that met the Code Institute pass requirements for this module. This was two weeks over the Christmas and New Year period. So I knew I needed to created something realistically achievable within these hard timeline limitations. 

I had not worked with React before and had limited knowledge of creating an Django API that linked to a React repository. Time would need to be allocated to ensure this basic function, of the backend talking to the frontend, worked well.

This formed the hard-lines around my thinking in the UX Design process. This needed to be a simple site with a strong design and basic functionality. A project that could be expanded on in the future so that the site could develop into a strong portfolio project. 

### Why SuperHeros?
I knew it was going to be a basic post, comments and profile react website, but I did not want to create a generic social media site. This theme enabled me to show a different design style from my pervious portfolio projects.

### Research
Looking at the style of classic superhero comics I saw that they had a lot of energy. Through the fonts and the language a strong and positive emotion is projected to the readers. 

### Mock ups
In Adobe XD I created some wire frames and explored the functionality of the website. I planned out the site in detail and also planned the CSS containers and fonts. This planning really saved me time during the main production stage of the project as I was able to focus on the functional coding and not be distracted by responsive design and styling problems/ challenges.

![wire frames](../superheros/src/assets/readme/readme_wireframe.jpg)

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
![wire frames](../superheros/src/assets/readme/readme_models.jpg)

Profiles and Powers are automatically created when a new user is added. The comments model links to the posts model. 

### Diagrams to implementation 
This is how the planned site evolved into the developed site.
Time was on my mind throughout the sites development, with design and functionality choices and sacrifices constantly being made, in an agile fashion, to ensure the project stayed on track and that a finished site was live by the deadline date.


|Planned|Finished Site|Comment|
|---|---|---|
|Home page has post view and searchable hero powers|Finished site has post view and searchable hero profiles|I switched to the hero search as it was more realistic with the remaining available development time|
|Profile page|Implemented as planned||
|Powers|This was implemented in the API as planned|Added to the profiles for ease of use|
|Creating a post|Implemented as planned||
|General styling|This was followed but evolved through development| I would have liked to have replicated the exact design in the mockups for all components|

---

## Development
### Reuse of components
- The navigation is used throughout the site along with the post, comment, profile and powers components. 
- Loading spinners are imported as a centralized component
- Two main CSS files are reused across the site.
    - App.module.css : Contains all fonts
    - Containers.module.css : Contains all content containers

### Front-End Libraries
The main library used in this site is React. 

Bootstrap 4 was used in combination with custom CSS to provide the styling and overall functionality of the site. 

### User stories and sprints
I implemented user stories for every step of the frontend development of this project. The main project [can be viewed here.](https://github.com/users/andrewcargill/projects/8)

For reference here are the original project goals:
<details><summary>
Original Project Goals (Set during planning stage of project)
</summary>

|Ref No.|Goal|Description|
|---|---|---|
|1|Log in/log out/Sign up | User can create an account and login or log out|
|2|Posts page styled with SuperHero theme | A responsive homepage with post CRUD functionality|
|3|Comments | Comments for each post with CRUD functionality|
|4|Profiles (Created on new account) | Profiles with full CRUD Functionality |
|5|Powers (Created on new account) | Powers for each User with full CRUD Functionality |
|6| Powers search and rating | Powers can be searched via a drop down menu |
|7| Site styled in strong comic-book styling | A design theme that runs consistently across the site |
|8| Front-end react website and custom built API| Hosted on Heroku |
|9| Deployment of final website to Heroku | Upon project completion | 
|10| Document all known bugs and issues | Ensure documentation is clear and honest |
 </details>

Within the dropdown I have detailed all sprints, linked to Userstories and Project Goals
 <details><summary>
Sprints
</summary>

|Date|Sprint|Project Goal Ref No:|Userstories|
|---|---|---|---|
|16.12.22|Site setup|8|[site set up](https://github.com/andrewcargill/superheros/issues/7) |
|||8|[Basic Deployment](https://github.com/andrewcargill/superheros/issues/8) |
|||7|[Basic styling of site](https://github.com/andrewcargill/superheros/issues/9) |
|||7|[Navigation routing](https://github.com/andrewcargill/superheros/issues/10) |
|16.12.22|API|8|[Connect API](https://github.com/andrewcargill/superheros/issues/12) |
|||1|[Create Sign up form](https://github.com/andrewcargill/superheros/issues/11) |
|||1|[User can sign up](https://github.com/andrewcargill/superheros/issues/13) |
|||7|[Basic styling of site](https://github.com/andrewcargill/superheros/issues/9) |
|17.12.22|User login|1|[User login](https://github.com/andrewcargill/superheros/issues/15) |
|||7|[Navigation](https://github.com/andrewcargill/superheros/issues/17) |
|||1|[User logout](https://github.com/andrewcargill/superheros/issues/16) |
|||7|[Styling of sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|17.12.22|Landing page|2|[Landing page](https://github.com/andrewcargill/superheros/issues/18) |
|||7|[Navigation](https://github.com/andrewcargill/superheros/issues/17) |
|||1|[User logout](https://github.com/andrewcargill/superheros/issues/16) |
|||7|[Sign up styling](https://github.com/andrewcargill/superheros/issues/14) |
|17.12.22|Create Post|2|[Create a post](https://github.com/andrewcargill/superheros/issues/22) |
|||1|[styling of sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|||1|[Flesh out signed out landing page](https://github.com/andrewcargill/superheros/issues/20) |
|18.12.22|Comments|3|[Create comment](https://github.com/andrewcargill/superheros/issues/27) |
|||3|[Skeleton Post Comments List](https://github.com/andrewcargill/superheros/issues/25) |
|||1|[Styling of sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|||1|[Flesh out sign out landing page](https://github.com/andrewcargill/superheros/issues/20) |
|19.12.22|API fix|8|[API crash on comments](https://github.com/andrewcargill/superheros/issues/31) |
|||3|[Create Comment](https://github.com/andrewcargill/superheros/issues/27) |
|||3|[Skeleton Post Comments list](https://github.com/andrewcargill/superheros/issues/25) |
|||1|[Styling of sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|19.12.22|Profiles|4|[view all and single profiles](https://github.com/andrewcargill/superheros/issues/36) |
|||6|[view single super power](https://github.com/andrewcargill/superheros/issues/34) |
|||6|[Owner can edit super power](https://github.com/andrewcargill/superheros/issues/35) |
|||1|[Styling of sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|19.12.22|Profiles and super powers|6|[Skeleton list view of profiles](https://github.com/andrewcargill/superheros/issues/39) |
|||6|[View single super power](https://github.com/andrewcargill/superheros/issues/34) |
|||6|[Owner can edit super powers](https://github.com/andrewcargill/superheros/issues/40) |
|||7|[Styling of sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|19.12.22|Navigation|7|[Navigation triggering](https://github.com/andrewcargill/superheros/issues/42) |
|||6|[List of super powers](https://github.com/andrewcargill/superheros/issues/35) |
|||1|[Styling of sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|||1|[Flesh out signed out landing page](https://github.com/andrewcargill/superheros/issues/20) |
|20.12.22|Landing page / create post|*See Ref*|[Flesh out landing page](https://github.com/andrewcargill/superheros/issues/20) |
|||2|[Flesh out create post view](https://github.com/andrewcargill/superheros/issues/48) |
|||3|[Owner can edit/ delete Comments](https://github.com/andrewcargill/superheros/issues/45) |
|||7|[Fleshing out sign up form](https://github.com/andrewcargill/superheros/issues/47) |
|||7|[Fleshing out post components](https://github.com/andrewcargill/superheros/issues/47) |
|20.12.22|General|7|[Navigation background](https://github.com/andrewcargill/superheros/issues/29) |
|||7|[Fleshing out of sign in form](https://github.com/andrewcargill/superheros/issues/47) |
|||7|[Fleshing out of post components](https://github.com/andrewcargill/superheros/issues/28) |
|||7|[Fleshing out of sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|21.12.22|Side container|7|[Sidebar - Skeleton](https://github.com/andrewcargill/superheros/issues/53) |
|||7|[Fleshing out sign up form](https://github.com/andrewcargill/superheros/issues/47) |
|||10|[BUG: Fix filters on API (Comments/posts)](https://github.com/andrewcargill/superheros/issues/32) |
|||10|[BUG: Updating post image crashing](https://github.com/andrewcargill/superheros/issues/26) |
|21.12.22|API fix|10|[BUG: Fix filters on API](https://github.com/andrewcargill/superheros/issues/32) |
|||10|[BUG: Pagination on post list](https://github.com/andrewcargill/superheros/issues/33) |
|||10|[BUG: Posts - Username link color](https://github.com/andrewcargill/superheros/issues/54) |
|||10|[BUG: Owner image not showing in powers list view](https://github.com/andrewcargill/superheros/issues/43) |
|22.12.22|Styling|7|[Fleshing out of sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|||5|[Profile view displays powers](https://github.com/andrewcargill/superheros/issues/51) |
|||10|[BUG: Profile edit - updating image causes crash](https://github.com/andrewcargill/superheros/issues/38) |
|||10|[BUG: Change naming on profile usestate](https://github.com/andrewcargill/superheros/issues/37) |
|22.12.22|Various|10|[BUG: Stlying of powers search for small devices](https://github.com/andrewcargill/superheros/issues/55) |
|||8|[BUG: API admin view 'powers'](https://github.com/andrewcargill/superheros/issues/30) |
|||10|[BUG: Post page - Comments not wrapping](https://github.com/andrewcargill/superheros/issues/52) |
|||10|[BUG: Create Post - Center input field/ image sizing](https://github.com/andrewcargill/superheros/issues/49) |
|22.12.22|Styling|7|[Fleshing out sign up form](https://github.com/andrewcargill/superheros/issues/14) |
|||5|[Profile view displays powers](https://github.com/andrewcargill/superheros/issues/51) |
|||10|[BUG: Profile edit form](https://github.com/andrewcargill/superheros/issues/38) |
|||10|[BUG: Profile edit useState](https://github.com/andrewcargill/superheros/issues/37) |
|23.12.22|Various|10|[BUG: Updating post image](https://github.com/andrewcargill/superheros/issues/26) |
|||5|[Powers - User can see top list of powers](https://github.com/andrewcargill/superheros/issues/50) |
|||10|[BUG: Username color on posts](https://github.com/andrewcargill/superheros/issues/54) |
|||10|[BUG: Post edit view image update crash](https://github.com/andrewcargill/superheros/issues/38) |
|23.12.22|Navigation|7|[Update navigation](https://github.com/andrewcargill/superheros/issues/57) |
|||1|[Sign in - help text](https://github.com/andrewcargill/superheros/issues/60) |
|||6|[Sidebar search user](https://github.com/andrewcargill/superheros/issues/61) |
|||4|[Fleshing out Profile page](https://github.com/andrewcargill/superheros/issues/56) |
|25.12.22|Various|5|[Fleshing out of powers edit view](https://github.com/andrewcargill/superheros/issues/64) |
|||2|[Flesh out single post view](https://github.com/andrewcargill/superheros/issues/59) |
|||10|[BUGS: Post - username link color](https://github.com/andrewcargill/superheros/issues/54) |
|||10|[BUG: useState profile edit form](https://github.com/andrewcargill/superheros/issues/37) |
|26.12.22|Hero Search|6|[Fleshing out hero search](https://github.com/andrewcargill/superheros/issues/68) |
|||7|[Styling: Post Page](https://github.com/andrewcargill/superheros/issues/52) |
|||10|[BUG: posts username link color](https://github.com/andrewcargill/superheros/issues/54) |
|26.12.22|Styling|7|[Edit post buttons](https://github.com/andrewcargill/superheros/issues/66) |
|||7|[Buttons on profile update view](https://github.com/andrewcargill/superheros/issues/65) |
|||10|[BUG: Create post - Center input field](https://github.com/andrewcargill/superheros/issues/49) |
|||10|[BUG: Posts user name link color](https://github.com/andrewcargill/superheros/issues/54) |
|26.12.22|Various|10|[Updating post image not working](https://github.com/andrewcargill/superheros/issues/26) |
|||7|[Posts: Username link color](https://github.com/andrewcargill/superheros/issues/54) |
|||4|[Profile edit view - useState naming](https://github.com/andrewcargill/superheros/issues/37) |
|27.12.22|Styling|7|[Formatting: Wrap caption text on posts](https://github.com/andrewcargill/superheros/issues/70) |
|||10|[BUG: Investigate instability of site](https://github.com/andrewcargill/superheros/issues/72) |
|||7|[Formatting: Image centered on post/ profile edit forms](https://github.com/andrewcargill/superheros/issues/71) |
|||7|[Loading icon on posts view page](https://github.com/andrewcargill/superheros/issues/62) |

</details>

---

## Testing
Extensive manual testing has been carried out on both the Frontend and Backend elements of this project. Any bugs that were found have been document in the results and are details in the [Bugs section](#bugs) of this documentation.

All Python, Javascript and CSS code has passed code checkers. The Lighthouse scored well - but did highlight some problems with, what seems like, the use of Bootstrap within the site. 

![wire frames](../superheros/src/assets/readme/readme_lighthouse.jpg)

<details><summary>Front End Manual Testing</summary>

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
|Sign up|Not signed in|'sign in' link > sign in view|PASS|
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
||Signed in and Post owner|Post 'edit' loaded edit view|[!BUG](#post-edit-bug)|
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
||Signed in|Image updates and saves|[!BUG](#image-upload-bug)|
|||BUG: .JPG files work. Some PNG do not||
||Signed in|Responsive mobile > desktop|PASS|
|Add post|Signed in|Responsive mobile > desktop|PASS|
||Signed in|Correct username shown on post save|PASS|
||Signed in|Uploading image|[!BUG](#image-upload-bug)|
|||BUG: .JPG files work. Some PNG do not||
||Signed in|Caption added and saved|PASS|
||Signed in|Default image if no image|PASS|
|Profile view|Signed in||PASS|
||Signed in |Responsive mobile > desktop|PASS|
||Signed in|Page loads as expected|PASS|
||Signed in and owner|edit options displayed|PASS|
||Signed in|User cannot delete post|PASS|
|Profile Edit|Signed in|Responsive mobile > desktop|PASS|
||Signed in and Profile owner|Profile 'edit' loaded edit view|[!BUG](#profile-edit-bug)|
|||BUG: Sometimes takes you back to home||
||Signed in and Profile owner|Bio text is shown|[!BUG](#profile-edit-bug)|
|||No text is shown||
||Signed in and Profile owner|Current image shown|[!BUG](#profile-edit-bug)|
||Signed in and Profile owner|User can update bio|PASS|
||Signed in and Profile owner|User can update image|PASS|
|||JPG files are fine. Some PNG cause crash|[!BUG](#image-upload-bug)|
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

---

## Challenges
- I have never created a project under, what felt like, such a time constant. To complete all the React tutorials and then head into this project with the clock ticking was a big thing to manage. I knew that this was only going to be possible if my time was planned well and if, in my mind, I was able to settle for 80% being fine. This was hard for me as I am naturally driven to do my best and always push to try and achieve great results, but for this project it was about something different. The ability to read the requirements and make a MVP that would pass. 
- Planning the styling of the project during the UX design stage helped me a lot. As mentioned earlier, I planned the CSS and HTML code for styling the site during this stage so that the styling during the actual production of the site was easier and required less decision making.
- At first I created the API without filters and then when I came to building the comments component and trying to link it to the posts, I realized that it was the API that would be doing the filtering (I originally thought that this could be achieved on the front end by just adding some Javascript, but then realized that this was a bad idea. If this was a site with thousands of users it would not be efficient and would make the site extremely slow). 

## Bugs

- #### POST EDIT BUG
    - Sometimes the post edit button takes you back to the home page. I think this could be something connected to the user tokens.
- #### PROFILE EDIT BUG
    - The edit window shows the default image instead of existing image. I think this is a fault in the code and with a little more time I would compare the 'edit post' code against the 'profile edit' code and see what track down the problem. 
    - The edit view does not load the existing 'bio' text. Again, this could be solved rather easily with a little more time spent on the project. 
    - Sometimes when going to edit the profile you are returned to Post view. This is a bug I have not been able to track down at the time of submission. 
- #### USER LOGGED OUT AFTER A SHORT TIME
    - This is connected to the user tokens. I believe they are running out and not getting renewed.

- #### IMAGE UPLOAD BUG
    - I spent a lot of time researching this bug. It appears that either Cloudinary or the API prefers .jpg files over .png! After much testing it appears that .jpg files are stable and I cannot get any crashing while using this files format. 


---

## Deployment
This site is deployed via two Heroku apps. One for the API and the other for the front end React site. Getting the two connected can take some time, but below are some guidelines to get you started. 

Should you require any help please email me: andycargill01@aol.com

### API
You will need a Cloudinary account and Heroku account
 - Create a new app in Heroku
 - Within 'Config Var': 
    - Add the link to Cloudinary
    - Add the address to your Heroku live app 
    - Deploy from the github repository

### Front End
You will need a Heroku account 
- Create a new app in Heroku
- Within 'Config Var': 
    - Link to the API
    - Link to ..... 


----

## Future Development
- Users can compare the powers of two superheros (along the line of top trumps)
- City Major login - They can reward superheros with money and also add posts that link to specific Superheros
- General Public login - They can rate superheros and send fan-mail (direct messages to Superheros) 
---

## Credits and acknowledgement 

This project was created by myself with no assistance from others. I took very little, if any, tutor or mentor support for this project. Images used on the website are from googles search engine and below are the additional code used in the project.

- Glowing buttons -  [w3docs.com](https://www.w3docs.com/snippets/css/how-to-create-flashing-glowing-button-using-animation-in-css3.html)

- Scrolling of components within containers - [geeksforgeeks.org](https://www.geeksforgeeks.org/how-to-fixed-one-column-and-scrollable-other-column-or-columns-in-bootstrap)

- Blur effect used on navigation component - [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)

- Shake effect used on Hero usernames on Posts view - [css.tricks](https://css-tricks.com/snippets/css/shake-css-keyframe-animation/)
