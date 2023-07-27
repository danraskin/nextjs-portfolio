import Image from 'next/image';
import Link from 'next/link';

import Nav from '@/components/Nav';
import utilStyles from '../styles/utils.module.css';


const name = 'Dan Raskin';

const Header = ({home}) => {
  return (
    <div className='header'>
    {
      <>
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
        <Nav />
        <div className='right'/>
      </>
    }
    </div>
  );
};

export default Header;