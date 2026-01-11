import { Button, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export function NotFoundPage() {
  return (
    <Stack spacing={2} alignItems="flex-start">
      <Typography variant="h4" fontWeight={800}>
        Page not found
      </Typography>
      <Typography color="text.secondary">
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button component={RouterLink} to="/" variant="contained">
        Back to home
      </Button>
    </Stack>
  );
}
