import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { AppNavProps } from "../../params";
import { colors, HEIGHT, WIDTH } from "../../constants";
import { Divider, Submiting } from "../../components";
import { useLoginMutation } from "../../graphql/generated/graphql";

import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../actions";
import { StateType } from "../../types";

const Login: React.FC<AppNavProps<"Login">> = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const user = useSelector(({ user }: StateType) => user);
  const dispatch = useDispatch();
  const [login, { loading, data }] = useLoginMutation({
    fetchPolicy: "network-only",
  });

  React.useEffect(() => {
    let mounted: boolean = true;
    if (mounted) {
      if (!!user) {
        navigation.replace("Home");
      }
    }
    return () => {
      mounted = false;
    };
  }, [user]);
  React.useEffect(() => {
    if (data?.login.error) {
      setError(data.login.error.message);
      setPassword("");
    } else {
      setError("");
      setEmail("");
      setPassword("");
      dispatch(setUser(data?.login.user ?? null));
    }
  }, [data]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const loginHandler = async () => {
    await login({
      variables: {
        input: {
          email,
          password,
        },
      },
    });
  };
  return (
    <View style={{ backgroundColor: colors.MAIN_COLOR, flex: 1 }}>
      <StatusBar barStyle={"light-content"} />
      {loading ? <Submiting /> : null}
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableWithoutFeedback
          style={{
            height: HEIGHT,
          }}
          accessible={false}
          onPress={Keyboard.dismiss}
        >
          <ScrollView
            style={{
              flex: 1,
              padding: 10,
            }}
            bounces={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                height: HEIGHT,
              }}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  marginBottom: 60,
                }}
                source={require("../../../assets/logo.png")}
              />
              <Divider title="LOGIN" />
              <TextInput
                placeholder="email address"
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{
                  fontSize: 20,
                  backgroundColor: "white",
                  width: "100%",
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 999,
                  marginVertical: 20,
                  marginTop: 30,
                }}
              />
              <TextInput
                placeholder="password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={{
                  fontSize: 20,
                  backgroundColor: "white",
                  width: "100%",
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 999,
                  marginVertical: 10,
                }}
                secureTextEntry
                onSubmitEditing={loginHandler}
              />
              <Text style={{ color: "red", fontSize: 16, marginVertical: 5 }}>
                {error}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.COLOR_PINK,
                  padding: 10,
                  alignItems: "center",
                  borderRadius: 5,
                  marginVertical: 5,
                  width: WIDTH - 20,
                  marginBottom: 30,
                }}
                activeOpacity={0.7}
                onPress={loginHandler}
              >
                <Text
                  style={{
                    color: "white",
                    letterSpacing: 1.5,
                    fontWeight: "500",
                    fontSize: 20,
                  }}
                >
                  LOGIN
                </Text>
              </TouchableOpacity>
              <Divider title="I'm a new user?" size="small" />

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Register");
                }}
                style={{
                  backgroundColor: colors.MAIN_LIGHT,
                  padding: 10,
                  alignItems: "center",
                  borderRadius: 5,
                  width: WIDTH - 20,
                  marginBottom: 20,
                  marginTop: 30,
                }}
                activeOpacity={0.7}
              >
                <Text
                  style={{
                    color: "white",
                    letterSpacing: 1.5,
                    fontWeight: "500",
                    fontSize: 20,
                  }}
                >
                  REGISTER
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={{ height: 50 }} />
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
};

export default Login;
