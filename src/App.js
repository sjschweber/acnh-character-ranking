import React, {useState} from "react";
import {data} from './data.js';
import logo from './logo.svg';
import Sorter from './Sorter.js'
import Card from './Card';

function App() {

  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  function onChange(e){
    e.preventDefault();
    setSort(e.target.value);
  }
  
  return (
    <div class="flex-col text-center" style={{textAlign: "-webkit-center"}}>
      <div class="font-sans text-3xl text-center text-yellow-600 w-full h-20 bg-yellow-100">
        ACNH Villager Search
      </div>
        <form>
          <select class="m-4 rounded" onChange={onChange}>
            <option>High to Low</option>
            <option>Low to High</option>
          </select>
          <input type="text" placeholder="search" class="rounded m-4"></input>
        </form>

        <Sorter data={data} sort={sort} filter={filter}/>


    </div>
  );
}

export default App;
