import AsyncStorage from '@react-native-async-storage/async-storage';

export const setNotesStorage = (notes): Promise<void> =>
  AsyncStorage.setItem('notes', JSON.stringify(notes));

export const getNotesStorage = async (): Promise<any> => {
  try {
    const strObj = await AsyncStorage.getItem('notes');
    return strObj
      ? {notes: JSON.parse(strObj)}
      : {message: 'Datos no disponibles'};
  } catch (err) {
    return {message: 'Ocurrio un error al obtener la información'};
  }
};