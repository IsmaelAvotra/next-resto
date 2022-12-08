import Link from 'next/link'
import './navbar.css'
import {
  AiFillRest,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterSquare,
  AiOutlineMenu,
} from 'react-icons/ai'

const Navbar = () => {
  return (
    <section className='navbar'>
      <Link href='/'>
        <div className='logo'>
          <AiFillRest />
          <p>Next-Resto</p>
        </div>
      </Link>

      <div className='links'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/products'>Products</Link>
      </div>
      <div className='socials'>
        <Link href='https://www.facebook.com/'>
          <AiFillFacebook />
        </Link>
        <Link href='https://www.instagram.com/'>
          <AiOutlineInstagram />
        </Link>
        <Link href='https://twitter.com/home'>
          <AiFillTwitterSquare />
        </Link>
      </div>
      <div className='menu'>
        <AiOutlineMenu />
      </div>
    </section>
  )
}

export default Navbar
