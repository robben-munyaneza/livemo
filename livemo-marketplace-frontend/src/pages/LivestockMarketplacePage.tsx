import {
  Alert,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormLabel,
  IconButton,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import ViewListIcon from "@mui/icons-material/ViewList";
import GridViewIcon from "@mui/icons-material/GridView";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ListingCard } from "../components/ListingCard";
import { fetchLivestock } from "../lib/marketplaceApi";
import { getNumberParam, setSearchParam } from "../lib/queryParams";

export function LivestockMarketplacePage() {
  const [params, setParams] = useSearchParams();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [filtersOpen, setFiltersOpen] = useState(false);

  const viewMode = (params.get("view") ?? "grid") as "grid" | "list";
  const sort = params.get("sort") ?? "newest";

  const query = useMemo(
    () => ({
      type: params.get("type") ?? undefined,
      location: params.get("location") ?? undefined,
      certification: params.get("certification") ?? undefined,
      gender: params.get("gender") ?? undefined,
      availability: params.get("availability") ?? undefined,
      minAge: getNumberParam(params, "minAge"),
      maxAge: getNumberParam(params, "maxAge"),
      minWeight: getNumberParam(params, "minWeight"),
      maxWeight: getNumberParam(params, "maxWeight"),
      minPrice: getNumberParam(params, "minPrice"),
      maxPrice: getNumberParam(params, "maxPrice"),
      sort: sort || undefined,
    }),
    [params, sort]
  );

  const { data, isLoading, isError } = useQuery({
    queryKey: ["livestock", query],
    queryFn: () => fetchLivestock(query),
  });
  const mockListings = [
    {
      id: "plp-mock-1",
      title: "Premium Holstein Cow",
      location: "Green Valley Farm",
      type: "livestock" as const,
      price: 1200,
      imageUrl:
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=60",
      certifications: ["Health certified", "Vaccinated"],
    },
    {
      id: "plp-mock-2",
      title: "Boer Goat - 6 months",
      location: "Happy Hills Ranch",
      type: "livestock" as const,
      price: 350,
      imageUrl:
        "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=60",
      certifications: ["Vaccinated"],
    },
    {
      id: "plp-mock-3",
      title: "Flock of Dorper Sheep (5)",
      location: "Sunrise Farm",
      type: "livestock" as const,
      price: 1800,
      imageUrl:
        "https://images.unsplash.com/photo-1548658166-136d9f6a7e0b?auto=format&fit=crop&w=1200&q=60",
      certifications: ["Health certified"],
    },
  ];

  const listings = Array.isArray(data) && data.length > 0 ? data : mockListings;

  const filtersBody = (
    <Stack spacing={2}>
      <Box>
        <FormLabel sx={{ fontWeight: 800, mb: 1 }}>Animal</FormLabel>
        <TextField
          select
          label="Type"
          value={params.get("type") ?? ""}
          onChange={(e) => setParams(setSearchParam(params, "type", e.target.value))}
          fullWidth
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="cattle">Cattle</MenuItem>
          <MenuItem value="sheep">Sheep</MenuItem>
          <MenuItem value="goat">Goat</MenuItem>
          <MenuItem value="poultry">Poultry</MenuItem>
        </TextField>
      </Box>

      <Box>
        <TextField
          select
          label="Gender"
          value={params.get("gender") ?? ""}
          onChange={(e) => setParams(setSearchParam(params, "gender", e.target.value))}
          fullWidth
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </TextField>
      </Box>

      <Divider />

      <Box>
        <FormLabel sx={{ fontWeight: 800, mb: 1 }}>Price</FormLabel>
        <Grid container spacing={1.5}>
          <Grid item xs={6}>
            <TextField
              label="Min"
              type="number"
              value={params.get("minPrice") ?? ""}
              onChange={(e) => setParams(setSearchParam(params, "minPrice", e.target.value))}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Max"
              type="number"
              value={params.get("maxPrice") ?? ""}
              onChange={(e) => setParams(setSearchParam(params, "maxPrice", e.target.value))}
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <FormLabel sx={{ fontWeight: 800, mb: 1 }}>Age (months)</FormLabel>
        <Grid container spacing={1.5}>
          <Grid item xs={6}>
            <TextField
              label="Min"
              type="number"
              value={params.get("minAge") ?? ""}
              onChange={(e) => setParams(setSearchParam(params, "minAge", e.target.value))}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Max"
              type="number"
              value={params.get("maxAge") ?? ""}
              onChange={(e) => setParams(setSearchParam(params, "maxAge", e.target.value))}
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <FormLabel sx={{ fontWeight: 800, mb: 1 }}>Weight (kg)</FormLabel>
        <Grid container spacing={1.5}>
          <Grid item xs={6}>
            <TextField
              label="Min"
              type="number"
              value={params.get("minWeight") ?? ""}
              onChange={(e) => setParams(setSearchParam(params, "minWeight", e.target.value))}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Max"
              type="number"
              value={params.get("maxWeight") ?? ""}
              onChange={(e) => setParams(setSearchParam(params, "maxWeight", e.target.value))}
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>

      <Divider />

      <Box>
        <FormLabel sx={{ fontWeight: 800, mb: 1 }}>Location & availability</FormLabel>
        <Stack spacing={1.5}>
          <TextField
            label="Location"
            value={params.get("location") ?? ""}
            onChange={(e) => setParams(setSearchParam(params, "location", e.target.value))}
            fullWidth
          />
          <TextField
            select
            label="Availability"
            value={params.get("availability") ?? ""}
            onChange={(e) => setParams(setSearchParam(params, "availability", e.target.value))}
            fullWidth
          >
            <MenuItem value="">Any</MenuItem>
            <MenuItem value="ready">Ready now</MenuItem>
            <MenuItem value="preorder">Pre-order</MenuItem>
          </TextField>
        </Stack>
      </Box>

      <Box>
        <TextField
          label="Health certification"
          value={params.get("certification") ?? ""}
          onChange={(e) => setParams(setSearchParam(params, "certification", e.target.value))}
          fullWidth
        />
      </Box>

      <Button variant="outlined" onClick={clearAllFilters} fullWidth>
        Clear filters
      </Button>
    </Stack>
  );

  const activeFilters = useMemo(() => {
    const chips: Array<{ key: string; label: string }> = [];
    const type = params.get("type");
    const location = params.get("location");
    const certification = params.get("certification");
    const gender = params.get("gender");
    const availability = params.get("availability");
    const minPrice = params.get("minPrice");
    const maxPrice = params.get("maxPrice");
    const minAge = params.get("minAge");
    const maxAge = params.get("maxAge");
    const minWeight = params.get("minWeight");
    const maxWeight = params.get("maxWeight");

    if (type) chips.push({ key: "type", label: `Type: ${type}` });
    if (location) chips.push({ key: "location", label: `Location: ${location}` });
    if (gender) chips.push({ key: "gender", label: `Gender: ${gender}` });
    if (availability) chips.push({ key: "availability", label: `Availability: ${availability}` });
    if (certification) chips.push({ key: "certification", label: `Certification: ${certification}` });
    if (minPrice || maxPrice) chips.push({ key: "price", label: `Price: ${minPrice || "0"} - ${maxPrice || "∞"}` });
    if (minAge || maxAge) chips.push({ key: "age", label: `Age (mo): ${minAge || "0"} - ${maxAge || "∞"}` });
    if (minWeight || maxWeight)
      chips.push({ key: "weight", label: `Weight (kg): ${minWeight || "0"} - ${maxWeight || "∞"}` });

    return chips;
  }, [params]);

  function clearAllFilters() {
    const next = new URLSearchParams(params);
    [
      "type",
      "location",
      "certification",
      "gender",
      "availability",
      "minAge",
      "maxAge",
      "minWeight",
      "maxWeight",
      "minPrice",
      "maxPrice",
    ].forEach((k) => next.delete(k));
    setParams(next);
  }

  function removeChip(key: string) {
    const next = new URLSearchParams(params);
    if (key === "price") {
      next.delete("minPrice");
      next.delete("maxPrice");
    } else if (key === "age") {
      next.delete("minAge");
      next.delete("maxAge");
    } else if (key === "weight") {
      next.delete("minWeight");
      next.delete("maxWeight");
    } else {
      next.delete(key);
    }
    setParams(next);
  }

  return (
    <Stack spacing={2}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={1} alignItems={{ xs: "flex-start", md: "flex-end" }}>
        <Box flex={1}>
          <Typography variant="h4" fontWeight={900}>
            Livestock Marketplace
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 0.5 }}>
            {isLoading ? "Loading listings…" : `Showing ${listings.length} results`}
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
          <TextField
            select
            label="Sort"
            size="small"
            value={sort}
            onChange={(e) => setParams(setSearchParam(params, "sort", e.target.value))}
            sx={{ minWidth: 180 }}
          >
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value="price_asc">Price: Low to High</MenuItem>
            <MenuItem value="price_desc">Price: High to Low</MenuItem>
            <MenuItem value="popular">Most popular</MenuItem>
          </TextField>

          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            onClick={() => setFiltersOpen(true)}
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            Filters
          </Button>

          <IconButton
            color={viewMode === "grid" ? "primary" : "default"}
            onClick={() => setParams(setSearchParam(params, "view", "grid"))}
            aria-label="Grid view"
          >
            <GridViewIcon />
          </IconButton>
          <IconButton
            color={viewMode === "list" ? "primary" : "default"}
            onClick={() => setParams(setSearchParam(params, "view", "list"))}
            aria-label="List view"
          >
            <ViewListIcon />
          </IconButton>
        </Stack>

      <Dialog
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        fullScreen={fullScreen}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Filters</DialogTitle>
        <DialogContent dividers>{filtersBody}</DialogContent>
        <DialogActions>
          <Button onClick={clearAllFilters}>Clear</Button>
          <Button variant="contained" onClick={() => setFiltersOpen(false)}>
            Apply
          </Button>
        </DialogActions>
      </Dialog>
      </Stack>

      {activeFilters.length > 0 && (
        <Paper variant="outlined" sx={{ p: 1.5, borderRadius: 3 }}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={1} alignItems={{ md: "center" }}>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ flex: 1 }}>
              {activeFilters.map((f) => (
                <Chip key={f.key} label={f.label} onDelete={() => removeChip(f.key)} />
              ))}
            </Stack>
            <Button variant="text" onClick={clearAllFilters}>
              Clear all
            </Button>
          </Stack>
        </Paper>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper
            variant="outlined"
            sx={{ p: 2, borderRadius: 3, position: "sticky", top: 88, display: { xs: "none", md: "block" } }}
          >
            <Typography fontWeight={900} sx={{ mb: 1 }}>
              Filters
            </Typography>

            {filtersBody}
          </Paper>
        </Grid>

        <Grid item xs={12} md={9}>
          {isError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              Unable to load livestock listings. Make sure the backend is running and accessible via `/api`.
            </Alert>
          )}

          {isLoading ? (
            <Typography color="text.secondary">Loading...</Typography>
          ) : (
            <Box>
              {viewMode === "list" ? (
                <Stack spacing={2}>
                  {listings.map((listing) => (
                    <Paper key={listing.id} variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={4}>
                          <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
                            <img
                              src={
                                listing.imageUrl ??
                                "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=60"
                              }
                              alt={listing.title}
                              style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <Stack spacing={1}>
                            <Typography fontWeight={900} variant="h6">
                              {listing.title}
                            </Typography>
                            <Typography color="text.secondary">{listing.location ?? ""}</Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                              <Chip size="small" label="Livestock" />
                              {listing.certifications?.slice(0, 3).map((c) => (
                                <Chip key={c} size="small" variant="outlined" label={c} />
                              ))}
                            </Stack>
                            <Typography fontWeight={950}>
                              {listing.price.toFixed(2)}
                            </Typography>
                            <Button component={"a" as any} href={`/marketplace/listings/${listing.id}`} variant="contained">
                              View details
                            </Button>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Paper>
                  ))}
                </Stack>
              ) : (
                <Grid container spacing={3}>
                  {listings.map((listing) => (
                    <Grid item key={listing.id} xs={12} sm={6} md={4}>
                      <ListingCard listing={listing} />
                    </Grid>
                  ))}
                </Grid>
              )}

              {!isError && listings.length === 0 && (
                <Typography color="text.secondary" sx={{ mt: 2 }}>
                  No results. Try adjusting your filters.
                </Typography>
              )}
            </Box>
          )}
        </Grid>
      </Grid>
    </Stack>
  );
}
