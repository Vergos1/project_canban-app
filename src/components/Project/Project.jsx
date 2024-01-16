import styles from './project.module.scss';
import { Link } from 'react-router-dom';
import RightArrow from '../../assets/images/icons/right-arrow.svg?react';




const Project = ({project}) => {
   return (
   <Link to={`/projects/${project.id}`}>
      <div className={styles.project} style={{
         backgroundImage: `url(${project.image})`
      }}>
         <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>{project.title}{' '}
               <span
               className={styles.projectArrowSign}
               >
                  <RightArrow />
               </span>
            </h3>
            <p className={styles.projectDescription}>{project.description}</p>
         </div>
      </div>
   </Link>
   );
};
export default Project;
