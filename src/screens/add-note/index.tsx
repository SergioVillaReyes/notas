import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import styles from '../../styles/global';
import DatePicker from '../../components/DatePicker';
import TextArea from '../../components/Textarea';
import { TERTIARY_COLOR } from '../../styles/colors';
import { getNotesStorage, setNotesStorage } from '../../storage/indext';

const AddNote = () => {
  const [note, setNote] = useState({date: new Date(), text: ''});
  const [notes, setNotes] = useState([]);
  const [sendSuccess, setSendSuccess] = useState(false);

  const navigation = useNavigation();

  const getAllNotes = async () => {
      try {
        const resp = await getNotesStorage();
        if (resp.notes) {
          setNotes(resp.notes);
        }
      } catch (error) {
        console.log('error', error);
      }
   };

  const handleChange = (name, value) => {
    setNote({
      ...note,
      [name]: value,
    });
   };

   const saveNote = async() => {
    try {
      const allNotes = [...notes, note];
      await setNotesStorage(allNotes);
      setSendSuccess(true);
      setNote({date: new Date(), text: ''});
      getAllNotes();
    } catch (error) {
      console.log('error', error)
    }
    };

    useEffect(() => {
      getAllNotes();
    }, []);


  return (
    <View style={styles.container}>
      {!sendSuccess ? (
        <>
          <Text>Agregar nota</Text>
          <View style={styles.containerForm}>
            <DatePicker value={note.date} onChange={(value) =>handleChange('date', value)} />
            <TextArea value={note.text} onChange={(value) =>handleChange('text', value)}/>
            <View>
              <View style={{margin: 10}}>
                <Button
                  disabled={!note.text}
                  title="Guardar"
                  onPress={() => saveNote()}
                />
              </View>
              <View style={{margin: 10}}>
                <Button
                  onPress={() => navigation.navigate('Home')}
                  color={TERTIARY_COLOR}
                  title="Regresar"
                />
              </View>
            </View>
          </View>
        </>
      ) : (
        <>
        <View>
          <Text>Nota guardada exitosamente</Text>
          <View>
          <View style={{margin: 10}}>
            <Button
              title="Guardar otra nota"
              onPress={() => setSendSuccess(false)}
            />
          </View>
          <View style={{margin: 10}}>
            <Button
              onPress={() => navigation.navigate('ListNotes')}
              color={TERTIARY_COLOR}
              title="Ir a mis notas"
            />
          </View>
        </View>
        </View>
        </>
      )}
    </View>
  );
};

export default AddNote;
