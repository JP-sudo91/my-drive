import React from "react";
import styled from "styled-components";
import RecentSection from "../ShowSection/RecentSection";
import ShowFiles from "../ShowSection/ShowFiles";
import ShowFolders from "../ShowSection/ShowFolders";

const MainContainer = styled("div")`
  width: 100%;
  padding: 20px;
  background: #fafaf1;
  border-radius: 20px;
`;
const MainPage = () => {
  return (
    <MainContainer>
      <RecentSection />
      <ShowFolders />
      <ShowFiles />
    </MainContainer>
  );
};

export default MainPage;
