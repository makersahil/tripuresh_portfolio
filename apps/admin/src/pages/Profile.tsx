import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from 'react-query';
import { profile } from '@tripuresh/api';
import Input from '@tripuresh/ui/Input';
import Button from '@tripuresh/ui/Button';

/**
 * Profile editor for administrators. Allows editing of the public
 * profile information such as name, biography and contact details.
 */
const ProfilePage: React.FC = () => {
  const { data, isLoading } = useQuery('admin_profile', () => profile.get());
  const [form, setForm] = useState<any>(null);
  const updateMutation = useMutation((updated: any) => profile.update(updated));

  useEffect(() => {
    if (data) setForm(data);
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!form) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMutation.mutate(form);
  };

  if (isLoading || !form) return <p>Loading...</p>;
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <div>
          <label className="block mb-1 text-sm">Name</label>
          <Input name="name" value={form.name} onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-1 text-sm">Biography</label>
          <textarea
            name="biography"
            value={form.biography}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            rows={6}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm">Contact Email</label>
          <Input name="contactEmail" value={form.contactEmail} onChange={handleChange} />
        </div>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default ProfilePage;
