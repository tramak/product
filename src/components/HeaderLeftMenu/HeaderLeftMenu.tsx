import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { MENU_COLOR } from 'src/themes/color';

const HeaderLeftMenu = ({ toggleDrawer }) => {
    return (
        <Entypo name="menu" size={24} color={MENU_COLOR} />
    )
};

export default HeaderLeftMenu;
