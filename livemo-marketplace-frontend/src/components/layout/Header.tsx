import {
  AppBar,
  Badge,
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useCartStore } from "../../stores/cartStore";

export function Header() {
  const itemsCount = useCartStore((s) => s.items.reduce((acc, it) => acc + it.quantity, 0));
  const isMockMode = (import.meta as any)?.env?.VITE_USE_MOCKS === "true";
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  function handleSearchSubmit(e: FormEvent) {
    e.preventDefault();
    const q = search.trim();
    const params = new URLSearchParams();
    if (q) params.set("type", q);
    const qs = params.toString();
    navigate(`/marketplace/livestock${qs ? `?${qs}` : ""}`);
  }

  const onHome = location.pathname === "/";

  return (
    <Box sx={{ position: "relative", zIndex: (t) => t.zIndex.appBar }}>
      <Box
        sx={(t) => ({
          bgcolor: t.palette.primary.main,
          color: "common.white",
          py: 0.5,
          fontSize: 13,
        })}
      >
        <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
          <Typography>Need some help?</Typography>
          {isMockMode && (
            <Chip size="small" label="Mock data mode" color="secondary" sx={{ fontWeight: 800 }} />
          )}
        </Container>
      </Box>

      <AppBar
        position="fixed"
        elevation={0}
        sx={(t) => ({
          bgcolor: t.palette.primary.main,
          color: "common.white",
          borderBottom: `1px solid ${t.palette.primary.dark}`,
        })}
      >
        <Container>
          <Toolbar disableGutters sx={{ gap: 2, minHeight: 72 }}>
            <Box component={RouterLink} to="/" sx={{ textDecoration: "none", color: "inherit", mr: 2 }}>
              <Typography variant="h6" fontWeight={900} sx={{ letterSpacing: 0.5 }}>
                Livemo Marketplace
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.85 }}>
                Buy livestock & farm supplies securely
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, mx: 1 }}>
              <Button component={RouterLink} to="/marketplace/livestock" color="inherit">
                Livestock
              </Button>
              <Button component={RouterLink} to="/marketplace/products" color="inherit">
                Products
              </Button>
              <Button href="#services" color="inherit">
                Services
              </Button>
              <Button href="#equipment" color="inherit">
                Equipment
              </Button>
              <Button href="#education" color="inherit">
                Education
              </Button>
              {onHome && (
                <Button href="#how-it-works" color="inherit">
                  How it works
                </Button>
              )}
              <Button href="#help" color="inherit">
                Help
              </Button>
            </Box>

            <Box sx={{ flex: 1 }} />

            <Box
              component="form"
              onSubmit={handleSearchSubmit}
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                maxWidth: 360,
                flex: 1,
              }}
            >
              <TextField
                size="small"
                fullWidth
                placeholder="Search for anything (e.g. calves, feed)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                  sx: {
                    bgcolor: "rgba(255,255,255,0.10)",
                    borderRadius: 999,
                    "&:hover": { bgcolor: "rgba(255,255,255,0.18)" },
                    color: "inherit",
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 1.5, alignItems: "center", ml: 2 }}>
              <Button
                component={RouterLink}
                to="/auth/login"
                color="inherit"
                variant="text"
                sx={{ display: { xs: "none", sm: "inline-flex" } }}
              >
                Login / Sign up
              </Button>
              <Button
                component={RouterLink}
                to="/marketplace/livestock"
                variant="contained"
                color="secondary"
                sx={{
                  fontWeight: 800,
                  px: 2.5,
                  borderRadius: 999,
                  bgcolor: (t) => t.palette.secondary.main,
                  color: "common.white",
                  "&:hover": { bgcolor: (t) => t.palette.secondary.dark },
                }}
              >
                Browse listings
              </Button>
              <IconButton component={RouterLink} to="/cart" color="inherit" aria-label="Cart">
                <Badge badgeContent={itemsCount} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
