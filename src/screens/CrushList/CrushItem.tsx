import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../../utils/theme';
import Icon from 'react-native-vector-icons/Feather';

const CrushItem = () => {
  return (
    <View style={styles.row}>
      {/* Image Profile */}
      <View style={styles.profileWrapper}>
        <Image
          source={{uri: 'https://api.multiavatar.com/Starcrasher.png'}}
          style={styles.profile}
        />
      </View>
      {/* end */}
      <Text style={styles.name}>Brah Barh</Text>
      <TouchableOpacity style={[styles.profileWrapper, styles.actionWrapper]}>
        <Icon name="trash" color={theme.red} size={23} />
      </TouchableOpacity>
    </View>
  );
};

export default CrushItem;

const styles = StyleSheet.create({
  row: {
    marginBottom: 10,
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 14,
    backgroundColor: theme.secondary,
    borderRadius: 5,
    alignItems: 'center',
  },
  profileWrapper: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: theme.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    width: 35,
    height: 35,
  },
  name: {
    fontSize: 15,
    fontFamily: 'Inter-SemiBold',
    marginHorizontal: 10,
    color: theme.white,
    flex: 1,
  },
  actionWrapper: {
    width: 75,
  },
});
