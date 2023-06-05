import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
// import Banner from '../../components/Banner/Banner'

const ContactPage = () => {
  return (
    <>
    <Navbar />
    {/* <Banner /> */}
    <main>
        <div className="container grid grid-cols-2 mt-10">
            <div className="">
                <h3 className='text-4xl font-extrabold text-blue-200 my-10'>Get In Touch</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, labore. Officia quas perferendis, debitis neque atque consequatur delectus impedit ipsa.</p>

                <form action="" className='grid grid-cols-2 gap-3 mt-5'>
                    <label htmlFor="">
                        <input type="text" placeholder='firstname*' className='p-3 border w-full'/>
                    </label>

                    <label htmlFor="">
                        <input type="email" placeholder='email*' className='p-3 border w-full'/>
                    </label>

                    <label htmlFor="" className='col-span-2'>
                        <input type="text"  placeholder='subject*' className='p-3 border w-full'/>
                    </label>

                    <label htmlFor="" className='col-span-2'>
                        <textarea name="" id="" cols="30" rows="10" placeholder='your message*' className='resize-none border p-3 w-full'></textarea>
                    </label>

                    <button type='submit' className='button__style'>Send message</button>
                </form>
            </div>
            <div>
                <img src="/contact.png" alt="" />
            </div>
        </div>
    </main>
    <Footer /> 
    </>
  )
}

export default ContactPage