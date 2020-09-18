import React from 'react';

import Feed from '../Feed';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage
} from './styles';

const ProfilePage: React.FC = () => {
  return(
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Evandro Marinho</h1>
        <h2>@evanforgotlastone</h2>
        <p>
          Web Dev in Development
        </p>
        <ul>
          <li>
            <LocationIcon />
            Santa Cruz do Capibaribe - PE, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 30 de março de 1994
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>32</strong>
          </span>
          <span>
            <strong>28 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;