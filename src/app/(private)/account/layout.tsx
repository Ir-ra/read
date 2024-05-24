import { AccountBar } from "@/components/AccountBar/AccountBar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AccountBar />
      {children}
    </div>
  );
}
