# Netflix gpt
- Create React app
- Configured Tailwind Css
- Login / Signup (just few field more in same login using a toggling onClick function)
- Browse
- Header
- App Routing
- Form Validation
- useRef Hook
- setup Firebase
- Deploying our frontend to production
- create SignUp User account using Firebase
- Implement Sign In user Api
- Created redux store using userSlice
- Implemented Sign Out
- Used Update Profile 
- BugFix: Using Update Profile from firebase we updated Signup user diplayName and photoURL (and storing updated credentials in the updatedUser and use it to dispatch my userCredentials again)

Bug Fix: if the user is not logged in Redirect "/browse" to Login Page and vice-versa
- Unsubscribed to the onAuthStateChanged callback (important for hygeine as after unmounting of Header each time, we should unsubscribe else we'll get multiple onAuth... callbacks)
- Add hardcoded values to constants file
- Register TMDB API & create an app and get access token
- Built a backend to fetch data from TMDB endpoints as TMDB is blocked by some ISPs(eg. JIO)
- Deployed backend on Render
- Restructured folders into seperate frontend-backend architecture for modularity
- connected my frontend to the backend by updating fetching links in my constants file
-Testing by getting data from TMDB through backend i.e. Now Playing Movies list API
---------
# Features
-----------
- Login/Sign Up
    - Sign In/Sign Up Form
    - redirect to Browse Page
- Browse (after authentication)
    - Header
    - Main Movie Container
        - Trailer in Background
        - Title & Description
    -Secondary Movie Container
        - Movie List * N (Vertically Scrollable)
            -MovieCards * N (Horizontally Scrollable)

- NetflixGPT
    - Search Bar -> Gives Movie Suggestions

