import styles from './homePage.module.scss';
import Title from '../../components/Title/Title.jsx';
import TaskColumn from '../../containers/TaskColumn/TaskColumn.jsx';



const columnData1 = [
  {
    id: 1,
    title: 'design',
    description: 'This is the title of the card for the thing that needs to be done.',
    date: 'Dec 12',
    comments: 4,
    attachments: 1,
    userImage: 'https://randomuser.me/api/portraits/women/26.jpg',
  },
  {
    id: 2,
    title: 'backend',
    description: 'This is the title of the card for the thing that needs to be done.',
    date: 'Dec 25',
    comments: 2,
    attachments: 0,
    userImage: 'https://randomuser.me/api/portraits/women/23.jpg',
  },
  {
    id: 3,
    title: 'backend',
    description: 'This is the title of the card for the thing that needs to be done.',
    date: 'Dec 15',
    comments: 2,
    attachments: 5,
    userImage: 'https://randomuser.me/api/portraits/men/24.jpg',
  },
  {
    id: 4,
    title: 'frontend',
    description: 'This is the title of the card for the thing that needs to be done.',
    date: 'Sep 12',
    comments: 0,
    attachments: 4,
    userImage: 'https://randomuser.me/api/portraits/women/24.jpg',
  },
  {
    id: 5,
    title: 'design',
    description: 'This is the title of the card for the thing that needs to be done.',
    date: 'May 2',
    comments: 10,
    attachments: 25,
    userImage: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
];
const columnData2 = [
  {
    id: 1,
    title: 'design',
    description: 'This is the title of the card for the thing that needs to be done.',
    date: 'Dec 12',
    comments: 4,
    attachments: 1,
    userImage: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
];
const columnData3 = [
  {
    id: 1,
    title: 'design',
    description: 'for the thing that needs to be done.',
    date: 'Dec 12',
    comments: 4,
    attachments: 1,
    userImage: 'https://randomuser.me/api/portraits/men/24.jpg',
  },
  {
    id: 2,
    title: 'backend',
    description: 'This is the title of the card for the thing that needs to be done.',
    date: 'Dec 15',
    comments: 4,
    attachments: 0,
    userImage: 'https://randomuser.me/api/portraits/men/23.jpg',
  },
  {
    id: 3,
    title: 'backend',
    description: 'This is the title of the card for the thing that needs to be done.',
    date: 'Dec 15',
    comments: 2,
    attachments: 5,
    userImage: 'https://randomuser.me/api/portraits/men/24.jpg',
  },
];
const columnData4 = [
  {
    id: 1,
    title: 'design',
    description: 'This is the title of the card for the thing that needs to be done.',
    date: 'Dec 12',
    comments: 4,
    attachments: 1,
    userImage: 'https://randomuser.me/api/portraits/women/26.jpg',
  },
  {
    id: 2,
    title: 'backend',
    description: 'This is the title of the card for the thing that needs to be done.',
    date: 'Dec 25',
    comments: 2,
    attachments: 0,
    userImage: 'https://randomuser.me/api/portraits/women/23.jpg',
  },
];
const HomePage = () => {

  return (
    <>
      <div className={styles.homePage}>
        <div className='container'>
          <Title>Team Project Board</Title>
          <div className={styles.taskColumns}>
            <TaskColumn name='Deferred' taskData={columnData1} />
            <TaskColumn name='Ready' taskData={columnData2} />
            <TaskColumn name='Doing' taskData={columnData3} />
            <TaskColumn name='Review' taskData={columnData4} />
            <TaskColumn name='Blocked' taskData={columnData1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
