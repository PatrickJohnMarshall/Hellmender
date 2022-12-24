import { TextBlock, TextDiv } from "../components/Intro/introStyles";

export default function makeTextComponent(textArray) {
  const textBlock = [];

  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].type === "div") {
      textBlock.push(
        <TextDiv className="rpgui-container framed-grey" row={i + 2}>
          {textArray[i].props.children}
        </TextDiv>
      );
      continue;
    }

    textBlock.push(<TextBlock row={i + 2}>{textArray[i]}</TextBlock>);
  }

  return textBlock;
}
