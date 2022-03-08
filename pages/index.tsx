import type { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import { ListingCard } from "../components/ListingCard";
import { Login } from "../components/Login";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <Sidebar>
        <h1 style={{ fontSize: 20 }}>Hello, {session.user.name}</h1>
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
      </Sidebar>
    );
  }
  return <Login />;
};

export default Home;
