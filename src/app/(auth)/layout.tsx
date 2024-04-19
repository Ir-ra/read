export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col-reverse desktop:flex-row desktop:h-[100vh] justify-end desktop:pl-10 pb-[164px] tablet:pb-[369px] desktop:pb-0">
      {children}
    </main>
  );
}
