import { Title } from "@mantine/core";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <Link href="/">
        <Title>PNP GAD</Title>
      </Link>
      <Link href="/">Logout account</Link>
    </>
  );
};

export default Navbar;
