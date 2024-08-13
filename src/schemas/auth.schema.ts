import { z } from "zod";

export const registerFormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, {
        message: "El nombre de usuario debe tener al menos 2 caracteres",
      })
      .refine((value) => !/\d/.test(value), {
        message: "El nombre de usuario no debe contener números",
      })
      .refine((value) => !/[^a-zA-ZñÑáéíóúÁÉÍÓÚ]/.test(value), {
        message: "El nombre de usuario no debe contener caracteres especiales",
      }),
    lastName: z
      .string()
      .min(2, {
        message: "El nombre de usuario debe tener al menos 2 caracteres",
      })
      .refine((value) => !/\d/.test(value), {
        message: "El nombre de usuario no debe contener números",
      })
      .refine((value) => !/[^a-zA-ZñÑáéíóúÁÉÍÓÚ]/.test(value), {
        message: "El nombre de usuario no debe contener caracteres especiales",
      }),
    email: z.string().email({
      message: "Email invalido",
    }),
    password: z
      .string()
      .min(6, {
        message: "La contraseña debe tener al menos 6 caracteres",
      })
      .refine(
        (value) => !/\s/.test(value),
        "La contraseña no debe contener espacios"
      )
      .refine((value) => /[A-Z]/.test(value), {
        message: "La contraseña debe contener al menos una letra mayúscula",
      })
      .refine((value) => /\d/.test(value), {
        message: "La contraseña debe contener al menos un número",
      })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: "La contraseña debe contener al menos un carácter especial",
      }),
  })
  .refine((data) => data.password !== data.firstName, {
    message: "La contraseña no puede ser igual al nombre del usuario",
    path: ["password"],
  })
  .refine((data) => data.password !== data.lastName, {
    message: "La contraseña no puede ser igual al apellido del usuario",
    path: ["password"],
  })
  .refine((data) => data.password !== data.email, {
    message: "La contraseña no puede ser igual al email",
    path: ["password"],
  })
  .refine((data) => data.firstName !== data.email, {
    message: "El nombre del usuario no puede ser igual al email",
    path: ["firstName"],
  })
  .refine((data) => data.lastName !== data.email, {
    message: "El apellido del usuario no puede ser igual al email",
    path: ["lastName"],
  });

export const loginFormSchema = z
  .object({
    email: z.string().email({
      message: "Email invalido",
    }),
    password: z
      .string()
      .min(6, {
        message: "La contraseña debe tener al menos 6 caracteres",
      })
      .refine(
        (value) => !/\s/.test(value),
        "La contraseña no debe contener espacios"
      )
      .refine((value) => /[A-Z]/.test(value), {
        message: "La contraseña debe contener al menos una letra mayúscula",
      })
      .refine((value) => /\d/.test(value), {
        message: "La contraseña debe contener al menos un número",
      })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: "La contraseña debe contener al menos un carácter especial",
      }),
  })
  .refine((data) => data.password !== data.email, {
    message: "La contraseña no puede ser igual al email",
    path: ["password"],
  });
