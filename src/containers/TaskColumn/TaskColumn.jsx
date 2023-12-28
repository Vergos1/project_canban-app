import styles from './taskColumn.module.scss';
import { useState } from 'react';
import { useClickOutside, useDisclosure } from '@mantine/hooks';
import { CloseButton, Input, Modal } from '@mantine/core';
import TaskCard from '../../components/TaskCard/TaskCard.jsx';



const TaskColumn = ({ name, taskData }) => {
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
              <span
                onClick={() => setEditColumnName(true)}
                className={styles.columnName}
              >
              {changeColumnName ? changeColumnName : 'column name'}
            </span>
            )}
            {editColumnName && (
              <input
                onChange={(e) => setChangeColumnName(e.target.value)}
                defaultValue={changeColumnName}
                className={styles.columnNameEdit}
                ref={ref}
                contentEditable={true}
                maxLength='8'
              />
            )}
            <span className={styles.taskCount}>
            {taskData.length}
          </span>
          </div>
          <button type='button' className={styles.addButton} onClick={open}>
            <svg className={styles.icon} viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                    d='M12 6v6m0 0v6m0-6h6m-6 0H6'></path>
            </svg>
          </button>
        </div>
        <div className={styles.tasks}>
          {taskData.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
      <Modal
        transitionProps={{ transition: 'fade', duration: 200 }}
        size='md'
        opened={opened}
        onClose={close}
        title='Authentication'
        centered={true}>
      </Modal>
    </>
  );
};

export default TaskColumn;