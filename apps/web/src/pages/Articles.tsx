import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { articles } from '@tripuresh/api';
import Table from '@tripuresh/ui/Table';
import Pagination from '@tripuresh/ui/Pagination';

/**
 * Page listing journal articles authored by Dr. Joshi. Includes
 * pagination and basic metadata such as the journal name and year.
 */
const ArticlesPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const perPage = 10;
  const { data, isLoading } = useQuery(['articles', page], () => articles.list({ page, perPage }));
  const columns = [
    { key: 'title', header: 'Title' },
    { key: 'journal', header: 'Journal' },
    { key: 'year', header: 'Year' }
  ];
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Journal Articles</h1>
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

export default ArticlesPage;
