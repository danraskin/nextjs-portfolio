import Image from 'next/image';
import Link from 'next/link';

import Nav from '@/components/Nav';
import utilStyles from '../styles/utils.module.css';


const name = 'Dan Raskin';

const Header = ({home}) => {
  return (
    <div className='header'>
    {home ? (
      <>
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
        <Nav auth />
      </>
    ) : (
      <>
        <Link href="/">
          <Image
            priority
            src="/images/profile.jpeg"
            className={utilStyles.borderCircle}
            height={108}
            width={108}
            alt=""
          />
        </Link>
        <h2 className={utilStyles.headingLg}>
          <Link href="/" className={utilStyles.colorInherit}>
            {name}
          </Link>
        </h2>
      </>
    )}
    </div>
  );
};

export default Header;