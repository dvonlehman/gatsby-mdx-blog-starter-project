import React, { Fragment, SFC } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/tag';
import { injectGlobal } from 'styled-components';

import 'prismjs/themes/prism-okaidia.css';

import Link from './Link';
import mdxComponents from './mdx';
import { Site, FrontMatter } from '../types';

// ${() => {
//   /* Override PrismJS Defaults */ return null;
// }}

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
  }

  pre {
    background-color: #2f1e2e !important;
    border-radius: 4px;
    font-size: 14px;
  }

  .gatsby-highlight-code-line {
    background-color: #4f424c;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 1em;
  }
`;

const NAVIGATION = [
  { to: '/', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: 'https://roadtoreact.com', label: 'Courses' },
];

interface LayoutProps {
  site: Site;
  frontmatter?: FrontMatter;
}

const Layout: SFC<LayoutProps> = props => {
  const {
    title,
    description: siteDescription,
    keywords: siteKeywords,
  } = props.site.siteMetadata;

  const {
    keywords: frontmatterKeywords,
    description: frontmatterDescription,
  } = props.frontmatter;

  const keywords = (frontmatterKeywords || siteKeywords).join(', ');
  const description = frontmatterDescription || siteDescription;

  return (
    <>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
        ]}
      >
        <html lang="en" />
      </Helmet>

      <MDXProvider components={mdxComponents}>
        <Fragment>
          <ul>
            {NAVIGATION.map(navigation => (
              <li key={navigation.label}>
                <Link to={navigation.to}>{navigation.label}</Link>
              </li>
            ))}
          </ul>

          {props.children}
        </Fragment>
      </MDXProvider>
    </>
  );
};

export default Layout;

export const pageQuery = graphql`
  fragment site on Site {
    siteMetadata {
      title
      description
      author
      keywords
    }
  }
`;
