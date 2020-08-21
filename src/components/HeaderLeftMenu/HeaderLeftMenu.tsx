import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { MENU_COLOR } from 'src/themes/color';
import { GestureResponderEvent } from "react-native";

type HeaderLeftMenuProps = {
    toggleDrawer: GestureResponderEvent
};

const HeaderLeftMenu: React.FC<HeaderLeftMenuProps> = ({ toggleDrawer }) => {
    return (
        <Entypo name="menu" size={24} color={MENU_COLOR} onPress={toggleDrawer} />
    )
};

export default HeaderLeftMenu;
