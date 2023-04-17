import React from 'react'
import styled from 'styled-components'
import FolderWithName from '../Common/FolderWithName'

const ShowFolderContainer = styled("div")`
  .show-folder {
    display: grid;
    grid-template-columns: repeat(auto-fill, 120px);
    gap: 20px;
  }
`;
const ShowFolders = () => {
  return (
    <ShowFolderContainer>
      <h3 className=''>Folders</h3>
      <div className='show-folder'>
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
        <FolderWithName />
      </div>
    </ShowFolderContainer>
  )
}

export default ShowFolders
