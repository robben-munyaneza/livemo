import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "./queryClient";
import { theme } from "./theme";
import { useCartStore } from "../stores/cartStore";

export function AppProviders({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const useMocks = (import.meta as any)?.env?.VITE_USE_MOCKS === "true";
    if (!useMocks) return;

    const cart = useCartStore.getState();
    if (cart.items.length > 0) return;

    import("../lib/mockApi")
      .then((m) => {
        const demo = m.getDemoCartItems();
        useCartStore.getState().setItems(demo);
      })
      .catch(() => null);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
