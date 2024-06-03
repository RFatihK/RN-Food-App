import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'; // Button ekleniyor

import { Colors } from '../../constants';

const ForgotPassword = ({ route }) => {
  const defaultEmail = route && route.params && route.params.email ? route.params.email : 'default@example.com';
  const [email, setEmail] = useState(defaultEmail);
  const [verificationCode, setVerificationCode] = useState('');

  const handleSendEmail = () => {
    console.log(`E-posta gönderildi: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Şifremi Unuttum</Text>
      <Text style={styles.description}>Lütfen hesabınıza kayıtlı e-posta adresinizi girin.</Text>
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Text style={styles.infoText}>Lütfen e-posta adresinize gönderilen 6 haneli doğrulama kodunu girin:</Text>
      <TextInput
        style={styles.input}
        placeholder="Doğrulama Kodu"
        value={verificationCode}
        onChangeText={setVerificationCode}
        keyboardType="numeric"
      />
      <Button title="Gönder" onPress={handleSendEmail} color={Colors.darkBlue} />
      <Text style={styles.note}>Şifre sıfırlama bağlantısı e-posta adresinize gönderilecektir.</Text>
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
  description: {
    marginBottom: 10,
    color: Colors.grey,
    textAlign: 'center',
  },
  infoText: {
    marginBottom: 10,
    color: Colors.darkBlue,
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.light,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  note: {
    marginTop: 20,
    color: Colors.grey,
    textAlign: 'center',
  },
});

export default ForgotPassword;
