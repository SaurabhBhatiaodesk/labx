'use client';

import { useRouter } from 'next/navigation';
import Form from '@/components/PageForm/PageForm';

export default function AddPage() {
  const router = useRouter();

  const handleSubmit = (formData: { title: string; keywords: string; description: string; content: string }) => {
    // Mock adding data to the table
    console.log('Form submitted:', formData);

    // Redirect to the admin dashboard list
    router.push('/adminDeshboardList');
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#c4ced7' }}>
      <h2>Add Page</h2>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}
