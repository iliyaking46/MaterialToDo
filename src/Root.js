import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {withStyles} from "@material-ui/core/styles/index";

import { mailFolderListItems, otherMailFolderListItems } from './tileData';
// import Album from './AlbumPage/Album'
import ToDoPage from './ToDoPage/ToDoPage'

const styles = theme => ({
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    list: {
        width: 250,
    },
});

class Root extends React.Component {
    state = {
        open: false
    };

    toggleDrawer = (open) => () => {
        this.setState({open: open});
    };

    render() {
        const {classes} = this.props;
        const {open} = this.state;

        return (
            <React.Fragment>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Material ToDoList
                        </Typography>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    open={open}
                    onClose={this.toggleDrawer(false)}
                    onOpen={this.toggleDrawer(true)}
                    variant="temporary"
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}
                    >
                        <div className={classes.list}>
                            <List>{mailFolderListItems}</List>
                            <Divider />
                            <List>{otherMailFolderListItems}</List>
                        </div>
                    </div>
                </SwipeableDrawer>

                <main>
                    {/*<Album />*/}
                    <ToDoPage />
                </main>

                {/*<footer className={classes.footer}>*/}
                    {/*<Typography variant="title" align="center" gutterBottom>*/}
                        {/*Footer*/}
                    {/*</Typography>*/}
                    {/*<Typography variant="subheading" align="center" color="textSecondary" component="p">*/}
                        {/*Something here to give the footer a purpose!*/}
                    {/*</Typography>*/}
                {/*</footer>*/}
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Root);