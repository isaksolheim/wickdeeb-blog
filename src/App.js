import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Articles from './components/Articles';
import Article from './components/Article';
import About from './components/About';
import Navbar from './components/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {"data":{"posts":[{"id":1,"title":"Centering divs in CSS","image":"https://arjunphp.com/assets/uploads/2014/01/centered.jpg","content":"## Lorem ipsum dolor sit amet,\n\u003eIpsum consequat nisl vel pretium lectus. Neque volutpat ac tincidunt vitae semper quis. Tellus at urna condimentum mattis pellentesque id nibh. Blandit aliquam etiam erat velit scelerisque. Urna nunc id cursus metus aliquam eleifend mi. Velit euismod in pellentesque massa placerat duis ultricies. Eget lorem dolor sed viverra. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Platea dictumst quisque sagittis purus. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.\n\nRisus feugiat in ante metus dictum at tempor commodo ullamcorper. Maecenas pharetra convallis posuere morbi leo urna molestie at. Sit amet aliquam id diam maecenas ultricies mi eget. Felis imperdiet proin fermentum leo vel orci porta. Mauris commodo quis imperdiet massa tincidunt. Sed augue lacus viverra vitae congue eu. Justo nec ultrices dui sapien eget. Orci dapibus ultrices in iaculis nunc sed. Volutpat est velit egestas dui id ornare arcu. Leo integer malesuada nunc vel risus. Pulvinar neque laoreet suspendisse interdum consectetur libero. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Tellus elementum sagittis vitae et leo duis ut diam quam. Pellentesque adipiscing commodo elit at imperdiet dui.\n\nFelis eget velit aliquet sagittis id consectetur purus. Purus sit amet luctus venenatis lectus magna fringilla. Commodo ullamcorper a lacus vestibulum sed arcu non. Fermentum dui faucibus in ornare quam viverra orci sagittis. Mattis aliquam faucibus purus in massa tempor nec. Id neque aliquam vestibulum morbi. Urna porttitor rhoncus dolor purus. Morbi tincidunt augue interdum velit euismod in. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Molestie nunc non blandit massa enim. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Sed adipiscing diam donec adipiscing. Nec feugiat nisl pretium fusce id velit.\n\nBlandit libero volutpat sed cras ornare arcu dui. Id nibh tortor id aliquet lectus proin nibh. Eget aliquet nibh praesent tristique magna sit. Volutpat blandit aliquam etiam erat. Eu non diam phasellus vestibulum lorem sed. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Scelerisque felis imperdiet proin fermentum leo. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Eget est lorem ipsum dolor sit. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Eu mi bibendum neque egestas congue. Tortor at risus viverra adipiscing at in tellus integer. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Duis ut diam quam nulla porttitor massa id neque aliquam. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. At risus viverra adipiscing at in tellus integer feugiat. Vitae purus faucibus ornare suspendisse sed.","tags":["React","Javascript"]},{"id":2,"title":"Image processing in Python","image":"https://pbs.twimg.com/profile_images/510760404411109380/wDGjWJxk.png","content":"## Lorem ipsum dolor sit amet,\n\u003eIpsum consequat nisl vel pretium lectus. Neque volutpat ac tincidunt vitae semper quis. Tellus at urna condimentum mattis pellentesque id nibh. Blandit aliquam etiam erat velit scelerisque. Urna nunc id cursus metus aliquam eleifend mi. Velit euismod in pellentesque massa placerat duis ultricies. Eget lorem dolor sed viverra. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Platea dictumst quisque sagittis purus. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.\n\nRisus feugiat in ante metus dictum at tempor commodo ullamcorper. Maecenas pharetra convallis posuere morbi leo urna molestie at. Sit amet aliquam id diam maecenas ultricies mi eget. Felis imperdiet proin fermentum leo vel orci porta. Mauris commodo quis imperdiet massa tincidunt. Sed augue lacus viverra vitae congue eu. Justo nec ultrices dui sapien eget. Orci dapibus ultrices in iaculis nunc sed. Volutpat est velit egestas dui id ornare arcu. Leo integer malesuada nunc vel risus. Pulvinar neque laoreet suspendisse interdum consectetur libero. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Tellus elementum sagittis vitae et leo duis ut diam quam. Pellentesque adipiscing commodo elit at imperdiet dui.\n\nFelis eget velit aliquet sagittis id consectetur purus. Purus sit amet luctus venenatis lectus magna fringilla. Commodo ullamcorper a lacus vestibulum sed arcu non. Fermentum dui faucibus in ornare quam viverra orci sagittis. Mattis aliquam faucibus purus in massa tempor nec. Id neque aliquam vestibulum morbi. Urna porttitor rhoncus dolor purus. Morbi tincidunt augue interdum velit euismod in. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Molestie nunc non blandit massa enim. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Sed adipiscing diam donec adipiscing. Nec feugiat nisl pretium fusce id velit.\n\nBlandit libero volutpat sed cras ornare arcu dui. Id nibh tortor id aliquet lectus proin nibh. Eget aliquet nibh praesent tristique magna sit. Volutpat blandit aliquam etiam erat. Eu non diam phasellus vestibulum lorem sed. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Scelerisque felis imperdiet proin fermentum leo. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Eget est lorem ipsum dolor sit. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Eu mi bibendum neque egestas congue. Tortor at risus viverra adipiscing at in tellus integer. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Duis ut diam quam nulla porttitor massa id neque aliquam. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. At risus viverra adipiscing at in tellus integer feugiat. Vitae purus faucibus ornare suspendisse sed.","tags":["Python"]}]}},
    }
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
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
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
