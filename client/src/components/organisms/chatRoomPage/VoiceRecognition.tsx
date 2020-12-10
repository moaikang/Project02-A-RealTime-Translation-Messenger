import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import VoiceRecognitionModal from '../../molecules/chatRoomPage/VoiceRecognitionModal';
import useChatInput from '../../../hooks/useChatInput';

export type VoiceRecognitionPropsType = {
  onClickBackground: () => void;
};

function VoiceRecognition({ onClickBackground }: VoiceRecognitionPropsType) {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const { onSetChatInput } = useChatInput();

  useEffect(() => {
    SpeechRecognition.startListening({
      continuous: true,
    });
    return () => {
      resetTranscript();
      SpeechRecognition.stopListening();
    };
  }, []);

  useEffect(() => {
    let timer: number = 0;
    if (transcript !== '') {
      timer = setTimeout(() => {
        SpeechRecognition.stopListening();
        resetTranscript();
        onClickBackground();
      }, 2000);
      onSetChatInput(transcript);
    } else {
      timer = setTimeout(() => {
        SpeechRecognition.stopListening();
        resetTranscript();
        onClickBackground();
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [transcript]);

  return (
    <div>
      <VoiceRecognitionModal
        onClickBackground={() => {
          SpeechRecognition.stopListening();
          resetTranscript();
          onClickBackground();
        }}
      />
    </div>
  );
}

export default VoiceRecognition;
