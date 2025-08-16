import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { grants } from '@tripuresh/api';
import Table from '@tripuresh/ui/Table';
import Pagination from '@tripuresh/ui/Pagination';
import Button from '@tripuresh/ui/Button';

/**
 * Administrative listing for grants. Allows the admin to view and delete
 * existing grant records. Editing and creation screens can be added
 * later.
 */
const GrantsPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const perPage = 10;
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(['admin_grants', page], () => grants.list({ page, perPage }));
  const deleteMutation = useMutation((id: string) => grants.remove(id), {
    onSuccess: () => queryClient.invalidateQueries(['admin_grants'])
  });

  const columns: any[] = [
    { key: 'title', header: 'Title' },
    { key: 'year', header: 'Year' },
    { key: 'amount', header: 'Amount' },
    { key: 'status', header: 'Status' },
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
      <h1 className="text-2xl font-semibold mb-4">Grants</h1>
      <div className="mb-4">
        <Button variant="primary">Add Grant</Button>
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

export default GrantsPage;
