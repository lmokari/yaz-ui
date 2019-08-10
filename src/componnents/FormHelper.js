import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';



const renderTextField = ({ input, type,id,name, label,autoComplete, ...custom }) => (

    <FormControl fullWidth className="formControlMargin">
    <TextField
      id={id}
      type={type} {...input} {...custom} 
      label={label}
      name={name}
      autoComplete={autoComplete}
    />
    </FormControl>

);

renderTextField.propTypes = {
    input: PropTypes.object.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    meta: PropTypes.object
  };

  renderTextField.defaultProps = {
    type: 'text',
    label: '',
    meta: {}
  };

  export default renderTextField
