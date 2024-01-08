import styles from './registrationPage.module.scss';
import { useDispatch } from 'react-redux';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Paper,
  Text,
  Container,
  Group,
  Button,
  Stack,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { registerUser } from '../../store/slices/auth.slice.js';
import Title from '../../components/Title/Title.jsx';



const RegistrationPage = () => {
  const dispatch = useDispatch();

  const form = useForm({
    initialValues: {
      nickname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      nickname: (value) => (value.length < 2 ? 'Nickname must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 6 ? 'Password must have at least 6 characters' : null),
      confirmPassword: (value, values) => (value !== values.password ? 'Passwords must match' : null),
    },
  });
  const handleSubmit = async (values) => {
    console.log(values);
    try {
      await dispatch(registerUser({
        username: values.nickname,
        password: values.password,
        email: values.email,
      }));
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <>
      <div className={styles.registrationPage}>
        <div className='container'>
          <Container size={520} my={40}>
            <Title size={38} sx={{
              textAlign: 'center',
            }}>
              Create an Account
            </Title>

            <Paper withBorder shadow='md' p={24} mt={30} radius='md'>
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
                <Button fullWidth mt='xl' type='submit'>
                  Sign Up
                </Button>
                <Text size='sm' align='center' mt={5}>
                  Already have an account ?{' '}
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
        </div>
      </div>
    </>
  )
    ;
};

export default RegistrationPage;
