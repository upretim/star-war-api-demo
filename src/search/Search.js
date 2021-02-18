import React, { useState, useEffect } from 'react';
import {getData} from '../server/Server';
import PlanetCard from './../card/Card';

export default function Search() {
  const [planetdata, setPlanetdata] = useState([]);
  const [searchString, setSearchString] = useState([]);


  useEffect(() => {
    let mounted = true;
    let url = "https://swapi.dev/api/planets/?search="+searchString;
    if(searchString.length>0){
      getData(url)
      .then(planetList => {
        if(mounted) {
          setPlanetdata(planetList.results);
        }
      })
    }
    else{
      setPlanetdata([]);
    }
    return () => mounted = false;
  }, [searchString]);

   const getPlanetList=()=>{
    let items = planetdata.map((planet) =>
      <PlanetCard  data= {planet}/>
);
    if(planetdata.length>0)
     return (items);
    else
    return null;
   }


  return(<>
    <h5>Search for planets</h5>
    <div><input type="text" onChange={(event)=>{
      setSearchString(event.target.value.trim())
    }} placeholder="Please type in..."/> </div>
  <hr/>
      <div className="cards">
        {getPlanetList()}
      </div>
    </>
  );
}