import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import './styles/style.scss';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './Layout.jsx';



const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.jsx'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage.jsx'));

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={'/login'} element={<LoginPage />} />
            <Route path={'/registration'} element={<RegistrationPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
