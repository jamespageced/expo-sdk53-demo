import React, { useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { MaterialIcons } from '@expo/vector-icons';
import { runOnJS } from 'react-native-reanimated';

interface Props {
  isDisabled: boolean;
  data: any;
  value: any | null;
  selectValue: (value: string) => void;
  placeholderName: string;
  labelField: any;
  valueField: any;
}

export default function MainDropdown({
  isDisabled,
  data,
  value,
  selectValue,
  placeholderName,
  labelField,
  valueField
}: Props): ReactComponent {
  // variables
  const [isFocus, setIsFocus] = useState(false);

  // functions
  const onFocus = () => {
    setIsFocus(true);
    runOnJS(() => Keyboard.dismiss());
  };

  // render
  return (
    <Dropdown
      style={isDisabled ? styles.containerDisabled : styles.container}
      disable={isDisabled}
      placeholderStyle={isDisabled ? styles.placeholderStyleDisabled : styles.placeholderStyle}
      selectedTextStyle={isDisabled ? styles.selectedTextStyleDisabled : styles.selectedTextStyle}
      itemContainerStyle={styles.itemContainerStyle}
      containerStyle={styles.dropdownContainer}
      data={data}
      maxHeight={300}
      labelField={labelField}
      valueField={valueField}
      placeholder={isFocus ? '...' : placeholderName}
      value={value}
      onFocus={onFocus}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        selectValue(item);
        setIsFocus(false);
      }}
      renderRightIcon={() => (
        <View style={styles.iconContainer}>
          <MaterialIcons name="keyboard-arrow-down" size={38} color={isDisabled ? '#999999' : '#96a6ad'} />
        </View>
      )}
    />
  );
}

export const styles = StyleSheet.create({
  container: {
    height: 45,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: '#03a9f4'
  },
  containerDisabled: {
    height: 45,
    paddingLeft: 16,
    borderWidth: 1,
    backgroundColor: '#f5f5f5',
    borderColor: '#e1e1e1'
  },
  dropdownContainer: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: '#999999',
    borderRightColor: '#999999'
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 43,
    borderLeftWidth: 1,
    borderColor: '#96a6ad'
  },
  itemContainerStyle: { borderBottomWidth: 1, borderBottomColor: '#ededed' },
  placeholderStyle: {
    color: '#323840',
    fontSize: 16
  },
  placeholderStyleDisabled: {
    color: '#323840',
    fontSize: 16
  },
  selectedTextStyle: {
    color: '#323840',
    fontSize: 16
  },
  selectedTextStyleDisabled: {
    color: '#323840',
    fontSize: 16
  }
});
