import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

import SubMenu from './SubMenu';


const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const res = fetch("./data.json")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log("Error!"))
    }, [])
    return (
        <>
            
            <SubMenu />
            <div className="container mx-auto p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    data.map((card, index) => {
                        return (
                            <Link key={index} to={`${index}`}>
                                <Card name={card.name} population={card.population} region={card.region} capital={card.capital} image={card.flag} />
                            </Link>)
                    })
                }
            </div>
        </>
    )
}

export default Home