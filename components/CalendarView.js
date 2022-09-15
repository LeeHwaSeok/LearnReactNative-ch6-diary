import React from 'react';
import {Calendar} from 'react-native-calendars';
import {StyleSheet} from 'react-native';

//https://github.com/wix/react-native-calendars 참고
function CalendarView({markedDates, selectedDate, onSelectDate}) {
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };
  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedSelectedDate}
      onDayPress={day => {
        onSelectDate(day.dateString);
      }}
      theme={{
        selectedDayBackgroundColor: '#00adf5',
        arrowColor: '#00adf5',
        dotColor: '#00adf5',
        todayTextColor: '#00adf5',
      }}
    />
  );
}
const styles = StyleSheet.create({
  calender: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export default CalendarView;
