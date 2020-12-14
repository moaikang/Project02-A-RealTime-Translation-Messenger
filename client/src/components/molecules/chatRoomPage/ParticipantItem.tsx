import React from 'react';
import styled from 'styled-components';

import ProfileImage from '../../atoms/resources/ProfileImage';
import LanguageTag from '../../atoms/resources/LanguageTag';
import Text from '../../atoms/texts/Text';

export type ParticipantItemPropsType = {
  imageLink: string;
  language: 'Korean' | 'English';
  isMe: boolean;
  nickname: string;
};

const ParticipantItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 232px;
  height: 40px;
`;

const TextWrapper = styled.div`
  width: 152px;
`;

export const ParticipantItem = ({ imageLink, language, isMe, nickname }: ParticipantItemPropsType) => {
  return (
    <ParticipantItemWrapper>
      <ProfileImage size="size-40" image={imageLink} isMe={isMe} />
      <TextWrapper>
        <Text size={14} color="black">
          {nickname}
        </Text>
      </TextWrapper>
      <LanguageTag language={language} isMe={isMe} />
    </ParticipantItemWrapper>
  );
};

export default ParticipantItem;