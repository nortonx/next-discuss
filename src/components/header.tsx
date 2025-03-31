import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar
} from "@nextui-org/react";
import { auth } from "@/auth";
import * as actions from "@/app/actions";

export default async function Header() {
  const session = await auth();

  let authContent: React.ReactNode;

  if (session?.user) {
    authContent = <Avatar src={session?.user?.image ?? ""} />
  } else {
    authContent = <>
      <NavbarItem>
        <Button type="submit" color="secondary" variant="bordered" >
          Sign In
        </Button>
      </NavbarItem>

      <NavbarItem>
        <Button type="submit" color="primary" variant="flat">
          Sign Up
        </Button> 
      </NavbarItem>
    </>
  }

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">Discuss</Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <Input placeholder="Search" />
      </NavbarContent>

      <NavbarContent justify="end">
        <form action={session?.user ? actions.signOut : actions.signIn} className="flex justify-between">
          {authContent}
        </form>
      </NavbarContent>
    </Navbar>
  )
}