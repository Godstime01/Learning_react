import { AiOutlineMail, AiOutlineUser, AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const FeaturedCard = (props) => {

  // console.log(props.id)
  return (
    <Link to={`/product/${props.id}`} className="group rounded-xl shadow-xl overflow-hidden text-3xl relative">
      <div className="icons absolute top-0 left-0 hidden gap-2 p-5 group-hover:flex aspect-square">
        <AiOutlineShoppingCart style={{width: '50px', height: '50px'}}/>
        <AiOutlineHeart style={{width: '50px', height: '50px'}} />
        <AiOutlineSearch style={{width: '50px', height: '50px'}} />
      </div>
      
      <div className="border-none">
        <img src={props.image} className='w-full min-h-full aspect-square bg-[#F2F0FF] border-none' alt="" />

        <button className='button__style absolute !p-3 text-md !bg-[#08D15F] top-[50%] left-[50%] -translate-x-[50%] hidden group-hover:block'>View details</button>

        <div className="text-center grid gap-4 px-5 py-10 min-h-full group-hover:bg-blue-500 group-hover:text-white">
          <h3 className='text-pink font-bold text-2xl group-hover:text-white'>{props.title}</h3>
          <p>Code - <span className='uppercase'>{props.code}</span></p>
          <p>${props.price}</p>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedCard