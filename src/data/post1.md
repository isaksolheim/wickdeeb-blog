# Hosting React app for free using Firebase

Once you've created your React app, its time to share it with the world. To do that, you need to host is somewhere. Luckily, hosting on Firebase is both easy and free. The first thing you have to do is open a CLI run the following command.
### Installing and setting up firebase-tools
```
$ npm install -g firebase-tools
```
This is going to install firebase-tools gloablly to your node modules. Once that is installed, you need to set it up by logging in to your Firebase account.
```
$ firebase login
```
A window in your browser is going to open. Login normaly.

### Building and deploying the app
Once firebase-tools is installed and ready, its time to deploy the app. To get started, you need to create a production build of your app.
```
$ npm run build
```
This will create an optimized version of your project in the folder `/build`, which is what we are going to be hosting. 
Next you need to initialize firebase for this project. To do this, run the following command: 
```
$ firebase init
```
Next, chose hosting and select the project you recently created. 
```
$ Which Firebase CLI features do you want to setup for this folder? Press Space to select features, then Enter to confirm your choices.
 ◯ Database: Deploy Firebase Realtime Database Rules
 ◯ Firestore: Deploy rules and create indexes for Firestore
 ◯ Functions: Configure and deploy Cloud Functions
❯◯ Hosting: Configure and deploy Firebase Hosting sites
 ◯ Storage: Deploy Cloud Storage security rules
```
The public directory should be `build`, it should be a single pages app and it should not overwrite the index.html file. 
```
? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? File public/index.html already exists. Overwrite? No
```
Once the initialization is complete, all you have to do is run:
```
$ firebase deploy
```
Your application is now hosted using Firebase.