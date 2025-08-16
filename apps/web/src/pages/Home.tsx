import React from 'react';
import { useQuery } from 'react-query';
import { grants } from '@tripuresh/api';
import Card from '@tripuresh/ui/Card';

/**
 * Home page of the public site. Shows a welcome message and previews
 * the latest research grants. The number of items displayed can be
 * adjusted via the perPage parameter to grants.list().
 */
const Home: React.FC = () => {
  const { data, isLoading } = useQuery(['homeGrants'], () => grants.list({ page: 1, perPage: 3 }));
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Welcome</h1>
      <p className="mb-6">Explore the academic portfolio of Dr. Tripuresh Joshi including grants, publications and more.</p>
      {isLoading && <p>Loading...</p>}
      {data && data.data.map((grant) => (
        <Card key={grant.id} title={grant.title}>
          <p>{grant.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default Home;
