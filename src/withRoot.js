import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import indigo from '@material-ui/core/colors/indigo';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
    palette: {
        primary: {
            light: indigo[600],
            main: indigo[800],
            dark: indigo[900],
            contrastText: '#fff',
        },
        secondary: {
            light: pink[300],
            main: pink[500],
            dark: pink[700],
        },
    },
});

function withRoot(Component) {
    function WithRoot(props) {
        // MuiThemeProvider makes the theme available down the React tree
        // thanks to React context.
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...props} />
            </MuiThemeProvider>
        );
    }

    return WithRoot;
}

export default withRoot;