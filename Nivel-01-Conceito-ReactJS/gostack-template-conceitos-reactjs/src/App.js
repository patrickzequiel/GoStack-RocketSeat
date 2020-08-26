import React, { useState } from "react";
import api from './services/api';

import "./styles.css";

function App() {
  async function handleAddRepository(response) {
    api.post('repositories', {
      title: `Novo projeto ${Date.Now()}`,
      owner: 'Patrick Cruz'
    })
    const repositories = response.data
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          Repositório 1

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
