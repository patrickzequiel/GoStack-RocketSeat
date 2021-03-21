// eslint-disable-next-line no-use-before-define
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

// eslint-disable-next-line arrow-body-style
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/54329272?s=460&u=082247fc07ab60bcf25579dcffb9dfaf6ee6e3de&v=4"
            alt="Patrick Cruz"
          />
          <div>
            <strong>rocketseant/unform</strong>
            <p>Easy peasy highly scalabe ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/54329272?s=460&u=082247fc07ab60bcf25579dcffb9dfaf6ee6e3de&v=4"
            alt="Patrick Cruz"
          />
          <div>
            <strong>rocketseant/unform</strong>
            <p>Easy peasy highly scalabe ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/54329272?s=460&u=082247fc07ab60bcf25579dcffb9dfaf6ee6e3de&v=4"
            alt="Patrick Cruz"
          />
          <div>
            <strong>rocketseant/unform</strong>
            <p>Easy peasy highly scalabe ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

      </Repositories>
    </>
  );
};

export default Dashboard;
