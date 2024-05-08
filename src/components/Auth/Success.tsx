import Link from "next/link";

export const Success = () => {
  return (
    <div className="flex gap-10 flex-col">
      <h2 className="text-s font-bold uppercase desktop:text-l">Horay!</h2>
      <p className="text-xxxs font-bold uppercase tablet:text-xxs">
        You have successfully created new password
      </p>
      <Link
        href="/login"
        className={`flex justify-center bg-Black py-4 px-8
      text-Background text-s tablet:text-sm desktop:text-m w-full font-normal uppercase
      box-border border border-Black
      transition duration-300 ease-in-out
      hover:bg-White hover:text-Black
      active:bg-White active:text-Black`}
      >
        Log in
      </Link>
    </div>
  );
};
