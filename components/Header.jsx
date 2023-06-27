import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/utils.module.css';
import utilStyles from '../styles/utils.module.css';


const name = 'Dan Raskin';

export default function Header({home}) {
  return (
    <div className={styles.header}>
    {home ? (
      <>
        <Image
          priority
          src="/images/profile.jpeg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt=""
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
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
}