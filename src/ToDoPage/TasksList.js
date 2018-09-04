import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TaskItem from './TaskItem'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DialogEdit from "./DialogEdit";

const styles = theme => ({
    doneBlock: {
        margin: `${theme.spacing.unit}px 0`
    },
    doneText: {
        marginLeft: theme.spacing.unit * 2
    },
    container: {
        backgroundColor: 'white',
        minHeight: 500,
        position: 'relative'
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    }
});

class TasksList extends React.Component {
    state = {
        dialogOpen: false
    };

    id = 1;

    getId = () => (this.id += 1);

    handleChangeTask = newTask => {
        const tasks = [...this.props.tasks];
        const taskIndex = tasks.findIndex(task => task.id === newTask.id);
        tasks[taskIndex] = newTask;
        this.props.editTask(tasks);
    };

    handleOpen = () => {
        this.setState({dialogOpen: true});
    };

    handleClose = (value = '') => {
        if (value) {
            const {editTask, tasks, categoryId} = this.props;
            editTask([...tasks, {value, id: `${categoryId}_${this.getId()}`, done: false}]);
        }
        this.setState({dialogOpen: false});
    };

    render() {
        const {classes, tasks, categoryId} = this.props;
        const {dialogOpen} = this.state;

        return (
            <div className={classes.container}>
                {tasks
                    ? (
                        <List>
                            <div className={classes.doneBlock}>
                                <Typography variant="body2" className={classes.doneText}>Undone</Typography >
                                <Divider />
                            </div>

                            {tasks.map(task => !task.done &&
                                <TaskItem
                                    task={task}
                                    key={task.id}
                                    changeTask={this.handleChangeTask}
                                />
                            )}

                            <div className={classes.doneBlock}>
                                <Typography variant="body2" className={classes.doneText}>Done</Typography >
                                <Divider />
                            </div>

                            {tasks.map(task => task.done &&
                                <TaskItem
                                    task={task}
                                    key={task.id}
                                    changeTask={this.handleChangeTask}
                                />
                            )}

                        </List>
                    ) : <span>Добавь таску, плиз, че как не родной?!</span>
                }

                {categoryId && <Button variant="fab" className={classes.fab} color="secondary" onClick={this.handleOpen}>
                    <AddIcon />
                </Button>}

                {dialogOpen && <DialogEdit
                    open={dialogOpen}
                    title="Добавить задачу"
                    label="Название"
                    onClose={this.handleClose}
                />}
            </div>
        );
    }
}

export default withStyles(styles)(TasksList);