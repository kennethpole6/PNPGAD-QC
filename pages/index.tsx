import { Button } from "@mantine/core";
import Link from "next/link";
import { ReactElement } from "react";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/login">
        <Button>Login</Button>
      </Link>
    </div>
  );
};

export default Home;

//Removing the navbar & sidebar components by returning page
Home.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
