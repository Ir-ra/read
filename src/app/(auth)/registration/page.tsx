import Link from "next/link";

import { RegisterForm } from "@/components/Auth/RegisterForm";
import { Logo } from "@/components/Logo/Logo";

function Registration() {
  return (
    <>
      <div className="desktop:mt-10">
        <div className="hidden desktop:block desktop:mb-[72px]">
          <Logo />
        </div>
        <div className="px-4 desktop:px-[135px] ">
          <div
            className=" flex flex-col max-w-[327px] mx-auto 
          tablet:max-w-[436px] desktop:mx-0 desktop:min-w-[440px]"
          >
            <h2 className="text-s font-bold uppercase mb-6">sign up</h2>
            <div className="flex flex-col gap-1 tablet:gap-2 tablet:flex-row mb-10">
              <p className="text">If you don’t have an account </p>
              <Link href="/login" className="text-xxxs font-bold uppercase">
                log in here
              </Link>
            </div>
            <RegisterForm />
          </div>
        </div>
      </div>
      <div className={`backgroundImage-registr bgImg`}></div>
    </>
  );
}

export default Registration;
