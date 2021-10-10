import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Container from '@mui/material/Container';
import Home from './pages/home/Home';
import Trending from './pages/trending/Trending'
import Movies from './pages/movies/Movies'
import Series from './pages/series/Series'
import Search from './pages/search/Search';
import './App.css'
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <div className="App">
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/trending' component={Trending} />
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/search' component={Search} />
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
