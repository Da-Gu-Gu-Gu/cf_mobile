import {RouteProp} from '@react-navigation/native';
// import {BottomTabNavigationProp as TabProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp as StackProp} from '@react-navigation/native-stack';

export type StackParams = {
  Home: undefined;
  Crushlist: undefined;
  Messenger: undefined;
  Noti: undefined;
};

export type HomeScreenProps = StackProp<StackParams, 'Home'>;
export type CrushListScreenProps = StackProp<StackParams, 'Crushlist'>;
export type MessengerScreenProps = StackProp<StackParams, 'Messenger'>;
export type NotiScreenProps = StackProp<StackParams, 'Noti'>;

export type HomeRouteProp = RouteProp<StackParams, 'Home'>;
export type CrushListRouteProp = RouteProp<StackParams, 'Crushlist'>;
export type MessengerRouteProp = RouteProp<StackParams, 'Messenger'>;
export type NotiRouteProp = RouteProp<StackParams, 'Noti'>;
