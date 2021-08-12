import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from './store/restaurantSlice';
import TuneIcon from '@material-ui/icons/Tune';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import Card from './Card';

import "./assets/css/style.css"

function App() {

  const RestaurantList = useSelector(state => state.restaurants.list)
  console.log()

  
  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(fetchData({"latitude":13.0358481, "longitude":80.244455 }))
  }, [])

  useEffect(() => {
    console.log(RestaurantList);
  }, [RestaurantList])

  return (
    <div className="body">
      {/* NavBar */}
      <div className="navbar">
          <div className="options option-1">
            {RestaurantList.length} Restaurants
          </div>

          <div className="options option-2">
            Relevance <span className="downArr"><KeyboardArrowDownIcon /></span>
          </div>

          <div className="options option-3">
            Filter <span className="sliderArr"><TuneIcon rotate={true}/></span>
          </div>
          
      </div>

      {/* List */}
      {RestaurantList.map((restaurant, i) => <Card key={`${i}`} props={restaurant} /> )}
      
    </div>
  );
}

export default App;
