import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../../data.json"
const CardDetail = (props) => {
    const { id } = useParams()
    const [content, setContent] = useState(data[id])


    return (
        <div className='container mx-auto grid grid-cols-2 gap-5 mt-10'>
            <div className='flex-1'>
                <img src={content.flag} className='w-full' alt="" />
            </div>
            <div className='flex-2'>
                <h2 className='font-bold my-4'>{content.name}</h2>

                <div className='column-2'>
                    <p> <span className='font-bold'>Nativename</span>{content.nativeName}</p>

                    <p> <span className='font-bold'>Population</span> {content.population}</p>

                    <p><span className='font-bold'>Region</span> {content.region}</p>

                    <p><span className='font-bold'>Subregion</span> {content.subregion}</p>

                    <p><span className='font-bold'>Capital</span> {content.capital}</p>

                    <p><span className='font-bold'>Top Level Domain</span> {content.topLevelDomain}</p>

                    {
                        content.currencies && <p>
                            <span className='font-bold mr-1'>Currencies</span>
                            {

                                content.currencies.map((currency, index) => {
                                    // { console.log(currency.name) }
                                    return <span key={index}>{currency.name}</span>
                                })
                            }
                        </p>
                    }

                    <p>
                        <span className="font-bold mr-1">Languages</span>
                        {
                            content.languages.map((language, index) => {
                                return <span key={index}>{language.name}</span>
                            })
                        }
                    </p>
                    
                    {
                        content.borders && <p>
                            <span className='font-bold mr-1'>Border</span>
                            {

                                content.borders.map((border, index) => {
                                    // { console.log(currency.name) }
                                    return <span key={index}>
                                        <button className='mx-1'>{border}</button>
                                    </span>
                                })
                            }
                        </p>
                    }


                </div>
            </div>
        </div>
    )
}

export default CardDetail