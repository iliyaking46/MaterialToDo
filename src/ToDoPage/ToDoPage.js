import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

import CategoriesList from './CaregoriesList'
import CategoryInput from './CategoryInput'
import TasksList from './TasksList'

const styles = theme => ({
    container: {
        maxWidth: 1100,
        margin: '90px auto 30px',
        padding: '0 30px'
    },
    inputCategory: {
        marginBottom: theme.spacing.unit * 4
    },
    addButton: {
        height: 38,
        padding: '0 16px 0 10px'
    }
});

class ToDoPage extends React.Component{
    state = {
        categories: [
            {title: '1 задача', id: '0', tasks: [
                {value: ' таска 1', id: '0_0', done: false}
                ]
            }],
        categoryInput: '',
        itemInput: '',
        selectedId: '0'
    };

    id = 1;

    getId = () => (this.id += 1);

    addCategory = (category) => {
        this.setState(({categories}) => ({categories: [...categories, {title: category, id: this.getId()}]}))
    };

    editCategory = (title, itemId) => {
        const categories = this.state.categories.map(item => item.id === itemId ? {...item, title   } : item);
        this.setState({categories})
    };

    deleteCategory = (deletedId) => {
        const {categories, selectedId} = this.state;
        if (selectedId === deletedId) {
            this.selectCategory()
        }
        const newCategories = categories.filter(({id}) => id !== deletedId);
        this.setState({categories: newCategories})
    };

    selectCategory = (selectedId = null) => {
        this.setState({selectedId})
    };

    getTasks = () => {
        const {categories, selectedId} = this.state;
        if (selectedId && categories.length) {
            const category = categories.find(cat => cat.id === selectedId);
            return category.tasks
        }
        return null
    };

    editTask = newTask => {
        const {selectedId, categories} = this.state;
        this.setState({categories: categories.map(item => item.id === selectedId ? {...item, tasks: newTask} : item)})
    };

    render() {
        const {classes} = this.props;
        const {categories, selectedId} = this.state;

        return (
            <div className={classes.container}>
                <Grid item xs={12} md={4}>
                    <CategoryInput addCategory={this.addCategory}/>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs={12} md={4}>
                        <CategoriesList
                            categories={categories}
                            deleteCategory={this.deleteCategory}
                            editCategory={this.editCategory}
                            selectCategory={this.selectCategory}
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <TasksList
                            categoryId={selectedId}
                            tasks={this.getTasks()}
                            editTask={this.editTask}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(ToDoPage);