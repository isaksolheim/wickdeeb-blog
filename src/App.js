import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Articles from './components/Articles';
import Article from './components/Article';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Category from './components/Category';
import ScrollToTop from './components/ScrollToTop';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
          "data": {
            "posts": 
              [
                {
                  "id": 1,
                  "featured": true, 
                  "featuredText": "Once you've created your React app, its time to share it with the world. To do that, you need to host it somewhere. Luckily, hosting on Firebase is both easy and free. The first thing you have to do is...",
                  "title": "Hosting a React app for free using Firebase", 
                  "image": "https://cdn-images-1.medium.com/max/800/1*ytMIcp6uu6UIZpApG1LFYg.png", 
                  "content": "# Hosting React app for free using Firebase\nOnce you&#39;ve created your React app, its time to share it with the world. To do that, you need to host it somewhere. Luckily, hosting on Firebase is both easy and free. The first thing you have to do is open a CLI run the following command.\n### Installing and setting up firebase-tools\n```\n$ npm install -g firebase-tools\n```\nThis is going to install firebase-tools globally to your node modules. Once that is installed, you need to set it up by logging in to your Firebase account.\n```\n$ firebase login\n```\nA window in your browser is going to open. Login normaly.\n### Building and deploying the app\nOnce firebase-tools is installed and ready, its time to deploy the app. To get started, you need to create a production build of your app.\n```\n$ npm run build\n```\nThis will create an optimized version of your project in the folder `/build`, which is what we are going to be hosting. \nNext you need to initialize firebase for this project. To do this, run the following command: \n```\n$ firebase init\n```\nNext, chose hosting and select the project you recently created. \n```\n$ Which Firebase CLI features do you want to setup for\nthis folder? Press Space to select features, then Enter\nto confirm your choices.\n ◯ Database: Deploy Firebase Realtime Database Rules\n ◯ Firestore: Deploy rules and create indexes for\nFirestore\n ◯ Functions: Configure and deploy Cloud Functions\n❯◯ Hosting: Configure and deploy Firebase Hosting sites\n ◯ Storage: Deploy Cloud Storage security rules\n```\nThe public directory should be `build`, it should be a single pages app and it should not overwrite the index.html file. \n```\n? What do you want to use as your public directory? build\n? Configure as a single-page app\n(rewrite all urls to /index.html)? Yes\n? File public/index.html already exists. Overwrite? No\n```\nOnce the initialization is complete, all you have to do is run:\n```\n$ firebase deploy\n```\nYour application is now hosted using Firebase.",
                  "tags": ['React', 'Firebase']
                }
              ]
            }
          }
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <ScrollToTop>
            <Navbar data={this.state.data} />
            <div className="content">
              <Switch>
                <Route exact path="/" render={(props) => (
                  <Landing {...props} data={this.state.data} />
                )} />
                <Route exact path="/articles" render={(props) => (
                  <Articles {...props} data={this.state.data} />
                )} />
                <Route exact path="/:slug" render={(props) => (
                  <Article {...props} data={this.state.data} />
                )} />
                <Route exact path="/category/:category" render={(props) => (
                  <Category {...props} data={this.state.data} />
                )} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
            <Footer data={this.state.data} />
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

export default App;
