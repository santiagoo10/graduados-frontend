import React from 'react';
import { Login, LoginForm } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import ImageBackground from "../Images/background_a.jpg";
import ImageLogo from "../Images/cropped-favicon.png";

const styles = ({
    main: {
        backgroundImage:  `url(${ImageBackground})`,
    },
    avatar: {
        background:  `url(${ImageLogo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: 80,
    },
    icon: { display: 'none' },
});

const CustomLoginForm = withStyles({
    button: { background: '#F15922' },
})(LoginForm);

const CustomLoginPage = props => (
    <Login
        loginform={<CustomLoginForm />}
        {...props}
    />
);

export default withStyles(styles)(CustomLoginPage);
