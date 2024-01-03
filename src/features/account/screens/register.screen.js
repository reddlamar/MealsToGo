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

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [isEyeOn, setIsEyeOn] = useState(true);
  const [isEyeOnRepeat, setIsEyeOnRepeat] = useState(true);
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

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
          <Spacer position="bottom" size="large">
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
          </Spacer>
          <AuthInput
            label="Repeat Password"
            value={repeatedPassword}
            textContentType="password"
            autoCapitaliz3="none"
            onChangeText={(text) => setRepeatedPassword(text)}
            secureTextEntry={isEyeOnRepeat}
            right={
              isEyeOnRepeat ? (
                <TextInput.Icon
                  icon="eye-off"
                  onPress={() => setIsEyeOnRepeat(false)}
                />
              ) : (
                <TextInput.Icon
                  icon="eye"
                  onPress={() => setIsEyeOnRepeat(true)}
                />
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
                icon="email"
                mode="contained"
                onPress={() => onRegister(email, password, repeatedPassword)}
              >
                Register
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
