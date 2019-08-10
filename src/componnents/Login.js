import React from 'react';
import history from '../history';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../actions';
import { reduxForm, Field } from 'redux-form';
import renderTextField from './FormHelper';
import Button from '@material-ui/core/Button';

class LoginForm extends React.Component {
 
  renderAlert() {
    if (this.props.auth.login)
      localStorage.setItem('token', this.props.auth.login.data.token);
      
    return false;
  }
  
  onSubmit (valuse){
    this.props.login(valuse).then(() => {
      // console.log('ok')
        history.push('/users-list');
        Location.reload()
    })
  }
  render() {

    return (
        <div>
          {this.renderAlert()}
            
            <form  onSubmit={this.props.handleSubmit((event)=>this.onSubmit(event))}>
            <div>
                <Field 
                    label="Username" 
                    id="email" 
                    component={renderTextField} 
                    type="text" 
                    name="email"
                    autoFocus 
                />
            </div>
            <div>
                <Field 
                    label="Password" 
                    id="password" 
                    component={renderTextField} 
                    type="password" 
                    name="password"
                />
            </div>
            <br/>
            <Button 
                className="fullWidth"
                size="large" 
                variant="contained" 
                color="primary" 
                type="submit" 
                value="submit">
                Login
            </Button>
            </form>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      auth:state.auth
  }
} 
LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};



export default reduxForm({
  form: 'loginFrm'
})(
  connect(mapStateToProps, {login})(LoginForm)
);