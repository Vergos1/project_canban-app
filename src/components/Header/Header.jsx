import styles from './header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import UserAvatar from '../../assets/images/icons/user-avatar.svg?react';




const Header = () => {
   const location = useLocation();

   return (
   <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
         <div className={styles.headerWrapper}>
            <Link to={'/'}>
               <svg className={styles.headerIcon} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'
                    stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                        d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' />
               </svg>
            </Link>
            <div className={styles.headerNavigationItem}>
               <input
               className={styles.headerSearchInput}
               type='search'
               placeholder='Search for anything…'
               />
               <div className={styles.Navbar}>
                  <Link
                  to='/board'
                  className={`${styles.headerLink} ${location.pathname !== '/board' ? styles.headerLinkInactive :
                  ''}`}
                  >
                     Projects
                  </Link>
                  <Link
                  to='/'
                  className={`${styles.headerLink} ${location.pathname !== '/' ? styles.headerLinkInactive : ''}`}
                  >
                     Last
                  </Link>
                  <Link
                  to='/'
                  className={`${styles.headerLink} ${location.pathname !== '/activity' ? styles.headerLinkInactive :
                  ''}`}
                  >
                     Activity
                  </Link>
               </div>
            </div>


            <div className={styles.headerAuthGoogle}>
               <button type='button' className={styles.headerProfileButton}>
                  <UserAvatar width={32} height={32} alt='user avatar' />
               </button>
               <Link to={'/login'}>Login</Link>
               <Link to={'/registration'}>Register</Link>
            </div>
         </div>
      </div>
   </header>
   );
};
export default Header;