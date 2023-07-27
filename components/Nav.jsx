import Link from 'next/link';
import utilStyles from '@/styles/utils.module.css'

const Nav = () => {
  return (
    <div className='nav'>
        <Link className='link' href='/about'>About</Link>
        <Link className='link' href='/projects'>Projects</Link>
        <Link className='link' href='/blog'>Blog</Link>
        <a className='link' download href={'Dan Raskin Resume.pdf'}> Resume </a>
    </div>
  )
};

export default Nav;