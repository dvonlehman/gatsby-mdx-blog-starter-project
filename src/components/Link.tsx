import React, { SFC } from 'react';
import GatsbyLink from 'gatsby-link';

interface LinkProps {
  to: string;
}

const Link: SFC<LinkProps> = props => {
  const internal = /^\/(?!\/)/.test(props.to);

  if (internal) {
    return <GatsbyLink to={props.to}>{props.children}</GatsbyLink>;
  }

  return <a href={props.to}>{props.children}</a>;
};

export default Link;
