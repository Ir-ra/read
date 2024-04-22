"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { ResetPassword } from "@/components/Auth/ResetPassword";
import { Button } from "@/components/Button/Button";
import { Cross } from "@/components/icons";
import { resetPassword } from "@/services/getAPI";
import { ForgotPasswordSchema } from "@/services/yupSchems";

import { Logo } from "../Logo/Logo";

type FormData = {
  email: string;
};

function Forgot_password() {
  const [error, setError] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [isUser, setIsUser] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(ForgotPasswordSchema),
  });

  const onSubmit = async (data: FormData) => {
    const user = {
      email: data.email,
    };

    console.log(user);
    setUserEmail(user.email);
    try {
      const response = await resetPassword(user, setError);
      console.log(response);
      setIsUser(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" desktop:mt-10"></div>
      <div className="hidden desktop:block desktop:mb-[72px]">
        <Logo />
      </div>
      <div className="px-4 desktop:px-[135px] ">
        <div
          className=" flex flex-col max-w-[327px] mx-auto 
              tablet:max-w-[436px] desktop:mx-0 desktop:min-w-[440px]"
        >
          {!isUser ? (
            <>
              <h2 className="text-s font-bold uppercase mb-6 desktop:text-l">
                Forgot password
              </h2>
              <div className="flex flex-col gap-1 tablet:gap-2 tablet:flex-row mb-10">
                <p className="text">If you don’t have an account </p>
                <Link href="/login" className="text-xxxs font-bold uppercase">
                  log in here
                </Link>
              </div>
              <div className="mb-10">
                <p className="text">
                  Enter the email address associated with your account
                  <br />
                  and we`ll send you a link to reset your password
                </p>
              </div>

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
                    marginBottom: errors.email ? "24px" : "40px",
                    backgroundColor: "transparent",
                  }}
                />
                {(errors.email || error) && (
                  <div className="flex gap-1 items-center mb-6">
                    <Cross />
                    <p className="errText">{errors.email?.message || error}</p>
                  </div>
                )}
                <Button title="Send" />
              </form>
            </>
          ) : (
            <ResetPassword email={userEmail} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Forgot_password;
