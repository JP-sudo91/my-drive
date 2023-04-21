import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../App";

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
  const { isOpenUpload, setIsOpenUpload } = useContext(GlobalContext);
  const handleFileChange = (e) => {
    setFileList(e.target.files);
  };

  //when click outside of the ref-element
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpenUpload(false);
    }
  };

  //make the event which click than handleClickOutside call
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  const ref = useRef(null);
  const files = fileList ? [...fileList] : [];
  return (
    <>
      {isOpenUpload && (
        <UploadFilesFolderContainer>
          <div className="upload-content" ref={ref}>
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
      )}
    </>
  );
};

export default UploadFilesFolder;
