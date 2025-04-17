import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Button } from 'react-native';
import React, { useState } from 'react';
import { PRIMARY_COLOR } from '../../styles/colors';

const DatePicker = ({value = new Date(), onChange = () => {}}) => {
  const [show, setShow] = useState(false);

  return (
    <View style={{ margin: 10 }}>
      <View>
        <Button
          color={PRIMARY_COLOR}
          title={value.toLocaleString('es-ES', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })}
          onPress={() => setShow(true)}
        />
      </View>
      {show && (
        <DateTimePicker
          value={value || new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShow(false);
            if (selectedDate) {onChange(selectedDate)};
          }}
        />
      )}
    </View>
  );
};

export default DatePicker;
