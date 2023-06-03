import Link from 'next/link'
import './navbar.css'
import { AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai'
import { BiRestaurant } from 'react-icons/bi'
import { MdOutlineFavorite } from 'react-icons/md'

const Navbar = () => {
  return (
    <section className='navbar'>
      <Link href='/'>
        <div className='logo'>
          <BiRestaurant />
          <p>Next-Resto</p>
        </div>
      </Link>

      <div className='links'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/products'>Products</Link>
      </div>
      <div className='socials'>
        <Link href='https://www.facebook.com/' target='_blank'>
          <AiOutlineShoppingCart />
        </Link>
        <Link href='https://www.instagram.com/' target='_blank'>
          <MdOutlineFavorite />
        </Link>
      </div>
      <div className='menu'>
        <AiOutlineMenu />
      </div>
    </section>
  )
}

export default Navbar
