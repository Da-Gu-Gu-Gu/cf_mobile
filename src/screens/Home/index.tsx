import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {theme} from '../../utils/theme';
import Header from '../../components/Header';

const RightEle = () => {
  return (
    <TouchableOpacity onPress={() => console.log('right')}>
      <Image
        source={{uri: 'https://api.multiavatar.com/Starcrasher.png'}}
        style={styles.img}
      />
    </TouchableOpacity>
  );
};

const Title = () => {
  return <Text style={styles.title}>Discover</Text>;
};

const index = () => {
  return (
    <View style={styles.flex}>
      <StatusBar backgroundColor={theme.primary} />
      <Header LeftEle={() => <Title />} RightEle={() => <RightEle />} />
      {/* body */}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: theme.white,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.black,
  },
  iconWrapper: {
    padding: 5,

    backgroundColor: theme.white,
  },
  img: {
    width: 30,
    height: 30,
    shadowColor: theme.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
});
