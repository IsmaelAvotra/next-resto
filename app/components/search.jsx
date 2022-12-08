import './search.css'

import { AiOutlineSearch } from 'react-icons/ai'
import Link from 'next/link'

const Search = () => {
  return (
    <div className='search'>
      <div className='search-form'>
        <input type='text' placeholder='Search...' />
        <div className='icon'>
          <Link href='/results'>
            <AiOutlineSearch />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Search
