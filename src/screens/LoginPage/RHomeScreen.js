import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const RSignInScreen = () => {
  const [userData, setUserData] = useState({
    id: 0,
    restaurantName: '',
    farAway: '',
    businessAddress: {
      businessCity: '',
      businessDistrict: '',
      businessNeighborhood: ''
    },
    businessImage: null,
    coordinates: {
      lat: 0,
      lng: 0
    },
    deliveryTime: 0,
    businessDescription: '',
    productData: []
  });

  const handleChange = (field, value) => {
    setUserData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...userData.productData];
    updatedProducts[index][field] = value;
    setUserData(prevData => ({
      ...prevData,
      productData: updatedProducts
    }));
  };

  const handleAddProduct = () => {
    setUserData(prevData => ({
      ...prevData,
      productData: [
        ...prevData.productData,
        { id: prevData.productData.length + 1, ProductName: '', Price: '', productDetail: '', productImage: null }
      ]
    }));
  };

  const pickImageForProduct = async (index) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const updatedProducts = [...userData.productData];
      updatedProducts[index].productImage = result.uri;
      setUserData(prevData => ({
        ...prevData,
        productData: updatedProducts
      }));
    }
  };

  const pickBusinessImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setUserData(prevData => ({
        ...prevData,
        businessImage: result.uri
      }));
    }
  };

  const handleSubmit = () => {
    console.log('Gönderilen Kullanıcı Verisi:', userData);
    setUserData({
      id: 0,
      restaurantName: '',
      farAway: '',
      businessAddress: {
        businessCity: '',
        businessDistrict: '',
        businessNeighborhood: ''
      },
      businessImage: null,
      coordinates: {
        lat: 0,
        lng: 0
      },
      deliveryTime: 0,
      businessDescription: '',
      productData: []
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yeni Restoran Ekle</Text>
      <TextInput
        style={styles.input}
        placeholder="Restoran Adı"
        value={userData.restaurantName}
        onChangeText={text => handleChange('restaurantName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Uzaklık"
        value={userData.farAway}
        onChangeText={text => handleChange('farAway', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Şehir"
        value={userData.businessAddress.businessCity}
        onChangeText={text => handleChange('businessAddress', { ...userData.businessAddress, businessCity: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="İlçe"
        value={userData.businessAddress.businessDistrict}
        onChangeText={text => handleChange('businessAddress', { ...userData.businessAddress, businessDistrict: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Mahalle"
        value={userData.businessAddress.businessNeighborhood}
        onChangeText={text => handleChange('businessAddress', { ...userData.businessAddress, businessNeighborhood: text })}
      />
      {userData.businessImage && <Image source={{ uri: userData.businessImage }} style={styles.image} />}
      <Button title="İşletme Resmi Ekle" onPress={pickBusinessImage} />
      <Button title="Ürün Ekle" onPress={handleAddProduct} />
      {userData.productData.map((product, index) => (
        <View key={index}>
          <TextInput
            style={styles.input}
            placeholder="Ürün Adı"
            value={product.ProductName}
            onChangeText={text => handleProductChange(index, 'ProductName', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Fiyat"
            value={product.Price}
            onChangeText={text => handleProductChange(index, 'Price', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Ürün Detayı"
            value={product.productDetail}
            onChangeText={text => handleProductChange(index, 'productDetail', text)}
          />
          {product.productImage && <Image source={{ uri: product.productImage }} style={styles.productImage} />}
          <Button title="Ürün Resmi Ekle" onPress={() => pickImageForProduct(index)} />
        </View>
      ))}
      <Button title="Kaydet" onPress={handleSubmit} />
    </View>
  );
};

export default RSignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});
