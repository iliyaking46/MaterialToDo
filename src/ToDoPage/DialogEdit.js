import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import {withStyles} from "@material-ui/core/styles/index";

const styles = () => ({
    actions: {
        justifyContent: `space-around`,
    }
});

class DialogEdit extends React.Component {
    state = {
        value: this.props.value || ''
    };

    handleChange = event => {
        this.setState({
            value: event.target.value,
        });
    };

    render() {
        const {onClose, open, title, label, classes} = this.props;
        const {value} = this.state;
        return (
            <div>
                <Dialog
                    open={open}
                    keepMounted
                    onClose={() => onClose(false)}
                    maxWidth="sm"
                    fullWidth={true}
                >
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogContent>
                        <FormControl fullWidth >
                            <InputLabel htmlFor="name-simple">{label}</InputLabel>
                            <Input id="name-simple" value={value} onChange={this.handleChange} autoComplete='off'/>
                        </FormControl>
                    </DialogContent>
                    <DialogActions className={classes.actions}>
                        <Button onClick={() => onClose(false)} color="primary">

                            Отмена
                        </Button>
                        <Button onClick={() => onClose(this.state.value)} color="primary">
                            Применить
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(DialogEdit);