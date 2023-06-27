import Link from 'next/link';
import utilStyles from '@/styles/utils.module.css'

export default function Nav({auth}) {
  return (
    <div className='nav'>
        <Link href='/about'>About</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/blog'>Blog</Link>
    </div>
  )
}