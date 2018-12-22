import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { Site } from '../types';

interface IndexProps {
  data: {
    site: Site;
  };
}

export default function Index({ data: { site } }) {
  return <Layout site={site}>Landing Page</Layout>;
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`;
