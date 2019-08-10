import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {checkPip} from '../actions';
import { reduxForm, Field } from 'redux-form';
import renderTextField from './FormHelper';
import Button from '@material-ui/core/Button';

class checkPipForm extends React.Component {
 
  renderAlert() {
    if (this.props.company.add)
      return(
        <p><strong>{this.props.company.add.data}</strong></p>
      )
    return false;
  }

  onSubmit (valuse){
    this.props.checkPip(valuse).then(() => {
    })
  }
  render() {

    return (
        <div>
          {this.renderAlert()}
            
            <form  onSubmit={this.props.handleSubmit((event)=>this.onSubmit(event))}>
            <div>
                <Field 
                    label="Picpe Drive Id" 
                    id="pipId" 
                    component={renderTextField} 
                    type="number" 
                    name="pipId"
                    autoComplete="" 
                    autoFocus 
                />
            </div>
            <div>
                <Field 
                    label="Company Name" 
                    id="companyName" 
                    component={renderTextField} 
                    type="text" 
                    name="companyName"
                    autoComplete="" 
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
                Create
            </Button>
            </form>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      company:state.company
  }
} 
checkPipForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};



export default reduxForm({
  form: 'checkPipId'
})(
  connect(mapStateToProps, {checkPip})(checkPipForm)
);