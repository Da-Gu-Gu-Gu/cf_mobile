import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {theme} from '../../utils/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenProps} from '../../navigation/types/router';

const Login = () => {
  const navigation = useNavigation<HomeScreenProps>();

  return (
    <View style={styles.flex}>
      <View style={styles.topHalf}>
        <ImageBackground
          source={require('../../assets/background.png')}
          resizeMode="stretch"
          style={styles.image}>
          <View style={styles.titleWrap}>
            <Text style={styles.appName}>CRUSH FINDER</Text>
            <Text style={styles.appName}>📡</Text>
          </View>
        </ImageBackground>
      </View>

      {/* login button  */}
      <View style={styles.loginWrapper}>
        <View style={{width: '80%'}}>
          <Text style={styles.title}>Welcome ,</Text>
          <Text style={styles.subTitle}>
            Don't love secretly, we may be more than friend 🍀
          </Text>
        </View>
        <TouchableOpacity
          style={styles.login}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Icon name="facebook-square" color={theme.primary} size={30} />
          <Text style={styles.facebook}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: theme.white,
  },
  topHalf: {
    height: '60%',
  },
  appName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 30,
  },
  loginWrapper: {
    backgroundColor: theme.primary,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    height: '40%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    width: '100%',
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 45,
    color: theme.white,
    marginTop: 40,
  },
  subTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.gray,
  },
  login: {
    backgroundColor: theme.white,
    flexDirection: 'row',
    width: '50%',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    position: 'absolute',
    bottom: 130,
  },
  facebook: {
    fontFamily: 'Inter-SemiBold',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrap: {
    backgroundColor: theme.white,
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
