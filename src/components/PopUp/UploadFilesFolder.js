import React, { useState } from "react";
import styled from "styled-components";

const UploadFilesFolderContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  .upload-content {
    width: 500px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    transition: all 0.1ms ease-in-out 0.1ms;
    background: #fafafa;
  }
`;
const UploadFilesFolder = () => {
  const [fileList, setFileList] = useState(null);
  const handleFileChange = (e) => {
    setFileList(e.target.files);
  };

  const files = fileList ? [...fileList] : [];
  return (
    <UploadFilesFolderContainer>
      <div className="upload-content">
        <input type="file" onChange={handleFileChange} multiple />
        <ul>
          {files.map((file, i) => {
            return (
              <li key={i}>
                {file.name} - {file.type}
              </li>
            );
          })}
        </ul>
      </div>
    </UploadFilesFolderContainer>
  );
};

export default UploadFilesFolder;
