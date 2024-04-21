import Link from "next/link";

import { LoginForm } from "@/components/Auth/LoginForm";
import { Logo } from "@/components/Logo/Logo";

function Login() {
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
              <p className="text">If you don’t have an account</p>
              <Link
                href="/registration"
                className="text-xxxs font-bold uppercase"
              >
                sign up
              </Link>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
      <div className={`backgroundImage-login  bgImg`}></div>
    </>
  );
}

export default Login;
