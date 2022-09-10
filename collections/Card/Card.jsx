import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    FlexTextBox,
    TextBoxWrapper,
    BlackA,
    H2Link,
    TextImgBox,
    TextArea,
    Paragraph
} from "./elements";

import {
    faSearch,
    faClipboard,
    faMagnifyingGlass,
    faPeopleGroup
  } from "@fortawesome/free-solid-svg-icons";

export const Card = ({text: {text1, text2, text3}}) => {
    return (
        <TextBoxWrapper>
        
        <FlexTextBox width={90}>

        <TextImgBox>
        <FontAwesomeIcon
            icon={faClipboard}
            style={{ fontSize: 45,color: "black" }}
        />
      </TextImgBox>
        <TextArea>
            <H2Link>{text1.title}</H2Link>
            <Paragraph>{text1.text}</Paragraph>
        </TextArea>

        </FlexTextBox>
        <FlexTextBox width={95}>

        <TextImgBox>
        <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ fontSize: 45, color: "black" }}
        />
      </TextImgBox>

        <TextArea>
            <H2Link>{text2.title}</H2Link>
            <Paragraph>{text2.text}</Paragraph>
        </TextArea>

        </FlexTextBox>
        <FlexTextBox width={100}>

        <TextImgBox>
        <FontAwesomeIcon
            icon={faPeopleGroup}
            style={{ fontSize: 45, color: "black" }}
        />
      </TextImgBox>

        <TextArea>
            <H2Link>{text3.title}</H2Link>
            <Paragraph>{text3.text}</Paragraph>
        </TextArea>

        </FlexTextBox>

        </TextBoxWrapper>
    )
}