import React from 'react';
import { Link } from 'react-scroll';
import rect1 from '../assets/images/Rectangle1.png';
import rect2 from '../assets/images/Rectangle2.png';
import rect3 from '../assets/images/Rectangle1_1.png';
import rect4 from '../assets/images/Rectangle1_2.png';
import section1logo from '../assets/images/section1logo.png';
import telescope from  '../assets/images/telescope.png'
import zairzalogo from  '../assets/images/zairzalogo.png'
const Section1 = () => {
  return (
    <div>
        <div id='rectangle'>
            <div id='rectangle2'>
            <img src={rect2} alt='rectangle2'/>
            </div>
            <div id='rectangle1'>
            <img src={rect1} alt='rectangle1' />
            </div>
        </div>
        <div className='max-h-72' id='section1'>
            <div id='section1logo' className='section1items'>
                <img src={section1logo}alt='section1-logo' />
            </div>
            <div id='section1-text' className='section1items text-justify'>
                <span id='sub-heading'>2K24</span>
                <span id='heading'>SKILLS++</span>
                <span className='text-xl sm:text-2xl' style={{color: '#D5CDCD'}}>Elevate Your Expertise</span>
                <br/>
                <br/>
                <br/>
                <p className='sm:text-lg' style={{color: '#D5CDCD'}}>Boost your skills with guidance in various tech domains. Gain expert knowledge, hands-on experience, personalized mentoring, and earn a certification. Transform your future, <span className='font-bold animate-pulse' style={{color: '#FFFFFF'}}>REGISTER NOW!!</span></p>
                
                <button className='px-2 py-1 rounded-xl flex items-center bg-blue-50 hover:bg-violet-400 hover:text-white'>
                <Link to='section5' offset={-200}>Explore Domains </Link>
                <img className='h-6 mx-1' src={telescope} alt='telescope' />
                </button>
                <br/>
                <div className='flex items-center justify-end'>
                <span className='italic' style={{color: '#FFFFFF',fontFamily:'Inter',fontWeight:'500'}}>-by ZAIRZA</span>
                <img className='h-8 mx-2' src={zairzalogo} alt='zairzalogo'/>
            </div>
            </div>
        </div>
        <div id='rectangle3'>
            <img src={rect3} alt='rectangle1_1'/>
            <img src={rect4} alt='rectangle1_2'/>
        </div>
    </div>
  )
}

export default Section1