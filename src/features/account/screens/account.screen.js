import React, { useRef } from "react";
import LottieView from "lottie-react-native";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/account.styles";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  const animation = useRef(null);

  return (
    <SafeArea>
      <AccountBackground>
        <AccountCover />
        <AnimationWrapper>
          <LottieView
            autoPlay
            loop
            ref={animation}
            resizeMode="cover"
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require("../../../../assets/watermelon.json")}
          />
        </AnimationWrapper>
        <Title>Meals To Go</Title>
        <AccountContainer>
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </AuthButton>
          <Spacer size="large">
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </AuthButton>
          </Spacer>
        </AccountContainer>
      </AccountBackground>
    </SafeArea>
  );
};
