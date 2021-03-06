import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import RoomCode, { RoomCodeTextPropsType } from '../../components/atoms/texts/RoomCode';

export default {
  title: 'pupagoAtom/RoomCode',
  component: RoomCode,
} as Meta;

const Template: Story<RoomCodeTextPropsType> = (args) => <RoomCode {...args} />;

export const Active = Template.bind({});
Active.args = {
  code: 'A12B',
};
