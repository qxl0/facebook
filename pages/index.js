import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import { getSession } from "next-auth/react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

export default function Home({ session }) {
  if (!session) {
    return <Login />;
  }
  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex">
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* widgets */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // get user
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
