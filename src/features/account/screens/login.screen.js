import React, { useState, useContext } from "react";

import { TextInput, ActivityIndicator, MD2Colors } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import {
  AccountCover,
  AccountContainer,
  AuthButton,
  AccountBackground,
  AuthInput,
  Title,
  ErrorContainer,
} from "../components/account.styles";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("lr@gmail.com");
  const [password, setPassword] = useState("123456");
  const [isEyeOn, setIsEyeOn] = useState(true);
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <AccountBackground>
        <AccountCover />
        <Title>Meals To Go</Title>
        <AccountContainer>
          <Spacer position="bottom" size="large">
            <AuthInput
              label="E-mail"
              value={email}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
            />
          </Spacer>
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            autoCapitaliz3="none"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={isEyeOn}
            right={
              isEyeOn ? (
                <TextInput.Icon
                  icon="eye-off"
                  onPress={() => setIsEyeOn(false)}
                />
              ) : (
                <TextInput.Icon icon="eye" onPress={() => setIsEyeOn(true)} />
              )
            }
          />
          {error && (
            <Spacer size="large">
              <ErrorContainer>
                <Text variant="error">{error}</Text>
              </ErrorContainer>
            </Spacer>
          )}
          <Spacer size="large">
            {!isLoading ? (
              <AuthButton
                icon="lock-open-outline"
                mode="contained"
                onPress={() => onLogin(email, password)}
              >
                Login
              </AuthButton>
            ) : (
              <ActivityIndicator animating={true} color={MD2Colors.blue300} />
            )}
          </Spacer>
        </AccountContainer>
        <Spacer size="large">
          <AuthButton mode="contained" onPress={() => navigation.goBack()}>
            Back
          </AuthButton>
        </Spacer>
      </AccountBackground>
    </SafeArea>
  );
};
