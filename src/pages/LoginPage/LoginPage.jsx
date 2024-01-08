import styles from './loginPage.module.scss';
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Container,
} from '@mantine/core';
import Title from '../../components/Title/Title.jsx';

// import { GoogleButton } from './GoogleButton';
// import { TwitterButton } from './TwitterButton';

const LoginPage = () => {
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });
  return (
    <>
      <div className={styles.loginPage}>
        <div className='container'>
          <Container size={420} my={40}>
            <Title size={38} sx={{
              textAlign: 'center',
            }}>
              Login an Account
            </Title>
            <Paper radius='md' withBorder p={24} mt={30}>
              <p>
                Welcome to Mantine, {type} with
              </p>

              <Group grow mb='md' mt='md'>
                {/*<GoogleButton radius='xl'>Google</GoogleButton>*/}
                {/*<TwitterButton radius='xl'>Twitter</TwitterButton>*/}
              </Group>

              <Divider label='Or continue with email' labelPosition='center' my='lg' />

              <form onSubmit={form.onSubmit(() => {
              })}>
                <Stack>
                  {type === 'register' && (
                    <TextInput
                      label='Name'
                      placeholder='Your name'
                      value={form.values.name}
                      onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                      radius='md'
                    />
                  )}

                  <TextInput
                    required
                    label='Email'
                    placeholder='hello@mantine.dev'
                    value={form.values.email}
                    onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                    error={form.errors.email && 'Invalid email'}
                    radius='md'
                  />

                  <PasswordInput
                    required
                    label='Password'
                    placeholder='Your password'
                    value={form.values.password}
                    onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                    error={form.errors.password && 'Password should include at least 6 characters'}
                    radius='md'
                  />

                  {type === 'register' && (
                    <Checkbox
                      label='I accept terms and conditions'
                      checked={form.values.terms}
                      onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                    />
                  )}
                </Stack>

                <Group justify='space-between' mt='xl'>
                  <Anchor component='button' type='button' c='dimmed' onClick={() => toggle()} size='xs'>
                    {type === 'register'
                      ? 'Already have an account? Login'
                      : 'Don\'t have an account? Register'}
                  </Anchor>
                  <Button type='submit' radius='xl'>
                    {upperFirst(type)}
                  </Button>
                </Group>
              </form>
            </Paper>
          </Container>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
