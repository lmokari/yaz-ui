import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {copyCustomPrice} from '../actions';
import { reduxForm, Field } from 'redux-form';
import renderTextField from './FormHelper';
import Button from '@material-ui/core/Button';

class CopyCustomPriceForm extends React.Component {
 
  renderAlert() {
    if (this.props.company.copyCustomPrice)
      return(
        <p><strong>{this.props.company.copyCustomPrice.data}</strong></p>
      )
    return false;
  }

  onSubmit (valuse){
    this.props.copyCustomPrice(valuse, ()=>{
    })
  }

  render() {
    return (
        <div>
           {this.renderAlert()}
            <form  onSubmit={this.props.handleSubmit((event)=>this.onSubmit(event))}>
            <div>
                <Field 
                    label="Src Pip Id" 
                    id="srcPipId" 
                    component={renderTextField} 
                    type="number" 
                    name="srcPipId"
                    autoComplete="" 
                    autoFocus 
                />
            </div>
            <div>
                <Field 
                    label="Dst Pip Id" 
                    id="dstPipId" 
                    component={renderTextField} 
                    type="text" 
                    name="dstPipId"
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
                Copy
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
CopyCustomPriceForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};


export default reduxForm({
  form: 'copyCustomPriceFrm'
})(
  connect(mapStateToProps, {copyCustomPrice})(CopyCustomPriceForm)
);