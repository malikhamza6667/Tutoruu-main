
/// <reference types="nativewind/types"/>
import React, { useCallback } from 'react';
import LanguageContext from './src/languages/languageContext';

import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import TutorAppStack from './src/navigation/TutorNavigations/TutorAppStack';
import MainAppRoutes from './src/navigation/AppRoutes/MainNavigationRoutes';
const App: React.FC = () => {

  return (
    <NavigationContainer>
   {/* <MainAppRoutes/> */}
   {/* <TutorAppStack/> */}
   <MainStack/>
    </NavigationContainer>
  );
}


SplashScreen.preventAutoHideAsync();
const defaultLanguage = 'en';
const MyApp = () => {
  const [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'PoppinsBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'PoppinsRegular': require('./assets/fonts/Poppins-Regular.ttf'),
    'PoppinsMedium': require('./assets/fonts/Poppins-Medium.ttf'),
    'PoppinsSemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView} >


<Provider store={store}>

      <LanguageContext.Provider value={{ language: defaultLanguage }}>
        <App />
      </LanguageContext.Provider>
</Provider>

    </View>
  );
};
export default MyApp;
