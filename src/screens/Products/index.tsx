import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { IProducts } from '../Home';
import { Product } from '../../components/Product';
import { BackButton } from '../../components/BackButton';

interface IParams {
  products: IProducts[];
}

interface INavigationProps {
  goBack: () => void;
  navigate: (
    screen: string,
    category: {
      product: IProducts
    }
  ) => void;
}

export function Products() {
  const route = useRoute();
  const { products } = route.params as IParams;
  const navigation = useNavigation<INavigationProps>();

  function handleBack() {
    navigation.goBack();
  }

  function handleProductDetails(product: IProducts) {
    navigation.navigate('ProductDetails', { product })
  }

  return (
    <View style={styles.container}>
      <BackButton onPress={handleBack} />

      <Text style={styles.text}>
        Buscar
      </Text>

      <ScrollView style={styles.productsList}>
        <View style={styles.productsWrapper}>
          {
            products.map(product => (
              <Product
                key={product.id}
                name={product.name}
                price={product.price}
                onPress={() => handleProductDetails(product)}
              />
            ))
          }
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#92B9BD",
    paddingTop: getStatusBarHeight() + 32,
    paddingHorizontal: 24
  },
  text: {
    color: '#000',
    fontSize: 24,
    marginTop: 32
  },
  productsList: {
    flex: 1,
    marginTop: 32
  },
  productsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
});