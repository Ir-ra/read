"use client";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";
import Layout from "../../layoutAboutUs";

const AboutUs = () => {
  const pathname = usePathname()

  console.log(pathname)

  const getContent = () => {
    switch (pathname) {
      case "/about/payment":
        return <div>payment</div>;
      case "/about/exchange":
        return <div>exchange</div>;
      case "/about/questions":
        return <div>FAQ</div>;
      default:
        return <div>Not Found</div>;
    }
  };

  return <Layout>{getContent()}</Layout>;
};

export default AboutUs;
