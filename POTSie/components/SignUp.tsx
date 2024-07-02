import React, { useState } from 'react';
import { Button, TextInput, View, Text, Alert, TouchableOpacity } from 'react-native';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleEmailChange = (text) => setEmail(text);
  const handlePasswordChange = (text) => setPassword(text);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const validateForm = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('Invalid Password', 'Password must be at least 6 characters long.');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('User Data:', { email, password });
      Alert.alert('Success', 'You have signed up successfully!');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        style={{ width: '80%', margin: 10, borderWidth: 1, padding: 10 }}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', borderWidth: 1, margin: 10, padding: 10 }}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={!passwordVisible}
          style={{ flex: 1 }}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Text>{passwordVisible ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      <Button title="Sign Up" onPress={handleSubmit} />
    </View>
  );
}

export default SignUp;