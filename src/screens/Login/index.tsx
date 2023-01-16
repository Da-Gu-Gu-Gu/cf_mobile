import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../../utils/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Login = () => {
  return (
    <View style={styles.flex}>
      <View style={styles.topHalf}>
        <Text style={styles.appName}>CRUSH FINDER</Text>
        <Text style={styles.appName}>📡</Text>
      </View>
      {/* login button  */}
      <View style={styles.loginWrapper}>
        <View>
          <Text style={styles.title} />
          <Text style={styles.subTitle}>Login to continue</Text>
        </View>
        <TouchableOpacity style={styles.login}>
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
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
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
    height: '50%',
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
    marginTop: 40,
  },
  facebook: {
    fontFamily: 'Inter-SemiBold',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
