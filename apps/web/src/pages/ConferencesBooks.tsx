import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { conferences } from '@tripuresh/api';
import Table from '@tripuresh/ui/Table';
import Pagination from '@tripuresh/ui/Pagination';

/**
 * Page listing conference presentations and books. Visitors can
 * differentiate between types and see publication years.
 */
const ConferencesBooksPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const perPage = 10;
  const { data, isLoading } = useQuery(['conferences-books', page], () => conferences.list({ page, perPage }));
  const columns = [
    { key: 'title', header: 'Title' },
    { key: 'type', header: 'Type' },
    { key: 'year', header: 'Year' }
  ];
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Conferences &amp; Books</h1>
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

export default ConferencesBooksPage;
