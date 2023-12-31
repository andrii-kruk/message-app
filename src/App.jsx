import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('@pages/MainPage/MainPage.jsx'));
const LoginPage = lazy(() => import('@pages/LoginPage/LoginPage.jsx'));
const ProfilePage = lazy(() => import('@pages/ProfilePage/ProfilePage.jsx'));
const RegisterPage = lazy(() => import('@pages/RegisterPage/RegisterPage.jsx'));

import { Layout, Loader } from './components/index.js';

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
