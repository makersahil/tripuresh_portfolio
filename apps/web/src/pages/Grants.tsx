import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { grants } from '@tripuresh/api';
import Table from '@tripuresh/ui/Table';
import Pagination from '@tripuresh/ui/Pagination';

/**
 * Page displaying a paginated list of research grants. Visitors can
 * browse through grants and learn about the funding that supports
 * Dr. Joshi's research.
 */
const GrantsPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const perPage = 10;
  const { data, isLoading } = useQuery(['grants', page], () => grants.list({ page, perPage }));
  const columns = [
    { key: 'title', header: 'Title' },
    { key: 'year', header: 'Year' },
    { key: 'amount', header: 'Amount' },
    { key: 'status', header: 'Status' }
  ];
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Research Grants</h1>
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

export default GrantsPage;
