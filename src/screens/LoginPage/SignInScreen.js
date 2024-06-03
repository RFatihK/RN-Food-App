import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Input, Button } from '../../components';
import { Users } from '../../models/data/users';
import { Colors } from '../../constants';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const handleSignIn = () => {
    const user = Users.find(user => user.email === email && user.password === password);
    if (user) {
      navigation.navigate('RootNavigator');
    } else {
      setError('E-posta veya şifre yanlış.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>
      <Input
        label="E-posta"
        iconName="lock"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        error={error}
      />
      <Input
        label="Şifre"
        iconName="lock"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        error={error}
      />
      <Button title="Giriş Yap" onPress={handleSignIn} />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword', { email: email })}>
        <Text style={styles.forgotPasswordText}>Şifremi Unuttum</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('RegistrationScreen')}>
        <Text style={styles.registerText}>Yeni Hesap Oluştur</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('RSignInScreen')}>
        <Text style={styles.RSignInScreen}>Restaurant Girişi </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.light,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.darkBlue,
  },
  forgotPasswordText: {
    marginTop: 10,
    color: Colors.GETIR_YELLOW,
    textDecorationLine: 'underline',
  },
  registerText: {
    marginTop: 20,
    color: Colors.grey,
  },
  RSignInScreen:{
    marginTop: 30,
    color: Colors.GETIR_PURPLE,
    textDecorationLine: 'underline',
  }
});

export default SignInScreen;
