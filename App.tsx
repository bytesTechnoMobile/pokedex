import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {RootNavigator} from './src/navigations';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <RootNavigator />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
