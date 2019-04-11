# Spotify-exercise 

## A Frontend developer exercise

This exercise is made to test your abilities to solve a typical frontend issue using JS with ES5.

### Context

Basically, you'll need to connect to a backend API to be able to do album searches,
show the current comments and allow the user to put a comment on a specific album. 
The application should be fully responsive.

This is a base frontend project in which we added the ground for starting developing the App.

### Coding
#### Styles
Styles are defined using SASS, the extension of CSS to write reusable and better structured files. To add styles find the appropriate file under `src/sass/` or create partials (`_partial-name.scss`) accordingly. Remember when adding partial files you will need to add them to the `src/main.scss` file.

#### JS
Scripts are written following the module pattern. 

#### Bundling
In order to compile the `SCSS` files into css, to bundle all js files, and minify them we use the automating tool `Gulp`. Remember to add your new JS files into the bundling sources (`paths > script > src` in `gulpfile.js`).


### How to run

1. Run `npm install` to install project dependencies with the node package manager.
2. Run `npm install -g gulp` to allow the automation tool to build what's needed.
3. Run `npm start` to run the front-end.

### Endpoints
The backend exposes the following endpoints:

- GET /search?q=:searchQuery      -> Returns a filtered list
- GET /album/:albumId             -> Returns album details
- GET /comments/:albumId          -> Returns album comments
- POST /comments                  -> Create a new comment
    - Body: { albumId: String, email: String, text: String }

https://developer.spotify.com/dashboard/

- Create an App and follow the steps
- After creating the App, a `client_id` and a `client_secret` will be provided

Once you have the keys, create `.env` file in the `backend/` directory with the following env variables:

```
SPOTIFY_CLIENT_ID=<client_id>
SPOTIFY_CLIENT_SECRET=<client_secret>
```

### Designs

Ask for permissions of the designs, [Zeplin](https://zeplin.io/) is required.
There is a [Preview of the Zeplin Design](https://zpl.io/b639y3g)