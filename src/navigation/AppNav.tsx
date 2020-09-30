import React from 'react';
import {connect, ConnectedProps} from "react-redux";
import LoginNav from "src/navigation/LoginNav";
import MenuNav from "src/navigation/MenuNav";
import { RootState } from "src/reducers";


const mapState = (state: RootState) => ({
  isGuest: state.settings.user.isGuest,
});

const connector = connect(mapState);

type Props = ConnectedProps<typeof connector>;

const AppNav: React.FC<Props> = props => {
  const { isGuest } = props;

  if (isGuest) {
    return <LoginNav />;
  }

  return <MenuNav />;
};

export default connector(AppNav);
