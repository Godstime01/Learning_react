import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-blue-600 mt-4">

        <div className="container grid grid-cols-[2fr_1fr_1fr_1fr] gap-2 py-10">

            <div className='grid gap-2'> 
                <a href="">
                    <span className='text-2xl font-bold'>Logo</span>
                </a>

                <form action="" className='flex flex-wrap items-center'>
                    <label htmlFor="">
                        <input type="text" placeholder='Enter your email' className='p-2 shadow-md' />
                    </label>
                    <button className="button__style">Sign up</button>

                    {/*  */}
                    <p className='text-[#8A8FB9]'>
                        <span className='block'>Contact Info</span>
                        <span>17 Princess Road, London, Greater London NW1 8JR, UK</span>
                    </p>
                </form>
            </div>
            <div> 
                <h3 className='font-bold text-xl mb-5'>Catagories</h3>

                <ul className='grid gap-2'>
                    <li><a href="" className='footer__link'>Laptops & Computers</a></li>
                    <li><a href="" className='footer__link'>Cameras & Photography</a></li>
                    <li><a href="" className='footer__link'>Smart Phones & Tablets</a></li>
                    <li><a href="" className='footer__link'>Video Games & Consoles</a></li>
                    <li><a href="" className='footer__link'>Waterproof Headphones</a></li>
                    
                </ul>
            </div>

             <div> 
                <h3 className='font-bold text-xl mb-5'>Customer Care</h3>

                <ul className='grid gap-2'>
                    <li><a href="" className='footer__link'>My Account</a></li>
                    <li><a href="" className='footer__link'>Discount</a></li>
                    <li><a href="" className='footer__link'>Returns</a></li>
                    <li><a href="" className='footer__link'>Orders History</a></li>
                    <li><a href="" className='footer__link'>Order Tracking</a></li>
                    
                </ul>
            </div>


             <div> 
                <h3 className='font-bold text-xl mb-5'>Pages</h3>

                <ul className='grid gap-2'>
                    <li><a href="" className='footer__link'>Blog</a></li>
                    <li><a href="" className='footer__link'>Browse the Shop</a></li>
                    <li><a href="" className='footer__link'>Category</a></li>
                    <li><a href="" className='footer__link'>Pre-Built Pages</a></li>
                    <li><a href="" className='footer__link'>Visual Composer Elements</a></li>
                    <li><a href="" className='footer__link'>WooCommerce Pages</a></li>
                    
                </ul>
            </div>
        </div>

        <div className="bg-copy2 text-[#8A8FB9] py-2">
            <div className="container flex items-center justify-around">
                <p>copyright &copy 2022</p>
                <div className='flex items-center gap-2'>
                    <a href=""><AiFillFacebook /></a>
                    <a href=""><AiFillInstagram /></a>
                    <a href=""><AiFillTwitterCircle /></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer