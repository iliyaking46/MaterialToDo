import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const styles = theme => ({
    labelDone: {
        textDecoration: 'line-through',
        color: 'gray',
        fontSize: theme.typography.body1.fontSize
    },
    label: {
        fontSize: theme.typography.body1.fontSize
    },
});

class TaskItem extends React.Component {
    render() {
        const {classes, changeTask, task} = this.props;

        return (
            <ListItem button onClick={() => changeTask({...task, done: !task.done})}>
                <ListItemText primary={
                    <div className={task.done ? classes.labelDone : classes.label}>
                        <Checkbox color="default" className={task.done ? classes.label : ''} checked={task.done} />
                        {task.value}
                    </div>
                }/>
                <ListItemSecondaryAction>
                    <Tooltip title="Редактировать">
                        <IconButton aria-label="Edit" color="secondary"
                                    // onClick={this.onEditCategory(id)}
                        >
                            <Icon>edit_icon</Icon>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Удалить">
                        <IconButton aria-label="Delete"
                                    // onClick={this.onDeleteCategory(id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default withStyles(styles)(TaskItem);