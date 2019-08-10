import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DomainIcon from '@material-ui/icons/Domain';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme,} from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function AppBars(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
        <List>
            <ListItem button>
              <Link href="/users-list">
                    <ListItemIcon>
                        <DomainIcon />
                        <strong>Users List </strong>
                    </ListItemIcon>
                </Link>
                <ListItemText  />
            </ListItem>
            <ListItem button>
              <Link href="/">
                    <ListItemIcon>
                        <DomainIcon />
                        <strong>Create Company </strong>
                    </ListItemIcon>
                </Link>
                <ListItemText  />
            </ListItem>
            <ListItem button>
              <Link href="/copy-template">
                    <ListItemIcon>
                        <AssignmentIcon />
                        <strong>Copy Template</strong>
                    </ListItemIcon>
                </Link>
                <ListItemText  />
            </ListItem>
            <ListItem button>
              <Link href="/copy-custom-price">
                    <ListItemIcon>
                        <AttachMoneyIcon />
                        <strong>Copy custom prices</strong>
                    </ListItemIcon>
                </Link>
                <ListItemText  />
            </ListItem>
        </List>
     
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon 
              className={classes.menuIcon}
            />
          </IconButton>
          <Typography variant="h6" noWrap>
            Edozo Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    
    </div>
  );
}
