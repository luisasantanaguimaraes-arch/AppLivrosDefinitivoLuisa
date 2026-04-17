import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useTheme } from '../../hooks/UseTheme';
import { globalStyles } from '../../assets/styles/styles';

export default function UserScreen() {
  const { colors } = useTheme();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const createUser = useMutation(api.user.create);

  const handleSignUp = async () => {
    if (!name || !password) return;
    try {
      await createUser({ name, password });
      Alert.alert("Sucesso", "Usuário criado no Convex!");
      setName(''); setPassword('');
    } catch (e) {
      Alert.alert("Erro", "Falha ao criar usuário.");
    }
  };

  return (
    <View style={[globalStyles.container, { backgroundColor: colors.background }]}>
      <Text style={[globalStyles.title, { color: colors.text }]}>Área do Usuário</Text>
      <TextInput
        style={[globalStyles.input, { color: colors.text, borderColor: colors.primary }]}
        placeholder="Nome"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[globalStyles.input, { color: colors.text, borderColor: colors.primary }]}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={globalStyles.button} onPress={handleSignUp}>
        <Text style={globalStyles.buttonText}>Cadastrar no Convex</Text>
      </TouchableOpacity>
    </View>
  );
}