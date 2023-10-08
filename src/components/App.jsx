import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks';

import { SharedLayout } from './SharedLayout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

const lazyLoad = page => lazy(() => import('pages').then(module => ({ default: module[page] })));
const Home = lazyLoad('Home');
const Login = lazyLoad('Login');
const Register = lazyLoad('Register');
const Contacts = lazyLoad('Contacts');

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<Register />} />} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />} />
          <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts />} />} />
        </Route>
      </Routes>
    </>
  );
};
