import {
  Box,
  Button,
  CardActionArea,
  Chip,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentsIcon from "@mui/icons-material/Payments";
import SearchIcon from "@mui/icons-material/Search";
import PetsIcon from "@mui/icons-material/Pets";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import SpaIcon from "@mui/icons-material/Spa";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { ListingCard } from "../components/ListingCard";
import { fetchLivestock, fetchProducts } from "../lib/marketplaceApi";

const howItWorks = [
  {
    title: "Browse verified listings",
    description: "Filter by location, type, and budget to find the right match quickly.",
    icon: VerifiedUserIcon,
  },
  {
    title: "Add to cart & checkout",
    description: "Secure checkout flow designed for clear pricing and fast purchasing.",
    icon: PaymentsIcon,
  },
  {
    title: "Coordinate delivery",
    description: "Work with sellers and logistics for smooth handover and delivery.",
    icon: LocalShippingIcon,
  },
];

const heroSlides = [
  {
    title: "Buy healthy livestock",
    highlight: "directly from verified farmers",
    description:
      "Browse verified animals with clear health information, fair pricing, and a buying journey built for trust.",
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=2000&q=60",
    primaryCta: { label: "Browse Livestock", to: "/marketplace/livestock" },
    secondaryCta: { label: "Shop Supplies", to: "/marketplace/products" },
  },
  {
    title: "Secure payments",
    highlight: "with clear pricing",
    description:
      "Compare options quickly, keep everything in one cart, and pay using secure methods with no hidden charges.",
    image:
      "https://images.unsplash.com/photo-1564564295391-7f24f26f568b?auto=format&fit=crop&w=2000&q=60",
    primaryCta: { label: "Trending Livestock", to: "/marketplace/livestock" },
    secondaryCta: { label: "Popular Products", to: "/marketplace/products" },
  },
  {
    title: "Built for farmers everywhere",
    highlight: "and fast on mobile",
    description:
      "A lightweight experience that works on the go—simple filters, focused information, and mobile-first design.",
    image:
      "https://images.unsplash.com/photo-1580915411954-282cb1c96f1f?auto=format&fit=crop&w=2000&q=60",
    primaryCta: { label: "Browse Livestock", to: "/marketplace/livestock" },
    secondaryCta: { label: "Shop Supplies", to: "/marketplace/products" },
  },
];

const quickCategories = [
  {
    title: "Cattle",
    subtitle: "Top breeds & best deals",
    icon: PetsIcon,
    to: "/marketplace/livestock?type=cattle",
  },
  {
    title: "Goats",
    subtitle: "Healthy, ready now",
    icon: AgricultureIcon,
    to: "/marketplace/livestock?type=goat",
  },
  {
    title: "Sheep",
    subtitle: "Verified sellers",
    icon: SpaIcon,
    to: "/marketplace/livestock?type=sheep",
  },
  {
    title: "Poultry",
    subtitle: "Small-scale to bulk",
    icon: PetsIcon,
    to: "/marketplace/livestock?type=poultry",
  },
  {
    title: "Feed & Nutrition",
    subtitle: "For stronger herds",
    icon: LocalMallIcon,
    to: "/marketplace/products?category=feed",
  },
  {
    title: "Veterinary",
    subtitle: "Health essentials",
    icon: VaccinesIcon,
    to: "/marketplace/products?category=veterinary",
  },
  {
    title: "Equipment",
    subtitle: "Tools & supplies",
    icon: LocalMallIcon,
    to: "/marketplace/products?category=equipment",
  },
];

const testimonials = [
  {
    name: "Jean M.",
    location: "Kigali District",
    quote:
      "Livemo made it easy to move my first batch of calves. I could compare offers, message buyers, and confirm delivery without leaving the farm.",
  },
  {
    name: "Amina K.",
    location: "Musanze",
    quote:
      "I like that every listing shows health details and photos. It gives me confidence before I travel to see the animals.",
  },
];

const newsArticles = [
  {
    id: "news-1",
    title: "How to prepare livestock for market day",
    summary:
      "Practical tips on health checks, photos, and pricing to help your animals stand out in online listings.",
  },
  {
    id: "news-2",
    title: "Choosing the right feed mix for your herd",
    summary:
      "A simple guide to balancing cost, nutrition, and availability when buying feed on Livemo.",
  },
  {
    id: "news-3",
    title: "5 checks before you buy livestock online",
    summary:
      "Key things to confirm about health, transport, and payments before you confirm any purchase.",
  },
];

const mockTrendingLivestock = [
  {
    id: "mock-livestock-1",
    title: "Premium Holstein Heifer",
    location: "Green Valley Farm",
    type: "livestock" as const,
    price: 1200,
    imageUrl:
      "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=1200&q=60",
    certifications: ["Health certified", "Vaccinated"],
  },
  {
    id: "mock-livestock-2",
    title: "Boer Goat Kid",
    location: "Happy Hills Ranch",
    type: "livestock" as const,
    price: 350,
    imageUrl:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=60",
    certifications: ["Vaccinated"],
  },
  {
    id: "mock-livestock-3",
    title: "Flock of Dorper Sheep (5)",
    location: "Sunrise Farm",
    type: "livestock" as const,
    price: 1800,
    imageUrl:
      "https://images.unsplash.com/photo-1548658166-136d9f6a7e0b?auto=format&fit=crop&w=1200&q=60",
    certifications: ["Health certified"],
  },
];

const mockPopularProducts = [
  {
    id: "mock-product-1",
    title: "Premium Mixed Grain Feed (50kg)",
    location: "Livemo Supply Hub",
    type: "product" as const,
    price: 45,
    imageUrl:
      "https://images.unsplash.com/photo-1599059847935-0c07c0501c63?auto=format&fit=crop&w=1200&q=60",
    certifications: ["For all livestock"],
  },
  {
    id: "mock-product-2",
    title: "Complete Vaccination Kit",
    location: "VetCare Partners",
    type: "product" as const,
    price: 120,
    imageUrl:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=60",
    certifications: ["Vet approved"],
  },
  {
    id: "mock-product-3",
    title: "Digital Livestock Scale",
    location: "FarmTech Store",
    type: "product" as const,
    price: 650,
    imageUrl:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1200&q=60",
    certifications: ["Warranty included"],
  },
];

export function HomePage() {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);
  const slide = heroSlides[slideIndex % heroSlides.length];

  const [searchText, setSearchText] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlideIndex((s) => (s + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  const trendingLivestockQuery = useQuery({
    queryKey: ["home", "trending", "livestock"],
    queryFn: () => fetchLivestock({}),
  });

  const popularProductsQuery = useQuery({
    queryKey: ["home", "popular", "products"],
    queryFn: () => fetchProducts({}),
  });

  const trendingLivestock = useMemo(() => {
    const data = Array.isArray(trendingLivestockQuery.data) && trendingLivestockQuery.data.length > 0
      ? trendingLivestockQuery.data
      : mockTrendingLivestock;
    return data.slice(0, 6);
  }, [trendingLivestockQuery.data]);

  const popularProducts = useMemo(() => {
    const data = Array.isArray(popularProductsQuery.data) && popularProductsQuery.data.length > 0
      ? popularProductsQuery.data
      : mockPopularProducts;
    return data.slice(0, 6);
  }, [popularProductsQuery.data]);

  function onSearchSubmit() {
    const q = searchText.trim();
    const loc = searchLocation.trim();
    const params = new URLSearchParams();
    if (loc) params.set("location", loc);
    if (q) params.set("type", q);

    const qs = params.toString();
    navigate(`/marketplace/livestock${qs ? `?${qs}` : ""}`);
  }

  return (
    <Stack spacing={{ xs: 5, md: 7 }}>
      <Box
        sx={(t) => ({
          width: "100%",
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${slide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: `1px solid ${t.palette.divider}`,
        })}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        <Container sx={{ position: "relative", py: { xs: 5, sm: 6, md: 10 }, color: "common.white" }}>
          <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={2.25} maxWidth={760}>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip
                    icon={<VerifiedUserIcon />}
                    label="Verified farmers"
                    size="small"
                    sx={{ bgcolor: "rgba(255,255,255,0.14)", color: "common.white" }}
                  />
                  <Chip
                    icon={<PaymentsIcon />}
                    label="Secure payments"
                    size="small"
                    sx={{ bgcolor: "rgba(255,255,255,0.14)", color: "common.white" }}
                  />
                  <Chip
                    icon={<LocalShippingIcon />}
                    label="Health & delivery support"
                    size="small"
                    sx={{ bgcolor: "rgba(255,255,255,0.14)", color: "common.white" }}
                  />
                </Stack>

                <Typography
                  variant="h2"
                  fontWeight={950}
                  sx={{ letterSpacing: -0.6, lineHeight: 1.03, fontSize: { xs: 38, sm: 48, md: 56 } }}
                >
                  {slide.title} 
                  <Box component="span" sx={{ color: "secondary.light" }}>
                    {slide.highlight}
                  </Box>
                </Typography>
                <Typography sx={{ opacity: 0.95, fontSize: { xs: 16, md: 18 }, maxWidth: 680 }}>
                  {slide.description}
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 0.5 }}>
                  <Button component={RouterLink} to={slide.primaryCta.to} variant="contained" color="primary" size="large">
                    {slide.primaryCta.label}
                  </Button>
                  <Button
                    component={RouterLink}
                    to={slide.secondaryCta.to}
                    variant="outlined"
                    color="inherit"
                    size="large"
                    sx={{ borderColor: "rgba(255,255,255,0.55)" }}
                  >
                    {slide.secondaryCta.label}
                  </Button>
                </Stack>

                <Paper
                  elevation={0}
                  sx={{
                    mt: 1,
                    p: 2,
                    borderRadius: 3,
                    bgcolor: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    backdropFilter: "blur(8px)",
                    maxWidth: 720,
                  }}
                >
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={5}>
                      <TextField
                        fullWidth
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search livestock type (e.g. cattle, goat, sheep)"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") onSearchSubmit();
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon sx={{ color: "rgba(255,255,255,0.85)" }} />
                            </InputAdornment>
                          ),
                          sx: {
                            color: "common.white",
                            bgcolor: "rgba(0,0,0,0.10)",
                            borderRadius: 2,
                          },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.22)" },
                          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.35)" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <TextField
                        fullWidth
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                        placeholder="Location (e.g. Kigali, Musanze)"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") onSearchSubmit();
                        }}
                        InputProps={{
                          sx: {
                            color: "common.white",
                            bgcolor: "rgba(0,0,0,0.10)",
                            borderRadius: 2,
                          },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.22)" },
                          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.35)" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <Button fullWidth variant="contained" color="primary" size="large" onClick={onSearchSubmit}>
                        Search
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>

                <Stack direction="row" spacing={1} alignItems="center" sx={{ pt: 0.5, opacity: 0.95 }}>
                  {heroSlides.map((_, i) => (
                    <IconButton
                      key={i}
                      size="small"
                      onClick={() => setSlideIndex(i)}
                      sx={{
                        width: 28,
                        height: 10,
                        borderRadius: 99,
                        bgcolor: i === slideIndex ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.25)",
                        "&:hover": {
                          bgcolor: i === slideIndex ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.35)",
                        },
                      }}
                    />
                  ))}
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  borderRadius: 4,
                  p: 2.5,
                  backdropFilter: "blur(8px)",
                }}
              >
                <Typography fontWeight={950} variant="h6">
                  Trust signals
                </Typography>
                <Typography sx={{ opacity: 0.92, mt: 0.75 }}>
                  Verified farmers, secure payments, and health-focused listings.
                </Typography>

                <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.18)" }} />

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography fontWeight={950} sx={{ fontSize: 22 }}>
                      100+
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Verified listings
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography fontWeight={950} sx={{ fontSize: 22 }}>
                      20+
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Active farmers
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography fontWeight={950} sx={{ fontSize: 22 }}>
                      24/7
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Support & guidance
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography fontWeight={950} sx={{ fontSize: 22 }}>
                      Fast
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Mobile-first UX
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={(t) => ({
          borderRadius: 4,
          bgcolor: "#F8F4EC",
          border: `1px solid ${t.palette.divider}`,
          p: { xs: 2, md: 3 },
        })}
      >
        <Stack direction={{ xs: "column", sm: "row" }} alignItems={{ xs: "flex-start", sm: "flex-end" }} spacing={1}>
          <Box flex={1}>
            <Typography variant="h4" fontWeight={900}>
              Quick categories
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 0.75 }}>
              Jump straight to popular categories—filters are applied automatically.
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={2} sx={{ mt: 1 }}>
          {quickCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={cat.title}>
                <Paper
                  variant="outlined"
                  sx={{
                    borderRadius: 999,
                    height: "100%",
                    overflow: "hidden",
                    bgcolor: "common.white",
                  }}
                >
                  <CardActionArea component={RouterLink} to={cat.to} sx={{ p: 2.25, height: "100%" }}>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box
                        sx={(t) => ({
                          width: 44,
                          height: 44,
                          borderRadius: 2,
                          display: "grid",
                          placeItems: "center",
                          bgcolor: t.palette.secondary.light,
                          color: t.palette.getContrastText(t.palette.secondary.light),
                        })}
                      >
                        <Icon />
                      </Box>
                      <Box flex={1}>
                        <Typography fontWeight={950}>{cat.title}</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                          {cat.subtitle}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardActionArea>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Box
        sx={(t) => ({
          borderRadius: 4,
          bgcolor: "#FFFDF7",
          border: `1px solid ${t.palette.divider}`,
          p: { xs: 2.5, md: 3 },
        })}
      >
        <Stack direction={{ xs: "column", sm: "row" }} alignItems={{ xs: "flex-start", sm: "flex-end" }} spacing={1.5}>
          <Box flex={1}>
            <Typography variant="h4" fontWeight={900}>
              Trending livestock
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 0.75 }}>
              Fresh animals from verified farms, updated as soon as new listings go live.
            </Typography>
          </Box>
          <Button
            component={RouterLink}
            to="/marketplace/livestock"
            variant="outlined"
            color="primary"
            size="small"
            sx={{ borderRadius: 999, px: 2.5, whiteSpace: "nowrap" }}
          >
            Browse all
          </Button>
        </Stack>

        {trendingLivestockQuery.isError ? (
          <Paper variant="outlined" sx={{ mt: 2, p: 2.5, borderRadius: 3 }}>
            <Typography fontWeight={900}>Unable to load trending livestock.</Typography>
            <Typography color="text.secondary" sx={{ mt: 0.5 }}>
              Please refresh and try again.
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={3} sx={{ mt: 0.5 }}>
            {trendingLivestockQuery.isLoading
              ? Array.from({ length: 6 }).map((_, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={`trending-skel-${idx}`}>
                    <Paper variant="outlined" sx={{ borderRadius: 3, overflow: "hidden" }}>
                      <Skeleton variant="rectangular" height={180} />
                      <Box sx={{ p: 2 }}>
                        <Skeleton height={26} width="80%" />
                        <Skeleton height={18} width="60%" />
                        <Skeleton height={22} width="40%" />
                      </Box>
                    </Paper>
                  </Grid>
                ))
              : trendingLivestock.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <ListingCard listing={item as any} />
                  </Grid>
                ))}
          </Grid>
        )}
      </Box>

      <Box>
        <Stack direction={{ xs: "column", sm: "row" }} alignItems={{ xs: "flex-start", sm: "flex-end" }} spacing={1}>
          <Box flex={1}>
            <Typography variant="h4" fontWeight={900}>
              Popular products
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 0.75 }}>
              Feed, veterinary supplies and equipment that other farmers are buying right now.
            </Typography>
          </Box>
          <Button
            component={RouterLink}
            to="/marketplace/products"
            variant="outlined"
            color="primary"
            size="small"
            sx={{ borderRadius: 999, px: 2.5, whiteSpace: "nowrap" }}
          >
            Shop all
          </Button>
        </Stack>

        {popularProductsQuery.isError ? (
          <Paper variant="outlined" sx={{ mt: 2, p: 2.5, borderRadius: 3 }}>
            <Typography fontWeight={900}>Unable to load popular products.</Typography>
            <Typography color="text.secondary" sx={{ mt: 0.5 }}>
              Please refresh and try again.
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={3} sx={{ mt: 0.5 }}>
            {popularProductsQuery.isLoading
              ? Array.from({ length: 6 }).map((_, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={`products-skel-${idx}`}>
                    <Paper variant="outlined" sx={{ borderRadius: 3, overflow: "hidden" }}>
                      <Skeleton variant="rectangular" height={180} />
                      <Box sx={{ p: 2 }}>
                        <Skeleton height={26} width="80%" />
                        <Skeleton height={18} width="60%" />
                        <Skeleton height={22} width="40%" />
                      </Box>
                    </Paper>
                  </Grid>
                ))
              : popularProducts.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <ListingCard listing={item as any} />
                  </Grid>
                ))}
          </Grid>
        )}
      </Box>

      <Box
        sx={(t) => ({
          borderRadius: 4,
          bgcolor: "#F8F4EC",
          border: `1px solid ${t.palette.divider}`,
          p: { xs: 2, md: 3 },
        })}
      >
        <Stack spacing={2}>
          <Typography variant="h4" fontWeight={900}>
            How Livemo works
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 860 }}>
            A simple three-step flow designed for busy farmers: discover verified listings, checkout securely, and
            coordinate delivery or pickup.
          </Typography>

          <Grid container spacing={3} sx={{ mt: 0.5 }}>
            {howItWorks.map((step) => {
              const Icon = step.icon;
              return (
                <Grid item xs={12} md={4} key={step.title}>
                  <Paper variant="outlined" sx={{ p: 3, borderRadius: 3, height: "100%" }}>
                    <Stack spacing={1.25}>
                      <Box
                        sx={(t) => ({
                          width: 44,
                          height: 44,
                          borderRadius: 2,
                          display: "grid",
                          placeItems: "center",
                          bgcolor: t.palette.action.hover,
                        })}
                      >
                        <Icon />
                      </Box>
                      <Typography fontWeight={900} variant="h6">
                        {step.title}
                      </Typography>
                      <Typography color="text.secondary">{step.description}</Typography>
                    </Stack>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Box>

      <Paper
        variant="outlined"
        sx={(t) => ({
          borderRadius: 4,
          overflow: "hidden",
          bgcolor: t.palette.action.hover,
        })}
      >
        <Box sx={{ p: { xs: 3, md: 4 } }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h4" fontWeight={950}>
                Ready to start?
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                Jump into the public marketplace, apply filters that match your needs, and save time on every
                purchase.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent={{ md: "flex-end" }}>
                <Button component={RouterLink} to="/marketplace/livestock" variant="contained" color="primary" size="large">
                  Find Livestock
                </Button>
                <Button component={RouterLink} to="/marketplace/products" variant="outlined" size="large">
                  Shop Products
                </Button>
              </Stack>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />
          <Typography variant="body2" color="text.secondary">
            Tip: share a filtered Livemo link with your team so everyone reviews the same shortlist of animals or
            products.
          </Typography>
        </Box>
      </Paper>

      <Box id="farmers">
        <Stack spacing={2} sx={{ mt: 4 }}>
          <Typography variant="h4" fontWeight={900} textAlign="center">
            What our farmers say
          </Typography>
          <Typography color="text.secondary" textAlign="center" sx={{ maxWidth: 720, mx: "auto" }}>
            Livemo is built together with farmers, traders and service providers. Here is what some of them say
            about using the marketplace.
          </Typography>
        </Stack>

        <Grid container spacing={3} sx={{ mt: 1 }}>
          {testimonials.map((t) => (
            <Grid item xs={12} md={6} key={t.name}>
              <Paper variant="outlined" sx={{ p: 3, borderRadius: 3, height: "100%" }}>
                <Typography sx={{ fontSize: 40, lineHeight: 1, color: "text.disabled", mb: 1 }}>
                  “
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {t.quote}
                </Typography>
                <Typography fontWeight={800}>{t.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {t.location}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box id="app" sx={{ mt: 6 }}>
        <Paper
          variant="outlined"
          sx={{
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <Grid container spacing={0} alignItems="stretch">
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                minHeight: 260,
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1544022613-8e3256c1c9a9?auto=format&fit=crop&w=900&q=60)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Grid item xs={12} md={7}>
              <Box sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h4" fontWeight={900} sx={{ mb: 1 }}>
                  Download the Livemo app
                </Typography>
                <Typography color="text.secondary" sx={{ maxWidth: 520 }}>
                  Use Livemo on the go with our mobile experience. Receive notifications when buyers contact you,
                  track orders, and manage your listings without leaving the field.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 3 }}>
                  <Button variant="contained" color="primary">
                    App Store (coming soon)
                  </Button>
                  <Button variant="outlined" color="primary">
                    Google Play (coming soon)
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Box id="news" sx={{ mt: 6 }}>
        <Stack spacing={2}>
          <Typography variant="h4" fontWeight={900}>
            Latest news & resources
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 760 }}>
            Stay updated with practical guides and short articles written for busy farmers and buyers using
            the Livemo marketplace.
          </Typography>
        </Stack>

        <Grid container spacing={3} sx={{ mt: 1 }}>
          {newsArticles.map((article) => (
            <Grid item xs={12} md={4} key={article.id}>
              <Paper variant="outlined" sx={{ p: 2.5, borderRadius: 3, height: "100%" }}>
                <Typography fontWeight={900} sx={{ mb: 1 }}>
                  {article.title}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 1.5 }}>
                  {article.summary}
                </Typography>
                <Button size="small" variant="text" color="primary">
                  Read more
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
}
