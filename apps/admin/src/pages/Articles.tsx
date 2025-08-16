import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { articles } from '@tripuresh/api';
import Table from '@tripuresh/ui/Table';
import Pagination from '@tripuresh/ui/Pagination';
import Button from '@tripuresh/ui/Button';

/**
 * Administrative listing for articles. Allows the admin to view and
 * delete existing records. Editing and creation screens can be added.
 */
const ArticlesPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const perPage = 10;
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(['admin_articles', page], () => articles.list({ page, perPage }));
  const deleteMutation = useMutation((id: string) => articles.remove(id), {
    onSuccess: () => queryClient.invalidateQueries(['admin_articles'])
  });
  const columns: any[] = [
    { key: 'title', header: 'Title' },
    { key: 'journal', header: 'Journal' },
    { key: 'year', header: 'Year' },
    {
      key: 'actions',
      header: 'Actions',
      render: (_: any, row: any) => (
        <div className="space-x-2">
          <Button variant="secondary">Edit</Button>
          <Button variant="danger" onClick={() => deleteMutation.mutate(row.id)}>
            Delete
          </Button>
        </div>
      )
    }
  ];
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Articles</h1>
      <div className="mb-4">
        <Button variant="primary">Add Article</Button>
      </div>
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
