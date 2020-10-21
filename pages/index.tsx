import React from "react";
import SlideComponent from "../components/slide";
import Layout from "../components/UI/layout";

export default function Home() {
  return (
    <Layout>
      <div style={{ width: "80vw", height: 100, margin: "100px auto" }}>
        <SlideComponent
          imgCount={10}
          folderUrl={"/images/slide"}
          timePerImg={5}
          toRight
        />
      </div>
    </Layout>
  );
}
