/* 
--------------
AUTH setup
--------------
1. create firebase project
2. enable web
3. enable sign in method
4. Install firebase
5. get firebase config in my firebase.config.js file
6. export app from firebase.config.js
*/

/* 
-----------------
1. create UserContext (AUth Context): User --> component name, userContext provides AuthContext 
2. create AuthContext
3. set AuthContext.Provider
4. Make sure set the children
5. export AuthContext to be used inside useContext hook.
6. get form data
7. getAuth in the UserContext
8. 
-----------------
*/

/* 
-------------------
Firebase hosting
-------------------
//one time for each time//
1. npm install -g firebase-tools
2. firebase login
*/

/* 
//for each project one time
3. firebase init
Make sure: for public directory: we select: build
single page application: yes

*/

/* 
//for every deploy
4. npm run build
5. firebase deploy
*/