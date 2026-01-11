import {
  Alert,
  Box,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ListingCard } from "../components/ListingCard";
import { fetchProducts } from "../lib/marketplaceApi";
import { getNumberParam, setSearchParam } from "../lib/queryParams";

export function ProductsMarketplacePage() {
  const [params, setParams] = useSearchParams();

  const query = useMemo(
    () => ({
      category: params.get("category") ?? undefined,
      brand: params.get("brand") ?? undefined,
      minPrice: getNumberParam(params, "minPrice"),
      maxPrice: getNumberParam(params, "maxPrice"),
    }),
    [params]
  );

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", query],
    queryFn: () => fetchProducts(query),
  });
  const mockProducts = [
    {
      id: "products-mock-1",
      title: "Premium Mixed Grain Feed (50kg)",
      location: "Livemo Supply Hub",
      type: "product" as const,
      price: 45,
      imageUrl:
        "https://images.unsplash.com/photo-1599059847935-0c07c0501c63?auto=format&fit=crop&w=1200&q=60",
      certifications: ["For all livestock"],
    },
    {
      id: "products-mock-2",
      title: "Complete Vaccination Kit",
      location: "VetCare Partners",
      type: "product" as const,
      price: 120,
      imageUrl:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=60",
      certifications: ["Vet approved"],
    },
    {
      id: "products-mock-3",
      title: "Digital Livestock Scale",
      location: "FarmTech Store",
      type: "product" as const,
      price: 650,
      imageUrl:
        "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1200&q=60",
      certifications: ["Warranty included"],
    },
  ];

  const listings = Array.isArray(data) && data.length > 0 ? data : mockProducts;

  return (
    <Stack spacing={2}>
      <Typography variant="h4" fontWeight={800}>
        Products Marketplace
      </Typography>

      <Paper sx={{ p: 2, borderRadius: 3 }}>
        <Typography fontWeight={800} sx={{ mb: 1 }}>
          Filters
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              select
              label="Category"
              value={params.get("category") ?? ""}
              onChange={(e) => setParams(setSearchParam(params, "category", e.target.value))}
              fullWidth
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="feed">Feed</MenuItem>
              <MenuItem value="veterinary">Veterinary</MenuItem>
              <MenuItem value="equipment">Equipment</MenuItem>
              <MenuItem value="supplements">Supplements</MenuItem>
              <MenuItem value="supplies">Supplies</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              label="Brand"
              value={params.get("brand") ?? ""}
              onChange={(e) => setParams(setSearchParam(params, "brand", e.target.value))}
              fullWidth
            />
          </Grid>

          <Grid item xs={6} md={2}>
            <TextField
              label="Min price"
              type="number"
              value={params.get("minPrice") ?? ""}
              onChange={(e) => setParams(setSearchParam(params, "minPrice", e.target.value))}
              fullWidth
            />
          </Grid>

          <Grid item xs={6} md={2}>
            <TextField
              label="Max price"
              type="number"
              value={params.get("maxPrice") ?? ""}
              onChange={(e) => setParams(setSearchParam(params, "maxPrice", e.target.value))}
              fullWidth
            />
          </Grid>
        </Grid>
      </Paper>

      {isError && (
        <Alert severity="error">
          Unable to load product listings. Make sure the backend is running and accessible via `/api`.
        </Alert>
      )}

      {isLoading ? (
        <Typography color="text.secondary">Loading...</Typography>
      ) : (
        <Box>
          <Grid container spacing={3}>
            {listings.map((listing) => (
              <Grid item key={listing.id} xs={12} sm={6} md={4}>
                <ListingCard listing={listing} />
              </Grid>
            ))}
          </Grid>

          {!isError && listings.length === 0 && (
            <Typography color="text.secondary" sx={{ mt: 2 }}>
              No results. Try adjusting your filters.
            </Typography>
          )}
        </Box>
      )}
    </Stack>
  );
}
