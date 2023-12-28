import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import userAvatar from '../../assets/images/user-avatar.png';



const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.headerWrapper}>
          <svg className={styles.headerIcon} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'
               stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                  d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' />
          </svg>
          <div className={styles.headerNavigationItem}>
            <input
              className={styles.headerSearchInput}
              type='search'
              placeholder='Search for anything…'
            />
            <div className={styles.Navbar}>
              <Link to='/' className={styles.headerLink}>Projects</Link>
              <Link to='/' className={`${styles.headerLink} ${styles.headerLinkInactive}`}>Team</Link>
              <Link to='/' className={`${styles.headerLink} ${styles.headerLinkInactive}`}>Activity</Link>
            </div>
          </div>

          {/*<button type='button' className={styles.headerProfileButton}>*/}
          {/*  <img src={userAvatar} alt='user avatar' />*/}
          {/*  Ihor*/}
          {/*</button>*/}
          <div className={styles.headerAuthGoogle}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;