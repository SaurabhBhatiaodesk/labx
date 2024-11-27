import { Metadata } from 'next';
import { Typography, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';

// Function to fetch data from the server
async function fetchPageData(title: string) {
  const res = await fetch(`https://labxbackend.labxrepair.com.au/api/admin/title/${encodeURIComponent(title)}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
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
      description: `${page.pageDescription} Keywords: ${page.pageKeywords}`, // Add keywords to the description
    };
  } catch (error) {
    return {
      title: 'Page not found',
      description: (error as Error).message || 'The requested page could not be found',
    };
  }
}


// Utility function to replace underscores with spaces
function formatPageName(pageName: string): string {
  return pageName.replace(/_/g, ' ');
}

// Page component
export default async function PageDetail({ params }: { params: { title: string } }) {
  try {
    const data = await fetchPageData(params.title);
    const page = data.data;

    return (
      <Box sx={{ padding: 4, backgroundColor: 'white' }}>
        {/* Title Section */}
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: 'black',
            backgroundColor: 'white',
            padding: 2,
            borderRadius: 2,
          }}
        >
          {formatPageName(page.pageName)}
        </Typography>

      
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {page.images.map((image: string, index: number) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                  borderRadius: 3,
                  overflow: 'hidden',
                }}
              >
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Image ${index + 1}`}
                  sx={{ height: 200 }}
                />
                <CardContent>
                 
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            backgroundColor: '#f4f4f4',
            borderRadius: 2,
            boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            padding: 3,
            marginTop: 4,
          }}
          dangerouslySetInnerHTML={{ __html: page.pageEditor }}
        />
      </Box>
    );
  } catch (error) {
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
