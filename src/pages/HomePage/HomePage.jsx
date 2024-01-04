import styles from './homePage.module.scss';
import { useSelector } from 'react-redux';
import Title from '../../components/Title/Title.jsx';
import TaskColumn from '../../containers/TaskColumn/TaskColumn.jsx';



const HomePage = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  return (
    <>
      <div className={styles.homePage}>
        <div className='container'>
          <Title>Team Project Board</Title>
          <div className={styles.taskColumns}>
            <TaskColumn name='Deferred' data={tasks} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
