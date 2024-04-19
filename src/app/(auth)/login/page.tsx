"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import * as yup from "yup";

import { Button } from "@/components/Button/Button";
import { Cross } from "@/components/icons";
import { Logo } from "@/components/Logo/Logo";

import { signIn } from "../../../services/getAPI";

type FormData = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

const schema = yup.object({
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

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
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

  const text = "text-xxxs font-light uppercase";
  const errText = "text-supperSmall text-AccentRed uppercase font-light";

  return (
    <>
      <div className=" desktop:mt-10">
        <div className="hidden desktop:block desktop:mb-[72px]">
          <Logo />
        </div>
        <div className="px-4 desktop:px-[135px] ">
          <div
            className=" flex flex-col max-w-[327px] mx-auto 
          tablet:max-w-[436px] desktop:mx-0 desktop:min-w-[440px]"
          >
            <h2 className="text-s font-bold uppercase mb-6">login</h2>
            <div className="flex gap-2 mb-10">
              <p className={text}>If you don’t have an account</p>
              <Link
                href="/registration"
                className="text-xxxs font-bold uppercase"
              >
                sign up
              </Link>
            </div>
            <div>
              <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <label className={text}>email</label>
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
                    <p className={errText}>{errors.email?.message || error}</p>
                  </div>
                )}
                <label className={text}>password</label>
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
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                  >
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
                    <p className={errText}>
                      {errors.password?.message || error}
                    </p>
                  </div>
                )}
                <div className="flex justify-between mb-10">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      {...register("rememberMe")}
                      style={{
                        width: "16px",
                        height: "16px",
                        border: "1px solid #BFBFBF",
                        backgroundColor: "transparent",
                        appearance: "none",
                      }}
                    />
                    <p className={text}>remember me</p>
                  </div>

                  <Link href="/reset-password" className={text}>
                    forgot password?
                  </Link>
                </div>
                <Button title="Log in" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="backgroundImage-login 
      h-[148px] tablet:h-[260px] 
      desktop:h-full desktop:min-w-[700] w-full mb-20"
      ></div>
    </>
  );
}

export default Login;
