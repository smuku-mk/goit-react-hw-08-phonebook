import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Container } from './SharedLayout.styled';
import { Header } from '../Header';

export const SharedLayout = () => {
  return (
    <Container>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};
