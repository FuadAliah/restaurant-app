import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container maxWidth="sm" style={{ height: '100vh', padding: 0 }}>
      <Outlet />
    </Container>
  );
};

export default Layout;
