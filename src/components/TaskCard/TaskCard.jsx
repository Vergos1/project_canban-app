import styles from './taskCard.module.scss';



const TaskCard = ({ task }) => {
  return (
    <div className={styles.taskCard} draggable='true'>
      <div className={styles.taskCardHeader}>
          <span className={`${styles.tag} ${styles[task.title]}`}>
            {task.title}
          </span>
        <button className={styles.closeButton}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'
               fill='currentColor'>
            <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
          </svg>
        </button>
      </div>

      <h4 className={styles.title}>
        {task.description}
      </h4>
      <div className={styles.details}>
        <div className={styles.detailItem}>
          <svg className={styles.detailIcon} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
            <path fillRule='evenodd'
                  d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                  clipRule='evenodd' />
          </svg>
          <span className={styles.detailText}>
            {task.date}
          </span>
        </div>
        <div className={styles.detailItem}>
          <svg className={styles.detailIcon} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
            <path fillRule='evenodd'
                  d='M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z'
                  clipRule='evenodd' />
          </svg>
          <span className={styles.detailText}>
            {task.comments}
        </span>
        </div>
        <div className={styles.detailItem}>
          <svg className={styles.detailIcon} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
            <path fillRule='evenodd'
                  d='M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z'
                  clipRule='evenodd' />
          </svg>
          <span className={styles.detailText}>
             {task.attachments}
        </span>
        </div>

        <img className={styles.userAvatar} src={task.userImage} alt='User' />
      </div>
    </div>);
};
export default TaskCard;