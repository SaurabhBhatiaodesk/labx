// Import necessary libraries and types
import { Metadata } from 'next';
import { Typography, Box } from '@mui/material';

// Function to fetch data from the server
async function fetchPageData(title: string) {

  const res = await fetch(`http://localhost:7000/api/admin/title/${encodeURIComponent(title)}`, {
    cache: 'no-store', // Ensures the request always fetches the latest data
  });

  if (!res.ok) {
    // Try to parse the error message from the server response
    const errorData = await res.json().catch(() => null);
    throw new Error(errorData?.message || 'Failed to fetch data');
  }

  return res.json();
}

// Generate metadata for dynamic SEO
export async function generateMetadata({ params }: { params: { title: string } }): Promise<Metadata> {
  try {
    const data = await fetchPageData(params.title);
    const page = data.data;

    return {
      title: page.seoPageTitle,
      description: page.pageDescription,
    };
  } catch (error) {
    return {
      title: 'Page not found',
      description: (error as Error).message || 'The requested page could not be found',
    };
  }
}

// Page component to display the details
export default async function PageDetail({ params }: { params: { title: string } }) {
  try {
    const data = await fetchPageData(params.title);
    const page = data.data;

    console.log(page, "pagepagepagepage");

    return (
      <Box sx={{ padding: 4  , backgroundColor:'greenyellow' }}>
        <Typography variant="h4" gutterBottom>{page.pageName}</Typography>
        {/* <Typography variant="subtitle1" gutterBottom>SEO Title: {page.seoPageTitle}</Typography> */}
        {/* <Typography variant="subtitle1" gutterBottom>Keywords: {page.pageKeywords}</Typography> */}
        {/* <Typography variant="body1" gutterBottom>Description: {page.pageDescription}</Typography> */}
        <Box sx={{ mt: 2 }} dangerouslySetInnerHTML={{ __html: page.pageEditor }} />
      </Box>
    );
  } catch (error) {
    // Show the server's error message if available
    const errorMessage = (error as Error).message || 'Error loading page details or page not found';
    return (
      <Box sx={{ padding: 4 }}>
        <Typography variant="h6" color="error">
          {errorMessage}
        </Typography>
      </Box>
    );
  }
}
