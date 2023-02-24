import { ReactNode } from "react";
import Head from "next/head";
import NavbarApp from "@/components/Navbar";

interface Props {
  title?: string;
  author?: string;
  description?: string;
  children?: ReactNode;
}

const origin = window.location.origin || "";

const MainLayout = ({
  children,
  title = "Pokemon app",
  author,
  description = "",
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content={author || "John Vente"} />
        <meta name="description" content={`${title} ${description}`} />
        <meta name="keywords" content="XXXX, pokeapp, pokedemx, " />
        <meta property="og:title" content={`information about ${title}`} />
        <meta
          property="og:description"
          content={`This information is about ${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/images/banner_pokeapp.png`}
        />
      </Head>

      <NavbarApp />

      <main>{children}</main>
    </>
  );
};

export default MainLayout;
