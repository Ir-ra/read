import { CreatePasswordForm } from "@/components/Auth/CreatePasswordForm";
import { Logo } from "@/components/Logo/Logo";

function Create_password() {
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
            <CreatePasswordForm />
          </div>
        </div>
      </div>
      <div className={`backgroundImage-login  bgImg`}></div>
    </>
  );
}

export default Create_password;
