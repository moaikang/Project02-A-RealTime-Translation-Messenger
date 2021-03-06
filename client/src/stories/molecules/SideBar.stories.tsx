import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SideBar, { SideBarPropsType } from '../../components/molecules/chatRoomPage/SideBar';
import { SideBarStatus } from '../../@types/types';

export default {
  title: 'pupagoMolecule/SideBar',
  component: SideBar,
} as Meta;

const Template: Story<SideBarPropsType> = (args) => <SideBar {...args} />;

export const PaddingShow = Template.bind({});
PaddingShow.args = {
  children: 'Padding을 보여주기 위한 텍스트',
  selected: SideBarStatus.PARTICIPANTS,
};

export const Empty = Template.bind({});
Empty.args = {
  children: '',
  selected: SideBarStatus.CHAT_ROOMS,
};
