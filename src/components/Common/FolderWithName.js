import React from "react";
import styled from "styled-components";
import FolderIcon from "../../assets/mac-folder.png";

const FolderWithNameContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
    height: 100px;
  }
  span {
    font-size: 14px;
    width: 100px;
    word-wrap: break-word;
    font-weight: 500;
  }
`;
const FolderWithName = () => {
  return (
    <FolderWithNameContainer>
      <img src={FolderIcon} alt="foldericon" />
      <span>NameOfTheFolder</span>
    </FolderWithNameContainer>
  );
};

export default FolderWithName;
