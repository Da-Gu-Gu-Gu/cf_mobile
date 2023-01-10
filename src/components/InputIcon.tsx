import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {theme} from '../utils/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface InputIconProps {
  icon: string;
  inputProps?: TextInputProps;
}

const InputIcon = ({icon, inputProps = {}}: InputIconProps) => {
  return (
    <View style={styles.searchWrapper}>
      <TouchableOpacity style={styles.searchIconWrapper}>
        <Icon name={icon} size={24} color={theme.white} />
      </TouchableOpacity>
      <View style={styles.searchInput}>
        <TextInput {...inputProps} />
      </View>
    </View>
  );
};

export default InputIcon;

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 15,
    borderRadius: 3,
    height: 44,
    backgroundColor: theme.primaryLight,
  },
  searchIconWrapper: {
    width: 50,
    height: 44,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.primary,
  },
  searchInput: {
    flexGrow: 1,
    paddingLeft: 10,
    backgroundColor: theme.gray,
  },
});
