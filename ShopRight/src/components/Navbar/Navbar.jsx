import { AiOutlineMail, AiOutlineUser, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='bg-purple-100'>

        <div className="container text-white flex items-center justify-between py-4">
          <p className='flex gap-1 items-center '>
            <span><AiOutlineMail /></span>
            <span>example@gmail.com</span>
          </p>

          <p className='flex gap-1 items-center '>
            <span>
              <AiOutlineMail />
            </span>
            <span>(12345)67890</span>
          </p>

          <div className='flex items-center gap-2 grow-2'>

            <p><span>English</span></p>
            <p><span>USD</span></p>
            <p className='flex items-center gap-1'><span>Login</span> <span> <AiOutlineUser /></span></p>

            <p className='flex items-center gap-1'><span>wishlist</span> <span> <AiOutlineHeart /></span></p>
          </div>
        </div>

      </div>

      <div className='container py-4 flex items-center justify-between'>
        <NavLink to="/">
          <span className="text-3xl text-blue-200 font-extrabold">Logo</span>
          {/* <img src="" alt="" /> */}
          </NavLink>

        {/* NAVIGATION LINKS */}
        <div className='flex items-center gap-2'>
        <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/contact">Contact</NavLink>

        </div>

        <form action="" className='flex '>
          <label htmlFor="">
            <input type="text" placeholder='search' className='p-2 shadow-md' />
          </label>
          <button type="submit" className='button__style'>
            <AiOutlineSearch />
          </button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar