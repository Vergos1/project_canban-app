import styles from './loginPage.module.scss';
import LoginForm from '../../containers/LoginForm/LoginForm.jsx';




const LoginPage = () => {
    return (
     <div>
         <div className='container'>
             <LoginForm />
         </div>
     </div>
    );
};

export default LoginPage;
