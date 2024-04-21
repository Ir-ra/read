"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

import { Button } from "@/components/Button/Button";
import { Cross } from "@/components/icons";

import { signIn } from "../../services/getAPI";
import { loginSchema } from "../../services/yupSchems";

type FormData = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>("");
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: FormData) => {
    const user = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await signIn(user, setError);
      if (response?.data.token) {
        reset();
        Router.push("/account");
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
            padding: "16px 24px",
            outline: "none",
            borderBottomWidth: "1px",
            borderColor: errors.email ? "#E64035" : "#1C1C1C",
            marginBottom: errors.email || error ? "8px" : "24px",
            backgroundColor: "transparent",
          }}
        />
        {(errors.email || error) && (
          <div className="flex gap-1 items-center mb-6">
            <Cross />
            <p className="errText">{errors.email?.message || error}</p>
          </div>
        )}
        <label className="text">password</label>
        <div
          style={{
            borderBottomWidth: "1px",
            borderColor: errors.password ? "#E64035" : "#1C1C1C",
            marginBottom: errors.email || error ? "8px" : "24px",
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
        {(errors.password || error) && (
          <div className="flex gap-1 items-center mb-6">
            <Cross />
            <p className="errText">{errors.password?.message || error}</p>
          </div>
        )}
        <div className="flex justify-between mb-10">
          <div className="flex gap-2">
            <input
              type="checkbox"
              {...register("rememberMe")}
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className={`checkbox ${rememberMe ? "checked" : ""}`}
            />
            <p className="text">remember me</p>
          </div>

          <Link href="/forgot_password" className="text">
            forgot password?
          </Link>
        </div>
        <div className="desktop:mb-[290px] ">
          <Button title="Log in" />
        </div>
      </form>
    </div>
  );
};
