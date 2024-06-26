Bu proje, kullanıcıların çeşitli restoranlardan ürün sipariş edebileceği, sepetlerini yönetebileceği ve hava durumu bilgilerini görüntüleyebileceği bir mobil uygulamadır. Uygulama, React Native kullanılarak geliştirilmiştir ve çeşitli üçüncü taraf kütüphanelerle desteklenmiştir.

Başlarken
Gereksinimler
Node.js (>=14.x)
npm veya yarn
Expo CLI
Git
Kurulum
Bu projeyi yerel makinenize klonlayın:
bash
Kodu kopyala
git clone https://github.com/kullanici-adi/proje-adi.git
Proje dizinine gidin:
bash
Kodu kopyala
cd proje-adi
Gerekli bağımlılıkları yükleyin:
bash
Kodu kopyala
npm install
# veya
yarn install
Expo CLI'yi kurun:
bash
Kodu kopyala
npm install -g expo-cli
# veya
yarn global add expo-cli
Projeyi çalıştırın:
bash
Kodu kopyala
expo start
Kullanılan Teknolojiler ve Kütüphaneler
React Native: Mobil uygulama geliştirme.
Redux: Durum yönetimi.
React Navigation: Uygulama navigasyonu.
Expo: React Native projelerini kolayca oluşturmak ve yönetmek için.
Axios: HTTP isteklerini yapmak için.
Moment.js: Tarih ve zaman işlemleri için.
React Native Maps: Harita gösterimi için.
react-native-snap-carousel: Karusel bileşeni için.
react-native-vector-icons: İkon kütüphanesi.
Proje Yapısı
/src: Tüm kaynak kodları içerir.
/components: Tekrarlanan bileşenler.
/constants: Sabit değerler ve renkler.
/models: Veri modelleri.
/routes: Navigasyon yapılandırmaları.
/screens: Uygulamanın ekranları.
/store: Redux ile ilgili dosyalar.
/assets: Görseller ve diğer statik dosyalar.
Önemli Dosyalar
App.js
Uygulamanın giriş noktasıdır. Redux sağlayıcısını ve navigasyon kapsayıcısını içerir.

javascript
Kodu kopyala
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/store';
import { Provider } from 'react-redux';
import "./ignoreWarnings";
import RootNavigator from './src/routes/Navigation/RootNavigator';
import LoginRootNavigation from './src/routes/Navigation/LoginRootNavigation';

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <LoginRootNavigation />
            </NavigationContainer>
        </Provider>
    );
};
export default App;
Basket.js
Kullanıcının sepetindeki ürünleri görüntülediği ve yönetebildiği ekran.

HomeScreen.js
Ana ekran, kullanıcıya restoranlar, hava durumu ve diğer bilgileri gösterir.

MapsScreen.js
Kullanıcının restoranları harita üzerinde görebildiği ekran.

ProfileScreen.js
Kullanıcı profil bilgilerini ve hesap ayarlarını yönetebildiği ekran.

RestaurantHomeScreen.js
Belirli bir restorana ait ürünleri ve bilgileri gösterir.

RestaurantListScreen.js
Restoranların listelendiği ekran.

SearchScreen.js
Kullanıcıların restoranlar ve ürünler arasında arama yapabildiği ekran.

WeatherScreen.js
Kullanıcının konumuna göre hava durumu bilgilerini gösterir.

Kullanım
Giriş ve Kayıt
Kullanıcılar uygulamaya giriş yapabilir veya yeni bir hesap oluşturabilirler.
Restoran ve Ürün Arama
Ana ekrandan restoranlar ve ürünler arasında arama yapabilirsiniz.
Sepet Yönetimi
Sepete ürün ekleyebilir, sepetten ürün çıkarabilir ve siparişinizi tamamlayabilirsiniz.
Harita Üzerinde Restoranlar
Harita ekranından restoranların konumlarını görebilir ve detaylarına ulaşabilirsiniz.
Hava Durumu Bilgisi
Bulunduğunuz konuma göre güncel hava durumu bilgilerini görebilirsiniz.
