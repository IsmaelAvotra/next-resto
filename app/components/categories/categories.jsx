'use client'
import React from 'react'
import './categories.css'

import { FaPizzaSlice } from 'react-icons/fa'
import { GiFastNoodles, GiNoodles, GiChopsticks } from 'react-icons/gi'
import Link from 'next/link'

const Categories = () => {
  return (
    <div className='categories'>
      <div className='category'>
        <Link href='/categories/italian'>
          <div className='category-italian'>
            <FaPizzaSlice />
            <p>Italian</p>
          </div>
        </Link>
      </div>
      <div className='category'>
        <Link href='/categories/korean'>
          <div className='category-korean'>
            <GiFastNoodles />
            <p>Korean</p>
          </div>
        </Link>
      </div>
      <div className='category'>
        <Link href='/categories/thai'>
          <div className='category-thai'>
            <GiNoodles />
            <p>Thai</p>
          </div>
        </Link>
      </div>
      <div className='category '>
        <Link href='/categories/japanese'>
          <div className='category-japanese'>
            <GiChopsticks />
            <p>Japanese</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Categories
