import Slider from "react-slick";


const Banner = (props) => {

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear"
  };


  return (
    <section className='bg-[#F2F0FF] py-10'>
      <div className="container">
        <Slider {...settings}>

          {/* slide 1 */}

          <div className='!grid grid-cols-2 items-center'>
            <div className="p-4">
              <p className='text-pink text-sm font-bold'>Best Furniture For Your Castle....</p>
              <h1 className="text-6xl font-bold">New Furniture Collection Trends in 2020</h1>

              <button className="button__style mt-5">Get started</button>
            </div>

            <div>
              <img src="/promo.png" className='h-auto max-w-full' alt="promotional product chair" />
            </div>
          </div>

          {/* slide two */}
          <div className='!grid grid-cols-2 items-center'>
            <div className="p-4">
              <p className='text-pink text-sm font-bold'>Best Furniture For Your Castle....</p>
              <h1 className="text-6xl font-bold">New and Fantastic product for your family</h1>
            </div>

            <div>
              <img src="/promo.png" className='h-auto max-w-full' alt="promotional product chair" />
            </div>
          </div>

        </Slider>
      </div>
    </section>
  )
}

export default Banner


/*<div className='container grid grid-cols-2 items-center'>
        <div className="p-4">
          <p className='text-pink text-sm font-bold'>Best Furniture For Your Castle....</p>
          <h1 className="text-6xl font-bold">New Furniture Collection Trends in 2020</h1>
        </div>

        <div>
          <img src="/promo.png" className='h-auto max-w-full' alt="promotional product chair" />
        </div>
      </div> */