import React from 'react';

import SideBar from '../components/SideBar';
import MiddleColumn from '../components/MiddleColumn';
import RightColumn from '../components/RightColumn';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return(
    <Container>
      <Wrapper>
        <SideBar />
        <MiddleColumn />
        <RightColumn />
      </Wrapper>
    </Container>
  );
}

export default Layout;