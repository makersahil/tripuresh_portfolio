import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { patents } from '@tripuresh/api';
import Table from '@tripuresh/ui/Table';
import Pagination from '@tripuresh/ui/Pagination';

/**
 * Page listing patents authored or co-authored by Dr. Joshi. Visitors can
 * see the status and year of each patent.
 */
const PatentsPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const perPage = 10;
  const { data, isLoading } = useQuery(['patents', page], () => patents.list({ page, perPage }));
  const columns = [
    { key: 'title', header: 'Title' },
    { key: 'status', header: 'Status' },
    { key: 'year', header: 'Year' }
  ];
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Patents</h1>
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

export default PatentsPage;
