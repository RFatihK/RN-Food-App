import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Keyboard, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Button, Input } from '../../components';
import { Colors } from '../../constants';
import * as Location from 'expo-location';

const RegistrationScreen = ({ navigation }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;
      let location = await Location.getCurrentPositionAsync({});
      Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }).then((locationData) => {
        setLocationInfo(locationData[0]);
      });
    })();
  }, []);

  const [inputs, setInputs] = useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
    address: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Lütfen e-posta adresinizi girin', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Lütfen geçerli bir e-posta adresi girin', 'email');
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError('Lütfen adınızı ve soyadınızı girin', 'fullname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Lütfen telefon numaranızı girin', 'phone');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Lütfen bir şifre belirleyin', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Şifre en az 5 karakter olmalıdır', 'password');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        navigation.navigate('LoginScreen');
      } catch (error) {
        Alert.alert('Hata', 'Bir şeyler ters gitti', error.message);
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
    if (errors[input]) {
      setErrors(prevState => ({ ...prevState, [input]: null }));
    }
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };



  return (
    <SafeAreaView style={{ backgroundColor: Colors.DEFAULT_WHITE, flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text style={{ color: Colors.darkBlue, fontSize: 40, fontWeight: 'bold' }}>
          Kayıt ol
        </Text>
        <Text style={{ color: Colors.DEFAULT_GREY, fontSize: 18, marginVertical: 10 }}>
          {locationInfo
            ?
            `${locationInfo.subregion}, ${locationInfo.region}, ${locationInfo.city}`
            :
            'Konum Bilgisi Yok'}
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            label="E-posta"
            placeholder="E-posta adresinizi girin"
            error={errors.email}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'fullname')}
            onFocus={() => handleError(null, 'fullname')}
            label="Adınız ve Soyadınız"
            placeholder="Adınızı ve soyadınızı girin"
            error={errors.fullname}
          />
          <Input
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            label="Telefon Numaranız"
            placeholder="Telefon numaranızı girin"
            error={errors.phone}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'address')}
            onFocus={() => handleError(null, 'address')}
            label="Adres "
            placeholder="Adresinizi girin"
            error={errors.address}
          />

          <Button title="Kayıt Ol" onPress={validate} />
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
            <Text
              onPress={() => navigation.navigate('LoginScreen')}
              style={{
                color: Colors.DEFAULT_BLUE,
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 16,
                marginRight: 5,
              }}>
              Zaten bir hesabınız mı var? Giriş Yapın
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
