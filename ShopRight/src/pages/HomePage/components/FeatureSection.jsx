import { useEffect, useState } from "react"
import FeaturedCard from "./FeaturedCard"

const FeatureSection = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=6')
            .then(res=>res.json())
            .then(json=>{
                setData(json)
            })
    }, [])

    return (
        <section className="container min-h-[200px] py-10">

            <h2 className="text-center text-5xl font-bold my-10">Featured Product</h2>

            {/* <Slider {...settings}> */}
            <div className="grid grid-cols-3 gap-8 ">

                {
                    data.map(item=>{
                        return <FeaturedCard key={item.id} image={item.image} title={item.title} code={"Y523201"} price={item.price} />
                    })
                }
                
        
                
            </div>
            {/* </Slider> */}

        </section>
    )
}

export default FeatureSection