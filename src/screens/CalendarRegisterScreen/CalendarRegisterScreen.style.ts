import { StyleSheet } from 'react-native';

export const makeCalendarRegisterScreenStyles = () =>
  StyleSheet.create({
    containerView: { flex: 1, padding: 10 },
    list: {
      alignSelf: 'center',
      marginTop: 16,
    },
    calendarCardContainer: {
      marginVertical: 20,
      padding: 10,
      elevation: 5,
      borderRadius: 8,
      backgroundColor: 'white',
    },
    button: {
      width: '100%',
    },
    buttonText: {
      color: '#524B6B',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
