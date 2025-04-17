import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Button, FlatList } from 'react-native';
import styles from '../../styles/global';
import { getNotesStorage } from '../../storage/indext';
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from '../../styles/colors';
import { setNotesStorage } from '../../storage/indext';

const ListNotes = () => {
  const [notes, setNotes] = useState([]);

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

   const deleteNote = async (index) => {
    try {
      const newNotes = notes.filter((item, i) => i !== index);
      await setNotesStorage(newNotes);
      setNotes(newNotes);
    } catch (error) {
      console.log('error', error);
    }
    };

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{marginTop: 20, paddingHorizontal:  15, width: '100%', gap: 5}}>
        <Button
          onPress={() => navigation.navigate('Home')}
          color={PRIMARY_COLOR}
          title="Regresar"
        />
        <Button
          onPress={() => navigation.navigate('AddNote')}
          color={SECONDARY_COLOR}
          title="Agregar nota"
        />
      </View>
      {notes.length < 1 && <Text>No hay notas</Text>}
      {notes.length > 0 && (
        <View style={styles.containerForm}>
          <FlatList
            data={notes}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => item && <Item date={item.date} text={item.text} index={index} deleteNote={deleteNote} />}
          />
        </View>
      )}
    </View>
  );
};

const Item = ({date, text, index,  deleteNote = () => {}}) => (
  <View style={styles.noteContainer}>
    <Text style={styles.noteTitle}>{new Date(date).toLocaleString('es-ES', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })}</Text>
    <Text style={styles.noteText}>{text}</Text>
    <Button onPress={() => deleteNote(index)} color={TERTIARY_COLOR} title="Eliminar nota" />
  </View>
);

export default ListNotes;
