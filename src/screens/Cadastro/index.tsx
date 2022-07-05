import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from "react-native";
import { Button } from "react-native-elements";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/app";
import { Formik } from "formik";
import * as Yup from "yup";

export const CadastroProps = () => {

  const cadastro = async (dados: any) => {
    firebase.auth().createUserWithEmailAndPassword(dados.email, dados.senha)
    .then(() => {
      ToastAndroid.show("Sua conta foi criada com sucesso!", 3000);
    })
    .catch(() => {
      ToastAndroid.show("Esse e-mail já é existente", 3000);
    });
    
      
          console.log(dados);       
  }

  return (
    <View style={styles.container}>
      <Formik
       initialValues={{ email: "", senha: "" }}
       onSubmit={cadastro}
       validationSchema={Yup.object({
         email: Yup.string().required("Este campo é obrigatório"),
         senha: Yup.string()
           .required("Este campo é obrigatório")
           .min(6, "Pelo menos 6 caracteres"),
       })}
      >
    
        <View style={{ backgroundColor: "red" }} />
        {({
            handleSubmit,
          }) => (
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
              onPress={() => handleSubmit()}
            />
          </View>
      </View>
    )}
      </Formik>
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
