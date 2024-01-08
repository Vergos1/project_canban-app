import styles from './createTaskModal.module.scss';
import { useState } from 'react';
import { CloseButton, ColorInput, TextInput, Modal, Select, Textarea } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useDispatch } from 'react-redux';
import { createTask } from '../../store/slices/tasks.slice.js';
import CustomTheme from '../../config/MantineConfig/MantineConfig.jsx';



const CreateTaskModal = ({ opened, close, users }) => {
  const dispatch = useDispatch();
  const [valid, setValid] = useState(true);
  const [date, setDate] = useState('');
  const [user, setUser] = useState('');
  const [role, setRole] = useState('');
  const [roleBackgroundColor, setRoleBackgroundColor] = useState('');
  const [roleTextColor, setRoleTextColor] = useState('');
  const [description, setDescription] = useState('');
  //doc: log selected form value

  // console.log(date, user, role, roleBackgroundColor, roleTextColor, description);
  //doc: log selected value

  const handleSubmit = () => {
    setValid(true);

    if (!user || !role || !description) {
      return setValid(false);
    }

    const taskDate = new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });

    const task = {
      id: Math.floor(Math.random() * 10000),
      //todo поменять заглушку с айдишником
      date: taskDate,
      responsible: user,
      badgeName: role.toLowerCase(),
      badgeBackground: roleBackgroundColor,
      badgeColor: roleTextColor,
      description: description,
      comments: 0,
      attachments: 0,
    };

    console.log(task);
    dispatch(createTask(task));
    close();
  };

  return (
    <Modal
      transitionProps={{ transition: 'fade', duration: 200 }}
      size='md'
      opened={opened}
      onClose={close}
      title='Task creation'
      centered={true}
    >
      <form action='' className={styles.modalForm}>
        <div className={styles.modalWrapper}>
          <div className={styles.colorsPickerWrapper}>
            <DateInput
              clearable
              defaultValue={new Date()}
              onChange={(value) => setDate(value)}
              variant='filled'
              label='Task date'
              placeholder='Pick dates'
            />
            <Select
              data={users}
              withScrollArea={false}
              onChange={(value) => setUser(value)}
              label='Select performer'
              placeholder='Select user'
              variant='filled'
            />
          </div>
          <TextInput
            variant='filled'
            placeholder='design...'
            required
            value={role}
            label='Role title'
            maxLength={10}
            onChange={(event) => setRole(event.currentTarget.value)}
            rightSectionPointerEvents='all'
            rightSection={
              <CloseButton
                aria-label='Clear input'
                onClick={() => setRole('')}
                style={{ display: role ? undefined : 'none' }}
              />
            }
          />
          {/*<CustomInput*/}
          {/*  maxTextLength={10}*/}
          {/*  inputWithDelete={true}*/}
          {/*  variant='filled'*/}
          {/*  labelText='Role title'*/}
          {/*  placeholderText='developer...'*/}
          {/*/>*/}
          <div className={styles.colorsPickerWrapper}>
            <ColorInput
              placeholder='Pick background color'
              label='Role background color'
              variant='filled'
              disallowInput
              onChange={(value) => setRoleBackgroundColor(value)}
              withEyeDropper={false}
              withPicker={false}
              swatches={[
                ...CustomTheme.colors.background,
              ]}
            />
            <ColorInput
              placeholder='Pick text color'
              label='Role text color'
              variant='filled'
              disallowInput
              onChange={(value) => setRoleTextColor(value)}
              withEyeDropper={false}
              withPicker={false}
              swatches={[
                ...CustomTheme.colors.text,
              ]}
            />
          </div>
          <Textarea
            label='Task description'
            placeholder='Detail the task requirements...'
            variant='filled'
            autosize
            onChange={(event) => setDescription(event.target.value)}
            minRows={2}
            maxRows={4}
          />
          {!valid && (
            <div className={styles.error}>
              All fields are required
            </div>
          )}
        </div>

        <button type='button' onClick={handleSubmit} className={styles.createButtonModal}>
          Create
        </button>
      </form>
    </Modal>
  );
};
export default CreateTaskModal;