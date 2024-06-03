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


