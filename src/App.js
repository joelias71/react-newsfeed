import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { SidebarData } from './components/SidebarData'
import NewsContainer from './container/NewsContainer'
import Page from './components/Page'
import Footer from './components/Footer'
import FourOhFour from './components/FourOhFour'

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          {SidebarData.map((item,index) => {
            return (
              <Route exact path={item.path} key={index}>
                <NewsContainer title={item.title} Component={Page} id={item.value} />
              </Route>
            )
          })}
          <Route path='/search/:input' key='search'>
            <NewsContainer Component={Page} />
          </Route>
          <Route exact path='/404' key='fourOhFour'>
            <FourOhFour />
          </Route>
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
