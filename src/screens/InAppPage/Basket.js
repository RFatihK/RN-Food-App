import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { removeFromBasket, clearBasket, addToBasket } from '../../store/basketSlice';
import { Entypo } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { AddressHeader } from '../../components';
import { Feather } from '@expo/vector-icons';

const Basket = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const basketItems = useSelector(state => state.basket.items);
  const restaurantIds = basketItems.map(item => item.RestaurantId);
  const isMultipleRestaurants = restaurantIds.length > 1;
  const totalPrice = basketItems.reduce((total, item) => total + item.Price * item.quantity, 0);

  const renderItem = ({ item }) => (

    <View style={styles.itemContainer}>

      <Text style={styles.itemName}>{item.ProductName}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => dispatch(addToBasket(item))}>
          <Entypo name="plus" size={22} color="#5D3EBD" />
        </TouchableOpacity>
        <Text style={styles.itemQuantity}>{item.quantity} x {item.Price} ₺ = {item.quantity * item.Price}</Text>
        <TouchableOpacity onPress={() => dispatch(removeFromBasket(item))}>
          <AntDesign name="minus" size={22} color="#5D3EBD" />
        </TouchableOpacity>
      </View>
    </View>

  );

  const handleCheckout = () => {
    if (totalPrice === 0) {
      Alert.alert(
        "Hata",
        "Sepetinizde ürün bulunmamaktadır.",
        [{ text: "Tamam", onPress: () => navigation.navigate('MainScreen') }]
      );
    } else if (isMultipleRestaurants) {
      Alert.alert(
        "Hata",
        "Birden fazla restorandan ürün eklediniz. Lütfen tek bir restorandan ürün ekleyin.",
        [{ text: "Tamam", onPress: () => navigation.navigate('MainScreen') }]
      );
    } else {
      dispatch(clearBasket());
      Alert.alert(
        "Sipariş Tamamlandı",
        "Siparişiniz başarıyla tamamlandı!",
        [{ text: "Tamam", onPress: () => navigation.navigate('MainScreen') }]
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <AddressHeader />
      <View style={styles.container}>
        <Text style={styles.title}>Sepetiniz</Text>
        <FlatList
          data={basketItems}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
        <View style={styles.Total}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Feather name="chevron-left" size={30} color='#5D3EBD' />
          </TouchableOpacity>
          <Text style={styles.totalPrice}>Toplam Fiyat: {totalPrice} ₺</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutText}>Şiparişi Tamamla</Text>
        </TouchableOpacity>
      </View></View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5D3EBD',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    paddingVertical: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemQuantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  checkoutButton: {
    backgroundColor: '#5D3EBD',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  Total: {
    flexDirection: 'row',  
    justifyContent:'space-between',
    alignItems: 'center',  
    padding: 10,           
  },
  backButton: {
    marginRight: 10,       
  },
  totalPrice: {
    fontSize: 16,         
    color: '#000',         
  },
});

export default Basket;
