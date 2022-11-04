import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {theme} from '../../utils/theme';

interface Props {
  data: number;
}
const Card = ({data}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{data}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 230,
    marginBottom: 20,
    backgroundColor: theme.red,
  },
});
