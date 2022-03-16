import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Logo from "../assets/where is my show-logos_transparent.png";

const pages = ["TV Shows", "Movies", "Shows available for you"];

const ResponsiveAppBar = () => {
  return (
    <Box >
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" }, flexGrow: 1 }}
            >
              <img src={Logo} height="30" alt="logo" />
            </Typography>
           
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default ResponsiveAppBar;
