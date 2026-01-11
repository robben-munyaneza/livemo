import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function AppLayout() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" sx={{ overflowX: "hidden" }}>
      <Header />
      <Box
        component="main"
        flex={1}
        sx={{
          pt: { xs: 11, md: 12 },
          pb: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth={false}>
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
