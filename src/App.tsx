import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';

const Button = styled.Button`
  height: 20;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.container}>Testando</Text>
      <Button title="TÍTULO TESTE" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'blue',
  },
});

export default App;
