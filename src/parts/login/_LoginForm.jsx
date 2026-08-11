import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import SSOLogin from './_SSOLogin.jsx';
import AdminLogin from './_AdminLogin.jsx';


function LoginForm() {
    const [mode, setMode] = useState('sso');

    return (
        <Form>
            {mode === 'sso'
                ? <SSOLogin onAdminLogin={() => setMode('admin')} />
                : <AdminLogin onSSOLogin={() => setMode('sso')} />}
        </Form>
    )
}

export default LoginForm