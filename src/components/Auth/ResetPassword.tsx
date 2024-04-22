import Link from "next/link";

export const ResetPassword = ({ email }: { email: string }) => {
  const handleResendClick = () => {
    window.location.reload();
  };

  const mainText = "text-xxxs font-light uppercase tablet:text-xxs";
  return (
    <div className="flex gap-10 flex-col">
      <h2 className="text-s font-bold uppercase desktop:text-l ">
        Reset your password
      </h2>
      <p className={mainText}>
        We have sent a link to reset you password to your email
        <span className="text-xxxs font-bold uppercase tablet:text-xxs">
          {email}
        </span>
      </p>

      <div className="flex gap-2 items-end">
        <p className={mainText}>
          If you can’t find the mail,
          <br />
          please check your spam folder or
        </p>
        <button
          type="button"
          onClick={handleResendClick}
          className="text-xxxs font-bold uppercase tablet:text-xxs"
        >
          Resend
        </button>
      </div>
      <Link
        href="/login"
        className="text-xxxs font-bold uppercase tablet:text-xxs"
      >
        Remember your password?
      </Link>
    </div>
  );
};
