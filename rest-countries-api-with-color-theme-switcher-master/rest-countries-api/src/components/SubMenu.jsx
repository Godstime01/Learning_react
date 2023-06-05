import React, { useState, useContext } from 'react';
import { SearchContext } from '../App';
import data from "../../data.json"



const SubMenu = () => {

  const [search, setSearch] = useState("");
  // const [ filteredSearch, setFilteredSearch ] = useContext(SearchContext);


  // setFilteredSearch(data.filter((item)=>{
  //   return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search.toLowerCase())
  // }))

  // console.log(words)

  return (
    <>
      <div className='container mx-auto p-3 flex flex-col justify-between md:flex-row gap-[2rem]'>
        <input type="text" className='p-3 rounded w-full block md:inline-block bg-white dark:bg-blue-200' placeholder='Search for a country...' value={search} onChange={(e) => setSearch(e.target.value)} />
        
        <select name="" id="" className='w-[200px] block md:inline-block p-3 rounded bg-white dark:bg-blue-200 shadow-sm text-blue-200 dark:text-white' placeholder='Filter By region'>
          <option value="" >Filter By region</option>
        </select>
      </div>
    </>
  )
}

export default SubMenu