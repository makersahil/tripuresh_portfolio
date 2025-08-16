import React from 'react';
import { useQuery } from 'react-query';
import { profile } from '@tripuresh/api';

/**
 * About page which displays the professor's profile information. Content
 * is fetched from the backend to ensure it stays in sync with updates
 * made in the CMS.
 */
const About: React.FC = () => {
  const { data, isLoading } = useQuery(['profile'], () => profile.get());
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">About Me</h1>
      {isLoading && <p>Loading...</p>}
      {data && (
        <div className="space-y-4">
          {data.photoUrl && (
            <img src={data.photoUrl} alt={data.name} className="max-w-xs rounded-lg" />
          )}
          <h2 className="text-xl font-semibold">{data.name}</h2>
          <p className="text-lg whitespace-pre-line">{data.biography}</p>
        </div>
      )}
    </div>
  );
};

export default About;
