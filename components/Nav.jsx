import Link from 'next/link';
import utilStyles from '@/styles/utils.module.css'

const Nav = () => {
  return (
    <div className='nav'>
        <Link href='/about'>About</Link>
        <Link href='/projects'>Projects</Link>
        {/* <Link href='/blog'>Blog</Link> */}
        <a download href={'Dan Raskin Resume.pdf'}> Resume </a>
    </div>
  )
};

export default Nav;