import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Product } from '../../components/Product';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BackButton } from '../../components/BackButton';

interface IParams {
  product: {
    id: string;
    name: string;
    price: string;
  }
}

export function ProductDetails() {
  const route = useRoute();
  const { product } = route.params as IParams;
  const navigation = useNavigation();

  function handleGoback() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <BackButton onPress={handleGoback} />

      <Product
        name={product.name}
        price={product.price}
      />

      <View>
        <Text>
          Tamanho: M
        </Text>

        <Text>
          Quantidade: 1
        </Text>
      </View>

      <View>
        <View>
          <MaterialCommunityIcons name='truck' size={24} />

          <Text>
            Calcule o valor do seu frete :)
          </Text>
        </View>

        <TextInput />

        <Text>
          Esse produto tem garantia eterna, ou seja nunca perecer e nuca vai se acabar, não rasga, não molha, nem existe!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#92B9BD",
    paddingTop: getStatusBarHeight() + 50,
    paddingHorizontal: 24
  }
})