import { Box, Container, IconButton, Link, Stack, TextField, Typography, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link as RouterLink } from "react-router-dom";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={(t) => ({
        mt: 6,
        bgcolor: t.palette.primary.main,
        color: "common.white",
      })}
    >
      <Container sx={{ py: 5 }}>
        <Stack spacing={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              gap: 2,
            }}
          >
            <Box flex={1}>
              <Typography variant="h6" fontWeight={900}>
                Subscribe to get weekly news, articles and listings
              </Typography>
            </Box>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              <TextField
                size="small"
                placeholder="Enter your email"
                type="email"
                sx={{
                  minWidth: { xs: "100%", sm: 260 },
                  bgcolor: "common.white",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 1,
                  },
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  px: 3,
                  fontWeight: 800,
                  borderRadius: 1,
                }}
              >
                Join Us
              </Button>
            </Stack>
          </Box>

          <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 4, md: 10 }}>
            <Box flex={1}>
              <Typography variant="h6" fontWeight={900}>
                Livemo Marketplace
              </Typography>
              <Typography sx={{ mt: 1, maxWidth: 420, opacity: 0.9 }}>
                A modern marketplace for livestock, products and farm services 
                with verified sellers and secure payments.
              </Typography>
            </Box>

            <Stack direction={{ xs: "column", sm: "row" }} gap={{ xs: 3, sm: 8 }}>
              <Box>
                <Typography fontWeight={800} sx={{ mb: 1 }}>
                  Services
                </Typography>
                <Stack gap={0.5}>
                  <Link component={RouterLink} to="/marketplace/livestock" underline="hover" color="inherit">
                    Buy & sell livestock
                  </Link>
                  <Link component={RouterLink} to="/marketplace/products?category=feed" underline="hover" color="inherit">
                    Feed & bedding
                  </Link>
                  <Link component={RouterLink} to="/marketplace/products" underline="hover" color="inherit">
                    Membership & offers
                  </Link>
                  <Link href="#advertising" underline="hover" color="inherit">
                    Advertising
                  </Link>
                </Stack>
              </Box>

              <Box>
                <Typography fontWeight={800} sx={{ mb: 1 }}>
                  Support
                </Typography>
                <Stack gap={0.5}>
                  <Link href="#help" underline="hover" color="inherit">
                    Help & FAQ
                  </Link>
                  <Link href="#app" underline="hover" color="inherit">
                    Download app
                  </Link>
                  <Link href="#sitemap" underline="hover" color="inherit">
                    Sitemap
                  </Link>
                </Stack>
              </Box>

              <Box>
                <Typography fontWeight={800} sx={{ mb: 1 }}>
                  Company
                </Typography>
                <Stack gap={0.5}>
                  <Link href="#blog" underline="hover" color="inherit">
                    Blog & podcasts
                  </Link>
                  <Link href="#about" underline="hover" color="inherit">
                    About
                  </Link>
                </Stack>
              </Box>

              <Box>
                <Typography fontWeight={800} sx={{ mb: 1 }}>
                  Legal
                </Typography>
                <Stack gap={0.5}>
                  <Link component={RouterLink} to="/terms" underline="hover" color="inherit">
                    Terms & privacy
                  </Link>
                  <Link href="#cookies" underline="hover" color="inherit">
                    Manage cookies
                  </Link>
                </Stack>
              </Box>
            </Stack>
          </Stack>

          <Box
            sx={{
              mt: 2,
              pt: 3,
              borderTop: "1px solid rgba(255,255,255,0.25)",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              gap: 2,
              fontSize: 13,
            }}
          >
            <Typography sx={{ opacity: 0.9 }}>
              © {new Date().getFullYear()} Livemo. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton size="small" color="inherit" aria-label="Livemo on Facebook">
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" color="inherit" aria-label="Livemo on Twitter">
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" color="inherit" aria-label="Livemo on Instagram">
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
