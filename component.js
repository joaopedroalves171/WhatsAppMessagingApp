import React, { useState } from 'react';
import { View, TextInput, Button, Linking } from 'react-native';

const Parentpai = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (phoneNumber.startsWith('55') && phoneNumber.length >= 11) {
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
      Linking.openURL(whatsappUrl);
    } else {
      // Handle invalid phone number
      console.log('Número de telefone errado.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Número (Ex: 5588999991234)"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        placeholder="Mensagem"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Enviar mensagem" onPress={handleSend} />
    </View>
  );
};

export default Parentpai;