import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import {theme} from '../../utils/theme';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from './Card';
import {useNavigation} from '@react-navigation/native';
import {NotiScreenProps} from '../../navigation/types/router';

const RightEle = () => {
  const navigation = useNavigation<NotiScreenProps>();
  return (
    <TouchableOpacity
      style={styles.iconWrapper}
      onPress={() => navigation.navigate('Noti')}>
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

const Home = () => {
  return (
    <View style={styles.flex}>
      <StatusBar backgroundColor={theme.primary} />
      <Header
        LeftEle={() => <Title />}
        RightEle={() => <RightEle />}
        customStyle={{height: 90}}
      />
      {/* search */}
      <View style={styles.searchWrapper}>
        <TouchableOpacity style={styles.searchIconWrapper}>
          <Icon name="search" size={24} color={theme.white} />
        </TouchableOpacity>
        <View style={styles.searchInput}>
          <TextInput placeholder="Search" />
        </View>
      </View>

      {/* body */}
      <View style={styles.margin}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <View style={styles.gap} />}
          ListFooterComponent={() => <View style={styles.gap} />}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({item}) => <Card data={item} />}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: theme.white,
  },
  margin: {
    marginHorizontal: 15,
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: theme.black,
    fontFamily: 'Inter-SemiBold',
  },
  iconWrapper: {
    padding: 5,
    backgroundColor: theme.white,
    borderRadius: 3,
    shadowColor: theme.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  img: {
    width: 30,
    height: 30,
  },
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
  gap: {
    height: 20,
  },
});
