import Header from "./components/Header/Header";
import "./App.css";
import MainContainer from "./components/MainContainer/MainContainer";
import { createContext, useState } from "react";
import NewFolderPopup from "./components/PopUp/NewFolderPopup";
import styled from "styled-components";
import UploadFilesFolder from "./components/PopUp/UploadFilesFolder";
const AppContainer = styled("div")`
  z-index: ${(p) => p.isOpen && "-1"};
  opacity: ${(p) => (p.isOpen ? 0.5 : 1)};
  position: relative;
`;
export const GlobalContext = createContext();

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [foldersArr, setFoldersArr] = useState([]);
  return (
    <GlobalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        foldersArr,
        setFoldersArr,
      }}
    >
      {/* {isOpen ? <NewFolderPopup /> : <></>} */}
      {isOpen ? <UploadFilesFolder /> : <></>}
      <AppContainer className="App" isOpen={isOpen}>
        <Header />
        <MainContainer  />
      </AppContainer>
    </GlobalContext.Provider>
  );
}

export default App;
