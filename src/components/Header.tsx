import {StyleSheet, View, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {theme} from '../utils/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

interface Props {
  LeftEle?: () => JSX.Element | undefined;
  RightEle?: () => JSX.Element | undefined;
  customStyle?: ViewStyle;
}

const defaultLeftEle = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={styles.iconWrapper}>
        <Icon name="arrow-left" size={23} color={theme.black} />
      </View>
    </TouchableOpacity>
  );
};

const Header = ({LeftEle, RightEle, customStyle}: Props) => {
  const left = LeftEle ? LeftEle() : defaultLeftEle();
  const right = RightEle && RightEle();

  return (
    <View style={[styles.row, customStyle && customStyle]}>
      {left}
      {right}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.white,
  },
  iconWrapper: {
    padding: 5,
    shadowColor: theme.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
