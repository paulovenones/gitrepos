import React, { useState, useEffect } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, List } from './styles';

function Main() {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    const localRepositories = localStorage.getItem('repositories');

    if (localRepositories) {
      setRepositories(JSON.parse(localRepositories));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('repositories', JSON.stringify(repositories));
  }, [repositories]);

  function handleInputChange(e) {
    setNewRepo(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    setSubmitError(false);
    try {
      if (newRepo === '')
        throw new Error('Você precisa indicar um repositório');

      const hasRepo = repositories.find((r) => r.name === newRepo);

      if (hasRepo) throw new Error('Repositório duplicado');

      const response = await api.get(`/repos/${newRepo}`);
      setNewRepo('');

      const data = {
        name: response.data.full_name,
      };

      setRepositories([...repositories, data]);
    } catch (err) {
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onSubmit={handleSubmit} error={submitError}>
        <input
          type="text"
          placeholder="Adicionar repositório"
          value={newRepo}
          onChange={handleInputChange}
        />

        <SubmitButton loading={loading}>
          {loading ? (
            <FaSpinner color="#FFF" size="14" />
          ) : (
            <FaPlus color="fff" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositories.map((repository) => (
          <li key={repository.name}>
            <span>{repository.name}</span>
            <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
              Detalhes
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
}

export default Main;
