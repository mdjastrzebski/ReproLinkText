import { StyleSheet, Text, View } from 'react-native';

function App() {
  const handlePress = () => {
    console.log('Pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Initial Focus</Text>

      <Text style={styles.text}>Basic Text</Text>
      
      <Text role="link" style={styles.text} onPress={handlePress}>Basic Link Text</Text>

      <Text style={styles.header}>Text with child texts</Text>
      <Text style={styles.text}>
        <Text>Child One</Text>
        <Text>Child Two</Text>
      </Text>

      <Text style={styles.header}>Text Link with child texts</Text>
      <Text role="link" style={styles.text} onPress={handlePress}>
        <Text>Child One</Text>
        <Text>Child Two</Text>
      </Text>

      <Text style={styles.header}>Text with child link text</Text>
      <Text style={styles.text}>
        Regular Text
        <Text role="link" onPress={handlePress}>Link Text</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 16,
    color: 'darkgray',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
  },
});

export default App;
