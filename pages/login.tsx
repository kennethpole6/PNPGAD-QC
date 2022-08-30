import Link from "next/link";
import { Button } from "@mantine/core";
import { ReactElement } from "react";

const Login = () => {
  return (
    <>
      <h1>Login page</h1>
      <Link href="/dashboard">
        <Button>Login</Button>
      </Link>
    </>
  );
};

export default Login;

//Removing the navbar & sidebar components by returning page
Login.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
