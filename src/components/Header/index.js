import {Link} from 'gatsby';
import React from 'react';
import {Container} from '../Layout/layout.styles';
import * as SC from './styles';

const Header = ({siteTitle}) => (
  <SC.Header>
    <Container>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </Container>
  </SC.Header>
);

export default Header;
