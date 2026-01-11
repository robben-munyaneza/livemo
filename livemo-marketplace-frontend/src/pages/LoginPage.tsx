import { Alert, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { apiRequest } from "../lib/apiClient";
import { useSessionStore } from "../stores/sessionStore";

type LoginBody = { email: string; password: string };

type LoginResponse = {
  user: { id: string; email: string; name?: string };
};

export function LoginPage() {
  const navigate = useNavigate();
  const setUser = useSessionStore((s) => s.setUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation({
    mutationFn: (body: LoginBody) =>
      apiRequest<LoginResponse>("/auth/login", { method: "POST", body: JSON.stringify(body) }),
    onSuccess: (data) => {
      setUser(data.user);
      navigate("/", { replace: true });
    },
  });

  return (
    <Paper sx={{ p: 3, maxWidth: 520 }}>
      <Stack spacing={2}>
        <Typography variant="h4" fontWeight={800}>
          Sign in
        </Typography>

        {loginMutation.isError && (
          <Alert severity="error">Unable to sign in. Please check your credentials.</Alert>
        )}

        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          fullWidth
        />

        <Button
          variant="contained"
          onClick={() => loginMutation.mutate({ email, password })}
          disabled={loginMutation.isPending || !email || !password}
        >
          {loginMutation.isPending ? "Signing in..." : "Sign in"}
        </Button>

        <Typography variant="body2" color="text.secondary">
          No account?{" "}
          <RouterLink to="/auth/register">Create one</RouterLink>
        </Typography>
      </Stack>
    </Paper>
  );
}
