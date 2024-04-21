import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid format. Must contain @")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password isn’t strong enough. must contain at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/\d/, "Must contain at least one digit"),
});

export const RegistrSchema = yup.object({
  email: yup
    .string()
    .email("Invalid format. Must contain @")
    .required("Email is required"),
  firstName: yup.string().required("first name is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password isn’t strong enough. must contain at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/\d/, "Must contain at least one digit"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords do not match")
    .required("confirmation is required"),
});

export const ForgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Invalid format. Must contain @")
    .required("Email is required"),
});
