import styles from './registrationPage.module.scss';
import RegistrationForm from '../../containers/RegistrationForm/RegistrationForm.jsx';




const RegistrationPage = () => {
    return (
     <div>
         <div className='container'>
             <RegistrationForm />
         </div>
     </div>
    );
};

export default RegistrationPage;
