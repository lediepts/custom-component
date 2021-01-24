import React, { ReactNode } from "react";
import Footer from "./footer";
import styles from "./styles/layout.module.scss";

interface Props {
  children: ReactNode;
}
function Layout({ children }: Props) {
  console.log(process.env.API_URL);
  return (
    <>
      <main className={styles.main}>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
