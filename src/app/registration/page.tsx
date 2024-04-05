"use client";
import { Logo } from "../components/Logo/Logo";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Cross } from "../components/icons";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import { createUser } from "../../services/getAPI";

type FormData = {
  email: string;
  firstName: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object({
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

function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const newUser = {
      first_name: data.firstName,
      last_name: data.firstName,
      email: data.email,
      password: data.password,
    };
    try {
      const res = await createUser(newUser);
      if (res) {
        console.log(res);
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const text = "text-xxxs font-light uppercase";
  const errText = "text-supperSmall text-AccentRed uppercase font-light";

  return (
    <main className="flex flex-col-reverse desktop:flex-row h-[100vh] w-full justify-end pb-6 desktop:pb-0">
      <div className="desktop:pl-10 desktop:pt-10">
        <div className="hidden desktop:block">
          <Logo />
        </div>
        <div className="px-4 desktop:px-[135px] ">
          <div
            className=" flex flex-col max-w-[327px] mx-auto 
          tablet:max-w-[436px] desktop:mx-0 desktop:min-w-[440px]"
          >
            <h2 className="text-s font-bold uppercase mb-6">sign up</h2>
            <div className="flex flex-col gap-1 tablet:gap-2 tablet:flex-row mb-10">
              <p className={text}>If you don’t have an account </p>
              <Link href="/login" className="text-xxxs font-bold uppercase">
                log in here
              </Link>
            </div>
            <div>
              <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <label className={text}>email</label>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="Enter your email address"
                  className={text.concat(" px-6 py-4 outline-none")}
                  style={{
                    borderBottomWidth: "1px",
                    borderColor: errors.email ? "#E64035" : "#1C1C1C",
                    marginBottom: errors.email ? "8px" : "24px",
                  }}
                />
                {errors.email && (
                  <div className="flex gap-1 items-center mb-6">
                    <Cross />
                    <p className={errText}>{errors.email.message}</p>
                  </div>
                )}

                <label className={text}>user name</label>
                <input
                  type="text"
                  {...register("firstName", { required: true })}
                  placeholder="Enter your user name"
                  className={text.concat(" px-6 py-4 outline-none")}
                  style={{
                    borderBottomWidth: "1px",
                    borderColor: errors.firstName ? "#E64035" : "#1C1C1C",
                    marginBottom: errors.firstName ? "8px" : "24px",
                  }}
                />
                {errors.firstName && (
                  <div className="flex gap-1 items-center mb-6">
                    <Cross />
                    <p className={errText}>{errors.firstName.message}</p>
                  </div>
                )}

                <label className={text}>password</label>
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
                    className={text.concat(" py-4 pl-6 outline-none")}
                    style={{ width: "calc(100% - 56px)" }}
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
                  <div className="flex gap-1 items-center mb-6">
                    <Cross />
                    <p className={errText}>{errors.password.message}</p>
                  </div>
                )}
                <label className={text}>confirm password</label>
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
                    className={text.concat(" py-4 pl-6 outline-none")}
                    style={{ width: "calc(100% - 56px)" }}
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
                    <p className={errText}>{errors.confirmPassword.message}</p>
                  </div>
                )}
                <button className="px-8 py-4 text-m font-normal uppercase text-White bg-Black">
                  sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="backgroundImage-registr h-[148px] tablet:h-[260px] desktop:h-full desktop:min-w-[750px] w-full mb-20"></div>
    </main>
  );
}

export default Registration;
