import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { certifications } from '@tripuresh/api';
import Table from '@tripuresh/ui/Table';
import Pagination from '@tripuresh/ui/Pagination';

/**
 * Page listing professional certifications obtained by Dr. Joshi. Shows
 * awarding institution and the year.
 */
const CertificationsPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const perPage = 10;
  const { data, isLoading } = useQuery(['certifications', page], () => certifications.list({ page, perPage }));
  const columns = [
    { key: 'title', header: 'Title' },
    { key: 'institution', header: 'Institution' },
    { key: 'year', header: 'Year' }
  ];
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Certifications</h1>
      {isLoading && <p>Loading...</p>}
      {data && (
        <>
          <Table columns={columns} data={data.data} />
          <Pagination page={page} total={data.total} perPage={perPage} onChange={setPage} />
        </>
      )}
    </div>
  );
};

export default CertificationsPage;
