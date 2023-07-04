import React from 'react';
import './App.css';
import Card from './CardContainer/Card';
import NavBar from './NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FavoritesCard from './FavoriteContainer/FavoritesCard';
import DetailFoods from './DetailsFoods/DetailFoods';
import CreateFoodForm from './CreateForm/CreateFoodForm';
import UpdateFood from './UpdateFoodForm/UpdateFood';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <header>
        <h1 className='title'>Venezuelan Food</h1>
        </header>
        <Routes>
          <Route
            path="/"
            element={<Card />}
          />
          <Route
            path="/favorites"
            element={<FavoritesCard/>}
          />
          <Route path='/foods/update/:id' Component={UpdateFood}/>
          <Route path='/foods/create' Component={CreateFoodForm}/>
          <Route path='/foods/:id' Component={DetailFoods}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
