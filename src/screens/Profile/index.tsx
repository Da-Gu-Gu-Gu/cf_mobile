import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';

const Profile = () => {
  return (
    <View>
      <Header />
      <View style={styles.wrapper}>
        <Text>Profile Screen</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
});
