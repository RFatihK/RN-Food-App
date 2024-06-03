import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppBar } from '../../components';

const ProfileScreen = () => {
  const logout = () => {
    console.log("Çıkış yapıldı");
  };

  return (
    <View style={styles.container}>
    <AppBar title={"Profil  Sayfası"} />
      <View style={styles.backgroundCurvedContainer} />
      <View style={styles.profileHeaderContainer}>
        <View style={styles.profileImageContainer}>
          <Image style={styles.profileImage} source={require('../../assets/images/user_avatar.png')} />
        </View>
        <View style={styles.profileTextContainer}>
          <Text style={styles.nameText}>Ameen Farook</Text>
          <Text style={styles.emailText}>ameeen.faroook@gmail.com</Text>
        </View>
      </View>
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} activeOpacity={0.8}>
            <View style={[styles.menuIcon, { backgroundColor: item.backgroundColor }]}>
              {item.icon}
            </View>
            <Text style={styles.menuText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.sectionHeaderText}>Hesabım</Text>
        {accountSections.map((section, index) => (
          <TouchableOpacity key={index} style={styles.sectionContainer} activeOpacity={0.8}>
            <View style={styles.sectionTextContainer}>
              {section.icon}
              <Text style={styles.sectionText}>{section.title}</Text>
            </View>
            {section.chevron && <Feather name="chevron-right" color={Colors.INACTIVE_GREY} size={20} />}
          </TouchableOpacity>
        ))}
        <Text style={styles.sectionHeaderText}>Bildirimler</Text>
        {notificationSections.map((section, index) => (
          <View key={index} style={styles.sectionContainer}>
            <View style={styles.sectionTextContainer}>
              {section.icon}
              <Text style={styles.sectionText}>{section.title}</Text>
            </View>
          </View>
        ))}
        <Text style={styles.sectionHeaderText}>Diğer</Text>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionTextContainer}>
            <Ionicons name="accessibility-outline" size={18} color={Colors.DEFAULT_GREEN} />
            <Text style={styles.sectionText}>Karanlık Mod</Text>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <TouchableOpacity style={styles.sectionTextContainer} activeOpacity={0.8} onPress={logout}>
            <MaterialCommunityIcons name="logout" size={18} color={Colors.DEFAULT_GREEN} />
            <Text style={styles.sectionText}>Çıkış Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const menuItems = [
  {
    icon: <MaterialCommunityIcons name="truck-fast-outline" size={18} color={Colors.DEFAULT_GREEN} />,
    backgroundColor: Colors.LIGHT_GREEN,
    title: 'Tüm Siparişlerim'
  },
  {
    icon: <MaterialCommunityIcons name="gift-outline" size={18} color={Colors.SECONDARY_RED} />,
    backgroundColor: Colors.LIGHT_RED,
    title: 'Teklifler ve Promosyonlar'
  },
  {
    icon: <Ionicons name="location-outline" size={18} color={Colors.DEFAULT_YELLOW} />,
    backgroundColor: Colors.LIGHT_YELLOW,
    title: 'Teslimat Adresleri'
  },
];

const accountSections = [
  {
    icon: <Ionicons name="card-outline" size={18} color={Colors.DEFAULT_GREEN} />,
    title: 'Ödeme Yöntemleri',
    chevron: true
  },
];

const notificationSections = [
  {
    icon: <Feather name="bell" size={18} color={Colors.DEFAULT_GREEN} />,
    title: 'Bildirimler'
  },
  {
    icon: <Feather name="bell" size={18} color={Colors.DEFAULT_GREEN} />,
    title: 'Promosyon ve Teklif Bildirimleri'
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_WHITE,
  },
  backgroundCurvedContainer: {
    backgroundColor: Colors.GETIR_PURPLE,
    height: 2000,
    position: 'absolute',
    top: -1770,
    width: 2000,
    borderRadius: 2000,
    alignSelf: 'center',
    zIndex: -1,
  },
  profileHeaderContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  profileImageContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    elevation: 3,
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  nameText: {
    fontSize: 14,
    lineHeight: 19.6,
    color: Colors.DEFAULT_WHITE,
  },
  emailText: {
    fontSize: 10,
    lineHeight: 14,
    color: Colors.DEFAULT_WHITE,
  },
  menuContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
  },
  menuIcon: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  menuText: {
    fontSize: 12,
    lineHeight: 16.8,
    color: Colors.DEFAULT_BLACK,
    textAlign: 'center',
    marginTop: 5,
  },
  mainContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    elevation: 3,
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingBottom: 20,
  },
  sectionHeaderText: {
    fontSize: 14,
    lineHeight: 19.6,
    color: Colors.DEFAULT_BLACK,
    marginTop: 25,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  sectionTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionText: {
    fontSize: 13,
    lineHeight: 18.2,
    color: Colors.INACTIVE_GREY,
    marginLeft: 10,
  },
});

export default ProfileScreen;
