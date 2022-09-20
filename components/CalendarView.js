import React from 'react';
import {Calendar} from 'react-native-calendars';
import {StyleSheet} from 'react-native';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales.fr = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    'Janv.',
    'Févr.',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: "Aujourd'hui",
};

LocaleConfig.defaultLocale = 'fr';

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
      monthFormat={'yyyy년 MM월'}
      style={styles.calendar}
      markedDates={markedSelectedDate}
      onDayPress={day => {
        onSelectDate(day.dateString);
      }}
      //showWeekNumbers={true}
      theme={{
        selectedDayBackgroundColor: '#00adf5',
        arrowColor: '#00adf5',
        dotColor: '#00adf5',
        todayTextColor: '#00adf5',

        monthTextColor: '#000000',
        textMonthFontSize: 20,

        'stylesheet.calendar.header': {
          dayTextAtIndex0: {
            color: 'red',
          },
          dayTextAtIndex6: {
            color: 'blue',
          },
        },
        'stylesheet.calendar.': {},
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
