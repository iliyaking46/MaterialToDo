import React from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

import {PhotoCard} from './PhotoCard'
import {styles} from './styles'

const cards = [1, 2, 3, 4];

class Album extends React.Component{
    state = {
        dialogOpened: false
    };

    handleClickOpen = () => {
        this.setState({dialogOpened: true});
    };

    handleClose = () => {
        this.setState({dialogOpened: false});
    };

    render() {
        const {classes} = this.props;
        const {dialogOpened} = this.state;

        return (
            <React.Fragment>
                    <DialogExample
                        open={dialogOpened}
                        onClose={this.handleClose}
                        classImage={classes.image}
                    />

                    {/* Hero unit */}
                    <div className={classes.heroUnit}>
                        <div className={classes.heroContent}>
                            <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
                                Album layout
                            </Typography>
                            <Typography variant="title" align="center" color="textSecondary" paragraph>
                                Something short and leading about the collection below—its contents, the creator, etc.
                                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                                entirely.
                            </Typography>
                            <div className={classes.heroButtons}>
                                <Grid container spacing={16} justify="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            Main call to action
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" color="primary">
                                            Secondary action
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(classes.layout, classes.cardGrid)}>
                        {/* End hero unit */}
                        <Grid container spacing={40}>
                            {cards.map(card => (
                                <Grid key={card} item sm={6} md={4} lg={3}>
                                    <PhotoCard
                                        openDialog={this.handleClickOpen}
                                        cardClass={classes.cardMedia}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </div>

            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Album);