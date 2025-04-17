import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Button } from 'react-native';
import styles from '../styles/global';
import { TERTIARY_COLOR } from '../styles/colors';

const About = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text>Gracias por utilizar nuestra aplicacion</Text>
        <View style={styles.containerForm}>
          <Button
            onPress={() => navigation.navigate('Home')}
            color={TERTIARY_COLOR}
            title="Regresar"
          />
        </View>
    </View>
  );
};

export default About;
