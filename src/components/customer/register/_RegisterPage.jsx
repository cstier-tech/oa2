import Body from '../../shared/_Main';
import Register from './_RegisterForm';

function RegisterPage({ activePage, onNavClick }){
    return(
        <Body pageClass="registration-page" pageTitle="Register" hasPageBody pageBodyClass="row">
            <div className='col-12 col-lg-9 col-xl-8'>
                <Register />
            </div>
        </Body>
    )
}

export default RegisterPage;