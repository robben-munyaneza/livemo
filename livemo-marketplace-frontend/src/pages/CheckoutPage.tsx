import {
  Alert,
  Box,
  Button,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { apiRequest } from "../lib/apiClient";
import { useCartStore } from "../stores/cartStore";

const steps = ["Shipping", "Payment", "Confirm"];

type CheckoutBody = {
  shipping: {
    fullName: string;
    address1: string;
    city: string;
    country: string;
  };
  payment: {
    cardNumber: string;
    nameOnCard: string;
  };
};

export function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clear);

  const [activeStep, setActiveStep] = useState(0);
  const [shipping, setShipping] = useState({ fullName: "", address1: "", city: "", country: "" });
  const [payment, setPayment] = useState({ cardNumber: "", nameOnCard: "" });

  const checkoutMutation = useMutation({
    mutationFn: (body: CheckoutBody) =>
      apiRequest<{ orderId: string }>("/checkout", { method: "POST", body: JSON.stringify(body) }),
    onSuccess: () => {
      clearCart();
      setActiveStep(steps.length);
    },
  });

  const isEmpty = items.length === 0;

  return (
    <Stack spacing={2}>
      <Typography variant="h4" fontWeight={800}>
        Checkout
      </Typography>

      {isEmpty && <Alert severity="warning">Your cart is empty. Add items before checking out.</Alert>}

      <Paper sx={{ p: 3 }}>
        <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep >= steps.length ? (
          <Alert severity="success">Order confirmed. Thank you!</Alert>
        ) : (
          <Stack spacing={2}>
            {activeStep === 0 && (
              <>
                <TextField
                  label="Full name"
                  value={shipping.fullName}
                  onChange={(e) => setShipping({ ...shipping, fullName: e.target.value })}
                  fullWidth
                />
                <TextField
                  label="Address"
                  value={shipping.address1}
                  onChange={(e) => setShipping({ ...shipping, address1: e.target.value })}
                  fullWidth
                />
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField
                    label="City"
                    value={shipping.city}
                    onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
                    fullWidth
                  />
                  <TextField
                    label="Country"
                    value={shipping.country}
                    onChange={(e) => setShipping({ ...shipping, country: e.target.value })}
                    fullWidth
                  />
                </Stack>
              </>
            )}

            {activeStep === 1 && (
              <>
                <TextField
                  label="Name on card"
                  value={payment.nameOnCard}
                  onChange={(e) => setPayment({ ...payment, nameOnCard: e.target.value })}
                  fullWidth
                />
                <TextField
                  label="Card number"
                  value={payment.cardNumber}
                  onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
                  fullWidth
                />
              </>
            )}

            {activeStep === 2 && (
              <Alert severity="info">
                This is a Phase 1 UI flow. Payment capture and shipping validation will be finalized with
                backend integration.
              </Alert>
            )}

            {checkoutMutation.isError && (
              <Alert severity="error">Checkout failed. Please try again.</Alert>
            )}

            <Box display="flex" gap={2} justifyContent="space-between" flexWrap="wrap">
              <Button
                variant="outlined"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
              >
                Back
              </Button>

              {activeStep < 2 ? (
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isEmpty}
                  onClick={() => setActiveStep((s) => s + 1)}
                >
                  Continue
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isEmpty || checkoutMutation.isPending}
                  onClick={() => checkoutMutation.mutate({ shipping, payment })}
                >
                  {checkoutMutation.isPending ? "Placing order..." : "Place order"}
                </Button>
              )}
            </Box>
          </Stack>
        )}
      </Paper>
    </Stack>
  );
}
