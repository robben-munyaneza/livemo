import { Alert, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { apiRequest } from "../lib/apiClient";
import { useSessionStore } from "../stores/sessionStore";

type RegisterBody = { email: string; password: string; name?: string };

type RegisterResponse = {
  user: { id: string; email: string; name?: string };
};

export function RegisterPage() {
  const navigate = useNavigate();
  const setUser = useSessionStore((s) => s.setUser);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerMutation = useMutation({
    mutationFn: (body: RegisterBody) =>
      apiRequest<RegisterResponse>("/auth/register", {
        method: "POST",
        body: JSON.stringify(body),
      }),
    onSuccess: (data) => {
      setUser(data.user);
      navigate("/", { replace: true });
    },
  });

  return (
    <Paper sx={{ p: 3, maxWidth: 520 }}>
      <Stack spacing={2}>
        <Typography variant="h4" fontWeight={800}>
          Create account
        </Typography>

        {registerMutation.isError && (
          <Alert severity="error">Unable to register. Please try again.</Alert>
        )}

        <TextField
          label="Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          fullWidth
        />
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
          autoComplete="new-password"
          fullWidth
        />

        <Button
          variant="contained"
          onClick={() => registerMutation.mutate({ email, password, name: name || undefined })}
          disabled={registerMutation.isPending || !email || !password}
        >
          {registerMutation.isPending ? "Creating..." : "Create account"}
        </Button>

        <Typography variant="body2" color="text.secondary">
          Already have an account?{" "}
          <RouterLink to="/auth/login">Sign in</RouterLink>
        </Typography>
      </Stack>
    </Paper>
  );
}
