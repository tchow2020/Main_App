import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button } from "react-native-elements";

export const CadastroProps = () => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "red" }} />
      <View>
        <View>
          <Text style={{ fontSize: 25, textAlign: "center" }}>
            Crie sua conta agora
          </Text>

          <TextInput placeholder="Nome" style={styles.input} />

          <TextInput placeholder="E-mail" style={styles.input} />

          <TextInput placeholder="Telefone (Opcional)" style={styles.input} />

          <TextInput placeholder="Senha" style={styles.input} />
        </View>

        <View style={{ marginTop: 100 }}>
          <Button
            buttonStyle={[{ backgroundColor: "#fc0317" }]}
            title={"Cadastrar"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 1,
    flex: 1,
    backgroundColor: "#92B9BD",
  },

  logo: {
    width: 150,
    height: 100,
  },

  input: {
    marginTop: 10,
    margin: "auto",
    padding: 10,
    width: 300,
    color: "#0b0c0d",
    fontSize: 16,
    borderBottomWidth: 2,
  },
});

export default CadastroProps;
