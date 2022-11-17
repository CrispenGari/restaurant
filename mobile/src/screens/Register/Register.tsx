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
import { colors, HEIGHT, roles, WIDTH } from "../../constants";
import { Divider, Submiting } from "../../components";
import { SelectList } from "react-native-dropdown-select-list";
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../actions";
import { useRegisterMutation } from "../../graphql/generated/graphql";
import { StateType } from "../../types";

const Register: React.FC<AppNavProps<"Register">> = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [conf, setConf] = React.useState("");
  const [error, setError] = React.useState("");
  const user = useSelector(({ user }: StateType) => user);
  const dispatch = useDispatch();
  const [register, { loading, data }] = useRegisterMutation({
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
    if (data?.register.error) {
      setError(data.register.error.message);
      setPassword("");
      setConf("");
    } else {
      setError("");
      setEmail("");
      setPassword("");
      dispatch(setUser(data?.register.user ?? null));
    }
  }, [data]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const [role, setRole] = React.useState("CUSTOMER");

  const registerHandler = async () => {
    const _role: string = role !== "0" ? role : "CUSTOMER";
    if (conf.trim() !== password.trim()) {
      setError("The two passwords must match.");
      return;
    }
    await register({
      variables: {
        input: {
          email,
          password,
          role: _role as any,
        },
      },
    });
  };
  return (
    <View style={{ backgroundColor: colors.MAIN_COLOR, flex: 1 }}>
      {loading ? <Submiting /> : null}
      <StatusBar barStyle={"light-content"} />
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
              <Divider title="REGISTER" />
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
                style={{
                  fontSize: 20,
                  backgroundColor: "white",
                  width: "100%",
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 999,
                  marginVertical: 10,
                }}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
              />
              <TextInput
                placeholder="confirm password"
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
                value={conf}
                onChangeText={(text) => setConf(text)}
                onSubmitEditing={registerHandler}
              />
              <SelectList
                defaultOption={roles[0]}
                setSelected={(val: any) => setRole(val)}
                disabledItemStyles={{
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                }}
                data={roles}
                save="value"
                boxStyles={{
                  backgroundColor: "white",
                  width: WIDTH - 20,
                  marginVertical: 10,
                }}
                dropdownStyles={{
                  backgroundColor: "white",
                  height: 90,
                }}
                searchPlaceholder="search role"
              />
              <Text style={{ color: "red", fontSize: 16, marginVertical: 10 }}>
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
                onPress={registerHandler}
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
              <Divider title="Already have an account?" size="small" />

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
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
                  LOGIN
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 100 }} />
          </ScrollView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
};

export default Register;
