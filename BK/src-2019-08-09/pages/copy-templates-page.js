import React from 'react';
import CopyTemplate from '../componnents/CopyTemplate';
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
  

function CopyTemplatePage(){
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography variant="h5" component="h2">
                                Copy templates
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                Copy templates from relevant master company
                            </Typography>
                            <br/>
                            <CopyTemplate/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </main>
    )
}
export default CopyTemplatePage;