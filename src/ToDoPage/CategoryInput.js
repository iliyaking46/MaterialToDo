import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        maxWidth: 1100,
        margin: '90px auto 30px'
    },
    inputCategory: {
        marginBottom: theme.spacing.unit * 4
    },
    addButton: {
        height: 38,
        padding: '0 16px 0 10px'
    }
});

class CategoryInput extends React.Component{
    state = {
        value: '',
    };

    handleChange = event => {
        this.setState({
            value: event.target.value,
        });
    };

    onAddCategory = () => {
        this.props.addCategory(this.state.value);
        this.setState({value: ''})
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <div className={classes.inputCategory}>
                <Grid container justify="space-between" alignItems="center">
                    <FormControl>
                        <InputLabel htmlFor="name-simple">Категория</InputLabel>
                        <Input id="name-simple" value={value} onChange={this.handleChange} autoComplete='off' />
                    </FormControl>
                    <Zoom
                        in={!!value}
                        timeout={{enter: 500, exit: 500}}
                        unmountOnExit
                    >
                        <Button
                            variant="extendedFab"
                            color="secondary"
                            aria-label="Add"
                            className={classes.addButton}
                            onClick={this.onAddCategory}
                        >
                            <AddIcon />
                            Добавить
                        </Button>
                    </Zoom>
                </Grid>
            </div>

        )
    }
}

export default withStyles(styles)(CategoryInput);