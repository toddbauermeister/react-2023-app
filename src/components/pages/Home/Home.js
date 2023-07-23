import { Button, Box } from "@mui/material";

const Home = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log('Sign Out Clicked');
  }

  return <div>
    <h1>Welcome Home, You Are Logged In</h1>;
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign Out
      </Button>
    </Box>
  </div>
};

export default Home;