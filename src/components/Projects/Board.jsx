import styles from './board.module.scss';
import Project from '../Project/Project.jsx';




const Board = ({boardData}) => {

   return (
   <div className={styles.boardWrapper}>
      {
         boardData.map((project) => {
            return (
            <Project
            key={project.id}
            project={project}
            />
            );
         })
      }
   </div>
   );
};
export default Board;
