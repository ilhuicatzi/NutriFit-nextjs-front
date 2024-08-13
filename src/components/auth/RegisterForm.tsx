"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerFormSchema } from "@/schemas/auth.schema";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerFormSchema>) {
    console.log(values);
    try {
      // Send data to the server
      const res = await axios.post("/api/auth/register", values);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="grid gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field, fieldState }) => (
              <FormItem className="grid gap-2 mb-2">
                <FormLabel htmlFor="firstName">Nombre</FormLabel>
                <Input
                  {...field}
                  id="firstName"
                  type="text"
                  placeholder="Nombre"
                  autoFocus
                  required
                  autoComplete="firstName"
                />
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field, fieldState }) => (
              <FormItem className="grid gap-2 mb-2">
                <FormLabel htmlFor="lastName">Apellido</FormLabel>
                <Input
                  {...field}
                  id="lastName"
                  type="text"
                  placeholder="Apellido"
                  autoFocus
                  required
                  autoComplete="lastName"
                />
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem className="grid gap-2 mb-2">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  {...field}
                  id="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <FormItem className="grid gap-2 mb-2">
                <FormLabel htmlFor="password">Contraseña</FormLabel>
                <div className="relative">
                  <Input
                    {...field}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Contraseña"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-2 "
                  >
                    {showPassword ? <Eye className="w-5 h-5"/> : <EyeOff className="w-5 h-5"/>}
                  </button>
                </div>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormControl>
            <Button type="submit" className="w-full">
              Registrarse
            </Button>
          </FormControl>
        </form>
      </Form>
    </div>
  );
}

export default RegisterForm;
