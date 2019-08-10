import React from 'react';
import Login from '../componnents/Login';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        paddingTop:80,
      },
  }));
  

function LoginPage(){
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <Grid container>
                        <Grid item xs={4}>
            <Card>
                <CardContent>
                    
                            <Typography variant="h5" component="h2">
                                Login
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                               Login text
                            </Typography>
                            <Login/>
                      
                </CardContent>
            </Card>
            </Grid>
            </Grid>
        </main>
    )
}
export default LoginPage;