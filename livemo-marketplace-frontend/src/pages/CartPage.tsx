import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link as RouterLink } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";

export function CartPage() {
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const setQuantity = useCartStore((s) => s.setQuantity);

  const subtotal = items.reduce((acc, it) => acc + it.price * it.quantity, 0);

  return (
    <Stack spacing={2}>
      <Typography variant="h4" fontWeight={800}>
        Your cart
      </Typography>

      {items.length === 0 ? (
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography color="text.secondary">Your cart is empty.</Typography>
              <Button component={RouterLink} to="/marketplace/livestock" variant="contained">
                Browse listings
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ) : (
        <Stack spacing={2}>
          <Card>
            <CardContent>
              <Stack spacing={2}>
                {items.map((it) => (
                  <Box key={it.id}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ sm: "center" }}>
                      <Box flex={1}>
                        <Typography fontWeight={700}>{it.title}</Typography>
                        <Typography color="text.secondary">{it.price.toFixed(2)}</Typography>
                      </Box>

                      <TextField
                        label="Qty"
                        type="number"
                        size="small"
                        value={it.quantity}
                        onChange={(e) => setQuantity(it.id, Math.max(1, Number(e.target.value || 1)))}
                        inputProps={{ min: 1 }}
                        sx={{ width: 120 }}
                      />

                      <IconButton aria-label="Remove" onClick={() => removeItem(it.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                    <Divider sx={{ mt: 2 }} />
                  </Box>
                ))}

                <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" spacing={2}>
                  <Typography fontWeight={800}>Subtotal: {subtotal.toFixed(2)}</Typography>
                  <Button component={RouterLink} to="/checkout" variant="contained" color="primary">
                    Checkout
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      )}
    </Stack>
  );
}
