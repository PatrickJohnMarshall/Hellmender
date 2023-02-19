import styled from "styled-components";
import { FileType } from "state/GameState";

const SaveShell = styled.div.attrs(() => ({
  className: "rpgui-container framed-grey",
}))`
  height: 150px;
  width: 250px;
  grid-template-rows: 1fr 5px 1fr;
  align-self: center;
  justify-self: center;
`;

export const SaveSlot: React.FC<{ fileInfo: FileType | undefined }> = ({
  fileInfo,
}) => {
  let innerString = "Empty";

  if (fileInfo) {
    innerString = `${fileInfo.date} \n ${fileInfo.playerName}`;
  }
  return <SaveShell>{innerString}</SaveShell>;
};
