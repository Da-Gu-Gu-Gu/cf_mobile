import {RouteProp} from '@react-navigation/native';
// import {BottomTabNavigationProp as TabProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp as StackProp} from '@react-navigation/native-stack';

export type StackParams = {
  Home: undefined;
  Crushlist: undefined;
  Match: undefined;
  Profile: undefined;
  Login: undefined;
};

export type HomeScreenProps = StackProp<StackParams, 'Home'>;
export type CrushListScreenProps = StackProp<StackParams, 'Crushlist'>;
export type MatchScreenProps = StackProp<StackParams, 'Match'>;
export type ProfileScreenProps = StackProp<StackParams, 'Profile'>;
export type LoginScreenProps = StackProp<StackParams, 'Login'>;

export type HomeRouteProp = RouteProp<StackParams, 'Home'>;
export type CrushListRouteProp = RouteProp<StackParams, 'Crushlist'>;
export type MatchRouteProp = RouteProp<StackParams, 'Match'>;
export type ProfileRouteProp = RouteProp<StackParams, 'Profile'>;
export type LoginRouteProp = RouteProp<StackParams, 'Login'>;
