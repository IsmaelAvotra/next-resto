import './footer.css'

import {
  AiFillRest,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterSquare,
} from 'react-icons/ai'

import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='logo'>
        <AiFillRest />
        <p>Next-Resto</p>
      </div>
    </div>
  )
}

export default Footer
