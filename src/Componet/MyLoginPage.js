import React, {useState} from "react";
import {useLogin, useNotify, Notification} from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';

const MyLoginPage = (
    // eslint-disable-next-line react/prop-types
    { theme }
    ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const submit = (e) => {
        e.preventDefault();
        login({email, password})
            .catch(() => notify('Invalid email or password'));
    }
    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={submit}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={ e => setEmail(e.target.value)}/>
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Notification/>
            </form>
        </ThemeProvider>
    );

};

export default MyLoginPage;
