import React from 'react';
import StickyBox from 'react-sticky-box';

import FollowSuggestions from '../FollowSuggestions';
import News from '../News';
import List from '../List';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles';

const RightColumn: React.FC = () => {
  return(
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List 
            title="Talvez você curta" 
            elements={[
              <FollowSuggestions name="Iago Silvany" nickname="@iagosilvany" />,
              <FollowSuggestions name="Paulo Cardoso" nickname="@cardoso222" />,
              <FollowSuggestions name="Silas Xavier" nickname="@sxavierr" />
            ]}
          />

          <List 
          title="O que está acontecendo"
          elements={[
            <News />,
            <News />,
            <News />
          ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default RightColumn;