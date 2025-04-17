import React from 'react';
import { TextInput, View } from 'react-native';
import styles from '../../styles/global';

const TextArea = ({value, onChange = () => {}}) => {

  return (
    <View style={{ margin: 10 }}>
      <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={4}
        placeholder="¿Qué hiciste hoy?"
        value={value}
        onChangeText={(e) => onChange(e)}
        textAlignVertical="top"
      />
    </View>
  );
};

export default TextArea;
