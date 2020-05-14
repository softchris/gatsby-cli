import React from 'react';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <React.Fragment>
    <div>Component with data</div>
  </React.Fragment>
)

export const query = graphql `
  query { }
`