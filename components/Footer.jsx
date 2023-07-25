import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <a>&copy; Dan Raskin, 2023</a>
      <div className='footnav'>
        <Link href='https://github.com/danraskin'>
          <Image src='/images/svg/github-tile.svg' height='45' width='45'/>  
        </Link>
        <Link href='https://linkedin.com/in/danieltraskin'>
          <Image src='/images/svg/linkedin-tile.svg' height='45' width='45'/>  
        </Link>
      </div>
    </footer>
  );
};

export default Footer;