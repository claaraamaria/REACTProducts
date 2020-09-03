import React from "react";
import Navs from "./Nav";
import Title from "./Title";

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title title="Project" subtitle="A little project" />
      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;
