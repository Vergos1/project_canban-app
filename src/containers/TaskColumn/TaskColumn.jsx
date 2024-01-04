import styles from './taskColumn.module.scss';
import { useState } from 'react';
import { useClickOutside, useDisclosure } from '@mantine/hooks';
import TaskCard from '../../components/TaskCard/TaskCard.jsx';
import CreateTaskModal from '../../components/CreateTaskModal/CreateTaskModal.jsx';



const usersData = ['Ihor', 'Viktor', 'Svitlana', 'Vasyl', 'Dmitri', 'Alex', 'Vlad', 'Vladislav', 'Obama', 'Trump', 'Cristina'];

const TaskColumn = ({ name, data }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [changeColumnName, setChangeColumnName] = useState(name);
  const [editColumnName, setEditColumnName] = useState(false);
  const ref = useClickOutside(() => setEditColumnName(false));

  return (
    <>
      <div className={styles.column}>
        <div className={styles.header}>
          <div className={styles.headerItem}>
            {!editColumnName && (
              <>
                <span
                  onClick={() => setEditColumnName(true)}
                  className={styles.columnName}
                >
                  {changeColumnName ? changeColumnName : 'column name'}
                </span>
                <span className={styles.taskCount}>
                  {data.length}
                </span>
              </>
            )}
            {editColumnName && (
              <input
                onChange={(e) => setChangeColumnName(e.target.value)}
                defaultValue={changeColumnName}
                className={styles.columnNameEdit}
                ref={ref}
                autoFocus={true}
                maxLength='20'
              />
            )}
          </div>
          {!editColumnName && (
            <button type='button' className={styles.addButton} onClick={open}>
              <svg className={styles.icon} viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                      d='M12 6v6m0 0v6m0-6h6m-6 0H6'></path>
              </svg>
            </button>
          )}
        </div>
        <div className={styles.tasks}>
          {data.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
      <CreateTaskModal opened={opened} close={close} users={usersData} />
    </>
  );
};

export default TaskColumn;