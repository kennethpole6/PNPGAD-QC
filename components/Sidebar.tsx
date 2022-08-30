import { Navbar, NavLink } from "@mantine/core";
import Link from "next/link";
import {
  IconHome,
  IconClipboard,
  IconFriends,
  IconArticle,
  IconUsers,
  IconFileReport,
} from "@tabler/icons";

interface LinkProps {
  link: string;
  label: string;
}

const Sidebar = () => {
  return (
    <Navbar height={700} width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Link href="/dashboard">
          <NavLink
            label="Dashboard"
            icon={<IconHome color="gray" stroke={1.5} />}
          />
        </Link>
        <Link href="/reports">
          <NavLink
            label="Reports"
            icon={<IconClipboard color="gray" stroke={1.5} />}
          />
        </Link>
        <Link href="/people">
          <NavLink
            label="People"
            icon={<IconFriends color="gray" stroke={1.5} />}
          />
        </Link>
        <Link href="/cases">
          <NavLink
            label="Cases"
            icon={<IconArticle color="gray" stroke={1.5} />}
          />
        </Link>
        <Link href="/users">
          <NavLink
            label="Users"
            icon={<IconUsers color="gray" stroke={1.5} />}
          />
        </Link>
        <Link href="/summary">
          <NavLink
            label="Summary Report"
            icon={<IconFileReport color="gray" />}
          />
        </Link>
      </Navbar.Section>
    </Navbar>
  );
};

export default Sidebar;
