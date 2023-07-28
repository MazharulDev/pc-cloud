import RootLayout from "@/components/Layouts/RootLayout";
import LoginPage from "@/components/UI/Login";
import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <LoginPage />
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
