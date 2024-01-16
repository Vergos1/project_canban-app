import styles from './registrationForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Paper,
    Text,
    Container,
    Group,
    Stack, LoadingOverlay
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { registrationThunk } from '../../store/slices/auth.slice.js';
import Title from '../../components/Title/Title.jsx';




const RegistrationForm = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.auth.isLoading);

    const form = useForm({
        initialValues: {
            nickname: '',
            email: '',
            password: '',
            confirmPassword: ''
        },

        validate: {
            nickname: (value) => (
             value.length < 2 ?
              'Nickname must have at least 2 letters' : null
            ),
            email: (value) => (
             /^\S+@\S+$/.test(value) ?
              null : 'Invalid email'
            ),
            password: (value) => (
             value.length < 6 ?
              'Password must have at least 6 characters' : null
            ),
            confirmPassword: (value, values) => (
             value !== values.password ?
              'Passwords must match' : null
            )
        }
    });
    const handleSubmit = async (values) => {
        console.log(values);
        try {
            await dispatch(registrationThunk({
                username: values.nickname,
                password: values.password,
                email: values.email
            }));
        }
        catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
     <Container size={520}>
         <Title size={38} sx={{
             textAlign: 'center'
         }}>
             Create an Account
         </Title>

         <Paper pos='relative' shadow='md' p={24} mt={30} radius='md'>
             <LoadingOverlay visible={isLoading} zIndex={1000} loaderProps={{ color: '#fff', type: 'bars' }} />
             <form onSubmit={form.onSubmit(handleSubmit)}>
                 <Stack>
                     <TextInput
                      label='Nickname'
                      placeholder='Nickname'
                      {...form.getInputProps('nickname')}
                      required
                     />
                     <TextInput
                      label='Email'
                      placeholder='your@mail.com'
                      {...form.getInputProps('email')}
                      required
                     />
                     <PasswordInput
                      label='Password'
                      placeholder='Your password'
                      {...form.getInputProps('password')}
                      required
                     />
                     <PasswordInput
                      label='Confirm password'
                      placeholder='Repeat your password'
                      {...form.getInputProps('confirmPassword')}
                      required
                     />
                 </Stack>
                 <Group position='apart' mt='xs'>
                     <Link
                      to={'/'}
                      className={styles.link}
                      size='sm'
                     >
                         Forgot password?
                     </Link>
                 </Group>
                 <button className={styles.buttonSubmit} type='submit'>
                     Sign Up
                 </button>
                 <Text size='sm' align='center' mt={5}>
                     Already have an account?{' '}
                     <Link
                      to={'/login'}
                      className={styles.link}
                      size='sm'
                     >
                         Sign IN
                     </Link>
                 </Text>
             </form>
         </Paper>
     </Container>
    );
};

export default RegistrationForm;