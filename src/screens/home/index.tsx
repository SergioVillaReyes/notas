import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import {
  useNavigation,
} from '@react-navigation/native';
import styles from '../../styles/global';
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from '../../styles/colors';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Bienvenido</Text>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
      <View style={styles.containerButtons}>
        <Button
          color={PRIMARY_COLOR}
          title="Agregar nota"
          onPress={() => navigation.navigate('AddNote')}
        />
        <Button
          color={SECONDARY_COLOR}
          title="Ver notas"
          onPress={() => navigation.navigate('ListNotes')}
        />
        <Button
          color={TERTIARY_COLOR}
          title="Creditos"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </View>
  );
};

export default Home;
