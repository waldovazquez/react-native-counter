import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Fab from '../components/Fab';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Count: {count}
      </Text>
      <Fab
        onPress={() => setCount(count - 1)}
        position="bl"
        title="-1"
      />
      <Fab
        onPress={() => setCount(count + 1)}
        position="br"
        title="+1"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    top: -20,
  },
});

export default Counter;
