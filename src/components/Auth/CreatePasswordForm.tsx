"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

import { Success } from "@/components/Auth/Success";
import { Button } from "@/components/Button/Button";
import { Cross } from "@/components/icons";
import { CreatePasswordSchema } from "@/services/yupSchems";

type FormData = {
  password: string;
  confirmPassword: string;
};

export const CreatePasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState<string>("");
  const [isUser, setIsUser] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(CreatePasswordSchema),
  });

  const onSubmit = async (data: FormData) => {
    const user = {
      password: data.password,
    };

    console.log(user);
    setIsUser(true);
  };

  return (
    <div>
      {!isUser ? (
        <>
          {" "}
          <h2 className="desktop:text-l text-s font-bold uppercase mb-10">
            Create new password
          </h2>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label className="text">password</label>
            <div
              style={{
                borderBottomWidth: "1px",
                borderColor: errors.password ? "#E64035" : "#1C1C1C",
                marginBottom: errors.password ? "8px" : "40px",
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
            {errors.password && (
              <div className="flex gap-1 items-center mb-10">
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
              <Button title="Reset password" />
            </div>
          </form>
        </>
      ) : (
        <Success />
      )}
    </div>
  );
};
