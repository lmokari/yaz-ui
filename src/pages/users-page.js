import React, {Component} from 'react';
import USerList from '../componnents/Users';
// import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {usersList}from '../actions';
// import AppBar from '../layout/appBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles(theme => ({
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//         paddingTop:80,
//         [theme.breakpoints.up('sm')]: {
//             paddingLeft: 245
//           }
//       },
//   }));
  
  class UserPage extends Component {
    componentWillMount() {
        this.props.usersList()
    }

    // const classes = useStyles();  
    render(){
        return (
            <main>
            {/* <AppBar/> */}
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography variant="h5" component="h2">
                                Users List
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                               {/* If company dose not exists create. */}
                            </Typography>
               <USerList company={this.props.company}/>
               </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </main>
        );
    }
};


function mapStateToProps(state){
   return {
       company:state.company
   }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({usersList},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(UserPage)


