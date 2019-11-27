import React from 'react';
import Layout from '../components/Layout';
import {Container} from '../components/Layout/layout.styles';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    </Container>
  </Layout>
);

export default IndexPage;
