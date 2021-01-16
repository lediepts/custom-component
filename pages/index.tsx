import React from "react";
import Button_RECT from "../components/effect/hover/button-rect";
import MenuHover from "../components/effect/menuHover";
import SlideComponent from "../components/slide";
import Layout from "../components/UI/layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <SlideComponent
          imgCount={10}
          folderUrl={"/images/slide"}
          timePerImg={5}
          toRight
        />
      </div>
      <div>
        <Button_RECT />
      </div>
      <div>
        <MenuHover />
        <i className="fas fa-user"></i>
      </div>
      <p className="test">aaaaaaaa</p>
    </Layout>
  );
}
