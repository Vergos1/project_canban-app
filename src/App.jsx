import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import './styles/style.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
