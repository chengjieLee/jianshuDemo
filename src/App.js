import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import { Globalstyle } from './style';
import { Iconfont } from './statics/iconfont/iconfont';
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
class App extends Component {
  render() {
    return (
      <div>
        <Iconfont />
        <Globalstyle />
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />           
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
