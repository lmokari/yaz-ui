import React from 'react';
import CopyCustomPric from '../componnents/CopyCustomPric';
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
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 245
          }
      },
  }));
  

function CopyCustomPricePage(){
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={5}>
                            <Typography variant="h5" component="h2">
                                Copy custom prices
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                Copy custom prices form the relevant master company
                            </Typography>
                            <br/>
                            <CopyCustomPric/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </main>
    )
}
export default CopyCustomPricePage;