import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DialogEdit from './DialogEdit'

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class CategoriesList extends React.Component {
    state = {
        open: false,
        changedId: null
    };

    handleClose = (newCategoryTitle = '') => {
        if (newCategoryTitle) {
            this.props.editCategory(newCategoryTitle, this.state.changedId);
        }
        this.setState({open: false, changedId: null});
    };

    onEditCategory = id => () => {
        this.setState({open: true, changedId: id});
    };

    render() {
        const {classes, categories, deleteCategory, selectCategory} = this.props;
        const {open, changedId} = this.state;

        if (!categories.length) {
            return null
        }

        // console.log(open && categories.find(({id}) => changedId === id).title);

        return (
            <div className={classes.root}>
                {open && <DialogEdit
                    open={open}
                    title="Изменить категорию"
                    label="Категория"
                    value={categories.find(({id}) => changedId === id).title}
                    onClose={this.handleClose}
                />}
                <List component="nav" >
                    {categories.map(({id, title}) => (
                        <ListItem button key={id} onClick={() => selectCategory(id)}>
                            <ListItemText primary={title} />
                            <ListItemSecondaryAction>
                                <Tooltip title="Редактировать">
                                    <IconButton aria-label="Edit" color="secondary" onClick={this.onEditCategory(id)}>
                                        <Icon>edit_icon</Icon>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Удалить">
                                    <IconButton aria-label="Delete" onClick={() => deleteCategory(id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(CategoriesList);