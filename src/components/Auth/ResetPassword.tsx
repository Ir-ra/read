import Link from "next/link";

export const Reset = ({ email }: { email: string }) => {
  const handleResendClick = () => {
    window.location.reload();
  };
  return (
    <div>
      <h2>Reset your password</h2>
      <p>
        We have sent a link to reset you password to your email
        <span>{email}</span>
      </p>
      <div>
        <p>If you can’t find the mail, please check your spam folder or</p>
        <button type="button" onClick={handleResendClick}>
          Resend
        </button>
      </div>
      <Link href="/login"> Remember your password?</Link>
    </div>
  );
};
