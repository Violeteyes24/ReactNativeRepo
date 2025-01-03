import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Button, Alert } from 'react-native';

const LoginCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ActivityIndicator />
        <Text style={styles.title}>MentalHelp</Text>
        <Button title="Alert" onPress={() => Alert.alert("Invalid data, invalid programming, invalid tanan yawaaa", "wtf am I doing?", [
          {
            text:'Cancel',
            onPress:() => console.log("Cancel Pressed")
          },
          {
            text: 'Ok',
            onPress: () => console.log("Ok Pressed")
          }
          ])} />
        <Text>Me Please kamatyonon nako</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your username"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your password"
            placeholderTextColor="#888"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.googleSignIn}>
          <TouchableOpacity>
            <Text style={styles.googleButtonText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Optional, for better visualization
  },
  card: {
    padding: 20,
    backgroundColor: '#00f3ba',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#6de58d',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    width: 300,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 24,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: 'white',
  },
  inputField: {
    width: '100%',
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 4,
    fontSize: 16,
    marginBottom: 8,
  },
  loginButton: {
    width: '100%',
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 4,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#00f3ba',
    fontSize: 16,
  },
  googleSignIn: {
    marginTop: 20,
  },
  googleButtonText: {
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginCard;
