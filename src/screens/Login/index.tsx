import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Linking,
  ActivityIndicatorBase,
  ToastAndroid,
} from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Formik } from "formik";
import * as Yup from "yup";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/app";

// import { InputRound } from "./componente";

export const LoginProps = () => {
  const nav = useNavigation();
  function open() {
    nav.navigate("Home");
  }

  const logar = async (dados: any) => {
    console.log(dados);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    firebase
      .auth()
      .signInWithEmailAndPassword(dados.email, dados.senha)
      .then((usuario) => nav.navigate("Tela-Home"))
      .catch((erro) => {
        ToastAndroid.show("email ou senha incorreta", 3000);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "red" }}></View>

      <View style={styles.container_2}>
        <Formik
          initialValues={{ email: "", senha: "" }}
          onSubmit={logar}
          validationSchema={Yup.object({
            email: Yup.string().required("Este campo é obrigatório"),
            senha: Yup.string()
              .required("Este campo é obrigatório")
              .min(6, "Pelo menos 6 caracteres"),
          })}
        >
          {({
            handleChange,
            handleSubmit,
            isSubmitting,
            errors,
            touched,
            onBlur,
          }) => (
            <>
              <View>
                <Input
                  style={styles.input}
                  placeholder="E-mail"
                  rightIcon={{ name: "person", color: "black" }}
                  onChangeText={handleChange("email")}
                  autoCompleteType={undefined}
                />
                <Text
                  style={{ color: "white", fontSize: 20, textAlign: "center" }}
                >
                  {errors.email}
                </Text>

                <Input
                  placeholder="Senha"
                  style={styles.input}
                  secureTextEntry={true}
                  rightIcon={{ name: "lock", color: "black" }}
                  onChangeText={handleChange("senha")}
                  autoCompleteType={undefined}
                />
                <Text
                  style={{ color: "white", fontSize: 20, textAlign: "center" }}
                >
                  {errors.senha}
                </Text>
              </View>

              <View style={{ marginTop: 20, marginBottom: 50 }}>
                {isSubmitting && (
                  <Button
                    onPress={() => handleSubmit()}
                    buttonStyle={[{ backgroundColor: "#fc0317" }]}
                    raised={true}
                    title={"Entrar"}
                  />
                )}
              </View>
            </>
          )}
        </Formik>

        <Text style={styles.botaotext}>Esqueceu a senha?</Text>
        <TouchableOpacity onPress={() => nav.navigate("Cadastro")}>
          <Text style={styles.botaotext}>Não tenho cadastro</Text>
        </TouchableOpacity>
      </View>

      <View style={{}}>
        <Text>&copy; CN Camisas de Animes LTDA - É o mito 17</Text>
      </View>

      <View style={styles.containerRodape}>
        <Icon name="instagram" size={25} />
        <Icon name="facebook" size={25} />
        <Icon name="whatsapp" size={25} />
        <Icon name="twitter" size={25} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 1,
    backgroundColor: "#92B9BD",
  },

  container_2: {
    width: 360,
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
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
  },

  botaotext: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0B1110",
    marginTop: 25,
  },

  containerRodape: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20,
  },
});

export default LoginProps;
