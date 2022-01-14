import Fuse from 'fuse.js';
import {useEffect, useState} from 'react';
import React from 'react'
import characters from './characters.json';
const App = () => {
  // const [characters,setList]=useState([])
  const [query, updateQuery] = useState('');
  console.log(characters);

  // const getRick=async()=>{
  //     const data = await fetch('https://rickandmortyapi.com/api/character')
  //     const results = await data.json()
  //     console.log(results);
  //     setList(results.results)
      
  //     console.log(characters);
   
  // }
  // useEffect(() =>{
  //     getRick();
  // },[])
  console.log(characters);

  
  const fuse = new Fuse(characters, {
    keys: [
      'name','city'
      
    ],
    includeScore: true
  });

  const results = fuse.search(query);
  const characterResults = query ? results.map(character => character.item) : characters;

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }
  return (
    <>
      
      <aside>
          <form className="search">
            <div className="a">
            <label>Search</label>
            <input type="text" value={query} onChange={onSearch} />
            </div>
          </form>
        </aside>



                  
        <label for="cars"> Choose a car</label>
      <select name="cars" id="cars">
    <optgroup label="Swedish Cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
    </optgroup>
    
  </select>
  <br></br>
  {/* <input type="submit" value="Submit"></input> */}




        {/* <ul className="characters">
          {characterResults.map(character => {
            const age=Math.floor(Math.random() * 101);

            const { name, email,phone } = character;
            const city=character.address.city;
            const street=character.address.street;
            const suite=character.address.suite;
            const zipcode=character.address.zipcode;
            const website=character.website;
            return (
              <div key={name} className="character">
                
               <div class="k">
                <div className="profile">
                  <div className="profile-img">
                    <img className="avtar" src="https://www.atmegame.com/blog/images/users/avtar/avtar.png" ></img>
                  </div>
                 <div className="details">
                 <h1 className="card-names">
                    <span className="card-fullname">{name}</span>
                    <span className="age">|{age} | {email} | | {phone}</span>
                    <span className="city">{website}</span>
                 </h1>
                </div>
                </div>
                </div>
                
              </div>
            )
          })}
        </ul>
         */}
       

        
    </>
  )
}

export default App
