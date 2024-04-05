"use client";
import { Logo } from "../components/Logo/Logo";
import Link from "next/link";
import { useForm } from "react-hook-form";

function Registration() {
  return (
    <main className="flex flex-col-reverse desktop:flex-row h-[100vh] justify-end">
      <div>
        <Logo />
        <h2>sign up</h2>
        <div>
          <p>If you don’t have an account </p>
          <Link href="/login">log in here </Link>
        </div>
      </div>
      <div className="backgroundImage-registr h-[148px] tablet:h-[260px] desktop:h-full desktop:min-w-[750px] w-full"></div>
    </main>
  );
}

export default Registration;
