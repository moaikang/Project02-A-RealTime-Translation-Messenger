import React from 'react';
import styled from 'styled-components';

import CheckBox from '../../atoms/boxes/CheckBox';
import Text from '../../atoms/texts/Text';
import UnderLinedInput from '../../atoms/inputs/UnderLinedInput';
import Palette from '../../../@types/Palette';

export type RoomCreationPropsType = {
  TypedWordCount: number;
  MaxWordCount: number;
  privateSelected?: boolean;
  InputOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isPrivateOnClick: (isPrivate: 'true' | 'false') => void;
};

const RoomCreationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 344px;
  margin-bottom: 96px;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  margin-bottom: 56px;

  & > div {
    margin-right: 30px;
  }

  &:last-child {
    margin: 0;
  }
`;

const RightAlignedText = styled(Text)`
  display: flex;
  align-self: flex-end;
  margin-top: 4px;
`;

export const RoomCreation = ({
  TypedWordCount,
  MaxWordCount,
  privateSelected,
  InputOnChange,
  value,
  isPrivateOnClick,
}: RoomCreationPropsType) => {
  return (
    <>
      <CheckBoxWrapper>
        <CheckBox isChecked={privateSelected ? false : true} isPrivateOnClick={isPrivateOnClick} isPrivate={'false'}>
          공개
        </CheckBox>
        <CheckBox isChecked={privateSelected ? true : false} isPrivateOnClick={isPrivateOnClick} isPrivate={'true'}>
          비공개
        </CheckBox>
      </CheckBoxWrapper>
      <RoomCreationWrapper>
        <UnderLinedInput
          value={value}
          placeholder={'방 제목을 입력해주세요.'}
          maxLength={30}
          onChange={InputOnChange}
        />
        <RightAlignedText
          size={14}
          color={Palette.PUPAGO_BLUE}
        >{`${TypedWordCount} / ${MaxWordCount}`}</RightAlignedText>
      </RoomCreationWrapper>
    </>
  );
};

export default RoomCreation;