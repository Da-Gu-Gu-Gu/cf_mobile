import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
// import Header from '../../components/Header';
import {theme} from '../../utils/theme';

const CrushList = () => {
  return (
    <View style={styles.wrapper}>
      {/* <Header /> */}
      <View style={styles.titleWrap}>
        <Text style={styles.title}>Your List</Text>
        <Text style={styles.listCount}>3/5</Text>
      </View>
      <View style={styles.listWrap}>
        <View style={styles.row}>
          <Text>AA</Text>
        </View>
      </View>
    </View>
  );
};

export default CrushList;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: theme.white,
    paddingTop: 40,
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 25,
    color: theme.black,
  },
  listCount: {
    padding: 5,
    borderRadius: 5,
    color: theme.white,
    backgroundColor: theme.primary,
  },
  listWrap: {
    padding: 20,
    borderRadius: 5,
    marginTop: 30,
    shadowColor: theme.black,
    backgroundColor: theme.white,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    height: 400,
    elevation: 9,
  },
  row: {
    flexDirection: 'row',
  },
});
