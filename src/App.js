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
      data: null,
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://wickdeeb.firebaseio.com/.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          data: data,
          isLoaded: true,
        })
      })
  }

  render() {
    if (!this.state.isLoaded) {
      return(
        <div className="loading-container">
          <div className="title">WICKDEEB</div>
          <div className="loader"></div>
        </div>
      );
    } else {
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
}

export default App;
