import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/loader";
const Index = () => {
  const router = useRouter();
  useEffect(() => {
    const login = localStorage.getItem("login-token");
    if (login) {
      router.push("/home");
    } else {
      router.push("/login");
    }
  }, [router]);
  return <Loader />;
};

export default Index;
Index.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
