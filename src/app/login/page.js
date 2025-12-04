"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoginLayout from "./LoginLayout";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [apiError, setApiError] = useState("");

  const loginUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:1000/authentication/login",
        { email, password }
      );
      console.log("response", response);

      localStorage.setItem("token", response.data.token);

      router.push("/admin");
    } catch (err) {
      if (err.response?.data) {
        setApiError(err.response.data.message || err.response.data);
      } else {
        setApiError("Something went wrong. Please try again.");
      }
    }
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setError("");
    setApiError("");

    loginUser();
  };

  return (
    <LoginLayout>
      <Field>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Field>

      <Field>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Field>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

      {apiError && <p className="text-red-500 text-sm mt-1">{apiError}</p>}

      <div className="flex justify-between items-center text-sm mt-1">
        <button
          className="text-blue-600 hover:underline"
          onClick={() => router.push("/login/forgot-password")}
        >
          Forgot password?
        </button>
      </div>

      <Button
        className="w-full h-10 bg-black text-white rounded-md font-medium hover:bg-gray-900 transition-colors mt-2"
        onClick={handleLogin}
      >
        Login
      </Button>

      <div className="text-sm text-gray-600 mt-4 text-center">
        Don’t have an account?{" "}
        <button
          className="text-blue-600 font-medium hover:underline cursor-pointer"
          onClick={() => router.push("/signup")}
        >
          Sign up
        </button>
      </div>
    </LoginLayout>
  );
}
