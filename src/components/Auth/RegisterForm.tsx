"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

import { Button } from "@/components/Button/Button";
import { Cross } from "@/components/icons";
import { createUser } from "@/services/getAPI";
import { RegistrSchema } from "@/services/yupSchems";

type FormData = {
  email: string;
  firstName: string;
  password: string;
  confirmPassword: string;
};

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(RegistrSchema),
  });

  const onSubmit = async (data: FormData) => {
    const newUser = {
      first_name: data.firstName,
      last_name: data.firstName,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await createUser(newUser, setError);
      if (res?.data.token) {
        reset();
        router.push(`/account`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label className="text">email</label>
        <input
          type="text"
          {...register("email", { required: true })}
          placeholder="Enter your email address"
          className="auth"
          style={{
            borderBottomWidth: "1px",
            borderColor: errors.email ? "#E64035" : "#1C1C1C",
            marginBottom: errors.email || error ? "8px" : "24px",
            backgroundColor: "transparent",
            padding: "16px 24px",
            outline: "none",
          }}
        />
        {(errors.email || error) && (
          <div className="flex gap-1 items-center mb-6">
            <Cross />
            <p className="errText">{errors.email?.message || error}</p>
          </div>
        )}

        <label className="text">user name</label>
        <input
          type="text"
          {...register("firstName", { required: true })}
          placeholder="Enter your user name"
          className="auth"
          style={{
            borderBottomWidth: "1px",
            borderColor: errors.firstName ? "#E64035" : "#1C1C1C",
            marginBottom: errors.firstName ? "8px" : "24px",
            backgroundColor: "transparent",
            padding: "16px 24px",
            outline: "none",
          }}
        />
        {errors.firstName && (
          <div className="flex gap-1 items-center mb-6">
            <Cross />
            <p className="errText">{errors.firstName.message}</p>
          </div>
        )}

        <label className="text">password</label>
        <div
          style={{
            borderBottomWidth: "1px",
            borderColor: errors.password ? "#E64035" : "#1C1C1C",
            marginBottom: errors.password ? "8px" : "24px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
            placeholder="Enter your password"
            className="auth"
            style={{
              width: "calc(100% - 56px)",
              backgroundColor: "transparent",
              padding: "16px 24px",
              outline: "none",
            }}
          />

          <button onClick={() => setShowPassword(!showPassword)} type="button">
            {showPassword ? (
              <IoEyeOutline
                style={{
                  width: "32px",
                  height: "32px",
                  color: "#BFBFBF",
                }}
              />
            ) : (
              <IoEyeOffOutline
                style={{
                  width: "32px",
                  height: "32px",
                  color: "#BFBFBF",
                }}
              />
            )}
          </button>
        </div>
        {errors.password && (
          <div className="flex gap-1 items-center mb-6">
            <Cross />
            <p className="errText">{errors.password.message}</p>
          </div>
        )}
        <label className="text">confirm password</label>
        <div
          style={{
            borderBottomWidth: "1px",
            borderColor: errors.confirmPassword ? "#E64035" : "#1C1C1C",
            marginBottom: errors.confirmPassword ? "8px" : "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            type={showConfirmation ? "text" : "password"}
            {...register("confirmPassword", { required: true })}
            placeholder="confirm your password"
            className="auth"
            style={{
              width: "calc(100% - 56px)",
              backgroundColor: "transparent",
              padding: "16px 24px",
              outline: "none",
            }}
          />

          <button
            onClick={() => setShowConfirmation(!showConfirmation)}
            type="button"
          >
            {showConfirmation ? (
              <IoEyeOutline
                style={{
                  width: "32px",
                  height: "32px",
                  color: "#BFBFBF",
                }}
              />
            ) : (
              <IoEyeOffOutline
                style={{
                  width: "32px",
                  height: "32px",
                  color: "#BFBFBF",
                }}
              />
            )}
          </button>
        </div>
        {errors.confirmPassword && (
          <div className="flex gap-1 items-center mb-10">
            <Cross />
            <p className="errText">{errors.confirmPassword.message}</p>
          </div>
        )}
        <div className="desktop:mb-[128px] ">
          <Button title="sign up" />
        </div>
      </form>
    </div>
  );
};
