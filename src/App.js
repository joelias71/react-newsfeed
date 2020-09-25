import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { SidebarData } from './components/SidebarData'
import NewsContainer from './container/NewsContainer'
import Page from './components/Page'
import Footer from './components/Footer'

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
          <Route exact path='/404' key='-1'>
            <NewsContainer title='Error 404' />
          </Route>
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
