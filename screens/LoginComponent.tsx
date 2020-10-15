import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Modal, Alert, TouchableHighlight, KeyboardAvoidingView } from "react-native";
import { SCREENS } from "../constants/screens";
import { BTN_STYLE, COLORS } from "../constants/styles";


export default function LoginComponent() {

  const navigation = useNavigation();

   const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    if (username.length > 0) {
      setUsernameError(false);
    } else { 
      setUsernameError(true); 
      setModalVisible(false);
    }

    if (password.length > 0) {
      setPasswordError(false);
    } else  {
      setPasswordError(true);
      setModalVisible(false);
    }

    if (username.length > 0 && password.length > 0) {
      if (username === "Anjana" || password === "a123") {
        navigation.navigate(SCREENS.HOME);
        setModalVisible(false);
        setUsername("");
        setPassword("");
        return;
      } 
      setModalVisible(true);
      
    }

    if (username.length > 0 && password.length > 0) {
      if (username === "AnjanaK" || password === "ak12") {
        navigation.navigate(SCREENS.SUPPLIER_HOME);
        setModalVisible(false);
        setUsername("");
        setPassword("");
        return;
      } 
      setModalVisible(true);
    }
  };
 

  return (
     <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subTitle}>Sign in to continue</Text>
        </View>

        <View>
          <View style={styles.marginB}>
            <Text style={styles.label}>Username</Text>
          
            <TextInput  placeholder="Ex: Anjana" style={styles.inputField} onChangeText={text => setUsername(text)}/>
            
           {usernameError ? <Text style={styles.errorMsg}>This field is required.</Text> : null} 
          </View>

          <View style={styles.marginB}>
            <Text style={styles.label}>Password</Text>

            <TextInput secureTextEntry={true} style={styles.inputField} onChangeText={text => setPassword(text)}/>
              
            {passwordError ? <Text style={styles.errorMsg}>This field is required.</Text> : null} 
            
          </View>

          <View>
            <View style={{alignItems: "center"}}>
              <TouchableOpacity
                style={[BTN_STYLE.ACCENT_BUTTON, { width: 150 }]}
                onPress={() => {
                 handleLogin()
                }}
              >
                <Text style={{ color: COLORS.textOnAccentColor }}>Login Now</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Model View */}
          <View>
              <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 30,
                      color: "#721c24",
                    }}
                  >
                    Sorry!
                  </Text>
                  <Text style={styles.modalText}>
                    Your Username and Password are incorrect. Please try again.
                  </Text>

                  <TouchableHighlight
                    style={[
                      BTN_STYLE.ACCENT_DENGER_BUTTON,
                      { width: 80, height: 40 },
                    ]}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle}>OK</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
          </View>

        </View>
      </View>
    </ScrollView>
  );
}

 

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 30,
    height: "100%"
  },

  title: {
    fontWeight: "bold",
    fontSize: 25,
  },

  subTitle: {
      fontSize: 20,
      color: "#777777",
      fontWeight: "bold",
      marginBottom: 30,
    },

  label: {
    fontWeight: "bold",
    fontSize: 15
  },

  inputField: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },

  marginB: {
    marginBottom: 20
  },

  errorMsg: {
      fontWeight: "bold",
      fontSize: 13,
      color: "red",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#f8d7da",
    borderRadius: 20,
    borderColor: "#f5c6cb",
    padding: 50,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
    width: 160,
    marginBottom: 20,
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#721c24",
  },
  
})
