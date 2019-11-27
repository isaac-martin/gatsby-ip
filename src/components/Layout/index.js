import React from 'react';
import PropTypes from 'prop-types';
import {StaticQuery, graphql} from 'gatsby';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from '../globalStyle';
import {MainWrapper} from './layout.styles';
import Header from '../Header';
import theme from '../../theme';

const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainWrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
        </MainWrapper>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
