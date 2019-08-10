import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  }));

const Userslist = (props) =>{
    const classes = useStyles();
    return (
        <div>
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <TableCell>Trader Name</TableCell>
                    <TableCell align="right">Username</TableCell>
                    <TableCell align="right">Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {props.company.usersList && props.company.usersList.length > 0 ?
                props.company.usersList.map( item => (
                    <TableRow key={item.id}>
                        <TableCell component="th" scope="item">
                                {`${item.firstName} ${item.lastName}`}
                            </TableCell>
                            <TableCell align="right">{item.email}</TableCell>
                            <TableCell align="right">{item.isActive===false? <span>inactive</span> : <span>active</span> } 
                            </TableCell>
                    </TableRow>
                )): null
                }
        </TableBody>
      </Table>
        </div>
    )
}

export default Userslist;