import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { BannerContent } from '../../components/BannerContent';
import { Button } from '../../components/Button';
import { bannerContents } from '../../utils/bannerContents';
import { categories } from '../../utils/categories';

export interface IProducts {
  id: string;
  name: string;
  price: string;
}

interface INavigationProps {
  navigate: (
    screen: string,
    category: {
      products: IProducts[]
    }
  ) => void;
}

export function Home() {
  const navigation = useNavigation<INavigationProps>();

  function handleProdutsPage(products: IProducts[]) {
    navigation.navigate('Products', { products })
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.banner} horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={16}>
        {
          bannerContents.map(content => (
            <BannerContent
              key={content.id}
              name={content.name}
            />
          ))
        }
      </ScrollView>

      <Text style={styles.text}>
        Olá Luiz,{'\n'} tenha um otimo dia!
      </Text>

      <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={16}>
        <View style={styles.wrapper_button}>
          {
            categories.map(category => (
              <Button
                key={category.id}
                title={category.name}
                onPress={() => handleProdutsPage(category.products)}
              />
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#92B9BD",
    paddingTop: getStatusBarHeight() + 50,
    paddingHorizontal: 24
  },
  banner: {
    height: 1
  },
  text: {
    color: '#000',
    fontSize: 30,
    marginTop: 32
  },
  wrapper_button: {
    marginTop: 32,
  },
});