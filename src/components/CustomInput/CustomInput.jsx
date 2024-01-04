import styles from './customInput.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { CloseButton, Input, InputLabel, InputWrapper, Tooltip } from '@mantine/core';



const CustomInput = ({
  placeholderText,
  labelText,
  inputWithDelete,
  withTooltip,
  maxTextLength,
  inputOnChange,
}) => {
  const [value, setValue] = useState('');
  console.log(value);
  //doc: log selected value
  //doc: input with delete button

  return (
    <InputWrapper>
      <InputLabel>{labelText}</InputLabel>
      <Input
        variant='filled'
        placeholder={placeholderText}
        value={value}
        maxLength={maxTextLength}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents='all'
        rightSection={
          inputWithDelete &&
          <CloseButton
            aria-label='Clear input'
            onClick={() => setValue('')}
            style={{ display: value ? undefined : 'none' }}
          />
        }
      />
    </InputWrapper>
  );
};

CustomInput.propTypes = {
  inputWithDelete: PropTypes.bool,
  withTooltip: PropTypes.bool,
};
CustomInput.defaultProps = {
  inputWithDelete: false,
  withTooltip: false,
};
export default CustomInput;