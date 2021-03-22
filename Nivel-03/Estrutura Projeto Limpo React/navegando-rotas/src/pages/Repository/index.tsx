// eslint-disable-next-line no-use-before-define
import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  repository: string;
}

// eslint-disable-next-line arrow-body-style
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return <h1>Repository:{params.repository}</h1>;
};

export default Repository;
