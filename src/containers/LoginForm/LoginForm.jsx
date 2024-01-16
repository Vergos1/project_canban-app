import styles from './loginForm.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin } from '@react-oauth/google';
import {
   TextInput, PasswordInput, Paper, Group, Divider, Anchor, Stack, Container, LoadingOverlay
} from '@mantine/core';
import Title from '../../components/Title/Title.jsx';
import { authorizationThunk } from '../../store/slices/auth.slice.js';




const LoginForm = () => {
   const dispatch = useDispatch();

   //doc: State variables
   const isLoading = useSelector((state) => state.auth.isLoading);
   const [isAuth, setIsAuth] = useState(useSelector(state => state.auth.isAuth));

   useEffect(() => {
      setIsAuth(localStorage.getItem('isAuth') === 'true');
   }, [isLoading]);
   //doc: Effect hook to update isAuth based on isLoading value

   const form = useForm({
      initialValues: {
         nickname: '',
         password: ''
      },

      validate: {
         nickname: (value) => (
         value.length < 2 ? 'Nickname must have at least 2 letters' : null
         ),
         password: (value) => (
         value.length < 6 ? 'Password must have at least 6 characters' : null
         )
      }
   });
   const handleSubmit = async (values) => {
      console.log(values);
      try {
         await dispatch(authorizationThunk({
            username: values.nickname, password: values.password
         }));
      }
      catch (error) {
         console.log(error);
      }
   };

   return (
   <Container size={520}>
      <Title size={38} sx={{
         textAlign: 'center'
      }}>
         Login an Account
      </Title>
      <Paper pos='relative' shadow='md' radius='md' withBorder p={24} mt={30}>
         <LoadingOverlay visible={isLoading} zIndex={1000} loaderProps={{color: '#fff', type: 'bars'}} />

         <p>
            Welcome to Mantine, login with
         </p>

         <Group grow mb='md' mt='md'>
            <GoogleLogin
            onSuccess={(credentialResponse) => {
               console.log(credentialResponse);
            }}
            onError={() => {
               console.log('Login Failed');
            }}
            type='icon'
            shape='circle'
            locale='en'
            />
         </Group>

         <Divider label='Or continue with email' labelPosition='center' my='lg' />

         <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
               <TextInput
               label='Nickname'
               placeholder='Your nickname'
               {...form.getInputProps('nickname')}
               required
               />

               <PasswordInput
               label='Password'
               placeholder='Your password'
               {...form.getInputProps('password')}
               required
               />
            </Stack>

            <Group justify='space-between' mt='xl'>
               <Anchor component='button' type='button' c='dimmed' size='xs'>
                  <Link className={styles.link} to={'/registration'}>
                     Don't have an account? Register
                  </Link>
               </Anchor>
               {!isAuth && (<button className={styles.buttonSubmit} type='submit'>
                  Login
               </button>)}

            </Group>
         </form>
      </Paper>
   </Container>
   );
};

export default LoginForm;
