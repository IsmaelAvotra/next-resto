import './about.css'

import Image from 'next/image'

import { AiOutlineInstagram } from 'react-icons/ai'
import { FaPinterestSquare } from 'react-icons/fa'
import { GiFlowerStar } from 'react-icons/gi'

const About = () => {
  return (
    <section className='section'>
      <h2>About us</h2>
      <div className='about-content'>
        <div className='left'>
          <h3>Why choose Next-Resto?</h3>
          <div className='quality'>
            <p>
              <GiFlowerStar /> The best restaurant in town, hands down. The food
              is incredible, and the service is even better. You're sure to have
              an amazing experience here.
            </p>
            <Image
              src='/resto.jpg'
              height={667}
              width={1000}
              placeholder='blur'
              blurDataURL='/blur.jpg'
              alt='resto image'
            />
          </div>
          <div className='quality'>
            <p>
              <GiFlowerStar /> The menu has something for everyone, and the
              prices are fair. The atmosphere is perfect for a night out with
              family or friends.
            </p>
            <Image
              src='/menu.jpg'
              height={2000}
              width={2830}
              placeholder='blur'
              blurDataURL='/blur.jpg'
              alt='resto menu'
            />
          </div>
          <div className='quality'>
            <p>
              <GiFlowerStar /> I highly recommend this restaurant to anyone
              looking for a great meal and a great time.
            </p>
            <Image
              src='/meal.jpg'
              height={667}
              width={1000}
              placeholder='blur'
              blurDataURL='/blur.jpg'
              alt='meal image'
            />
          </div>
        </div>
        <div className='right'>
          <h3>Our chef</h3>
          <p className='description'>
            The chef of a restaurant is responsible for the overall culinary
            experience of the establishment. This includes menu development,
            food preparation, and food presentation. The chef also often works
            closely with the front of house staff to ensure that the dining
            experience is enjoyable for all guests.
          </p>
          <div className='chef-content'>
            <div className='chef'>
              <Image
                src='/chef1.jpg'
                height={667}
                width={1000}
                placeholder='blur'
                blurDataURL='/chef1.jpg'
                alt='iamge chef'
              />
              <div className='info'>
                <p>
                  <span>Name:</span> Lisandro Micka
                </p>
                <p>
                  <span>speciality:</span>Japanese,Korean
                </p>
                <div className='socials'>
                  <AiOutlineInstagram />
                  <FaPinterestSquare />
                </div>
              </div>
            </div>

            <div className='chef'>
              <Image
                src='/chef2.jpg'
                height={667}
                width={1000}
                placeholder='blur'
                blurDataURL='/chef2.jpg'
                alt='iamge chef'
              />
              <div className='info'>
                <p>
                  <span>Name:</span> Joel Zaravita
                </p>
                <p>
                  <span>speciality:</span>Dessert,Cake
                </p>
                <div className='socials'>
                  <AiOutlineInstagram />
                  <FaPinterestSquare />
                </div>
              </div>
            </div>

            <div className='chef'>
              <Image
                src='/chef4.jpg'
                height={667}
                width={1000}
                placeholder='blur'
                blurDataURL='/chef3.jpg'
                alt='iamge chef'
              />
              <div className='info'>
                <p>
                  <span>Name:</span> Lili Srickia
                </p>
                <p>
                  <span>speciality:</span>African,Thai,Salades
                </p>
                <div className='socials'>
                  <AiOutlineInstagram />
                  <FaPinterestSquare />
                </div>
              </div>
            </div>
          </div>

          <div className='team-cook'>
            <h3>Team of cooks </h3>
            <p className='description'>
              A team of cooks is a group of people who work together to prepare
              food. They may work in a restaurant, catering company, or other
              food-service setting. The team may include a head cook, who
              supervises the other cooks; sous chefs, who assist the head cook;
              and line cooks, who prepare food according to recipes.
            </p>
            <div className='image-team'>
              <Image
                src='/teamCook.jpg'
                height={563}
                width={1000}
                placeholder='blur'
                blurDataURL='/teamCook.jpg'
                alt='team cook'
              />
            </div>
          </div>

          <div className='marketing-team'>
            <h3>Marketing and sales team</h3>
            <p className='description'>
              The marketing and sales team is responsible for creating and
              executing marketing and sales plans in order to generate revenue
              for the company. This team works closely with the product
              development team to ensure that products are positioned correctly
              in the market and that sales strategies are aligned with marketing
              objectives. The team is also responsible for managing customer
              relationships and developing new business opportunities.
            </p>

            <div className='image-team'>
              <Image
                src='/teamMark.jpg'
                height={563}
                width={1000}
                placeholder='blur'
                blurDataURL='/teamMark.jpg'
                alt='team marketing'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
