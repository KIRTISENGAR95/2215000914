import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { Feed } from './components/Feed';
import { TopUsers } from './components/TopUsers';
import { TrendingPosts } from './components/TrendingPosts';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ mb: 2 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Social Media Analytics
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 2 }}>
          <TopUsers />
          <TrendingPosts />
          <Feed />
        </Box>
      </Container>
    </Box>
  );
}

export default App;
