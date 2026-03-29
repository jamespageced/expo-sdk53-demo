import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import type { MainDropdownValue } from '@app/types';

interface Props {
  isEnabled: boolean;
  data: Array<MainDropdownValue>;
  value: any | null;
  selectValue: (value: MainDropdownValue) => void;
  placeholderName: string;
  labelField: any;
  valueField: any;
}

export default function MainDropdown({ isEnabled, data, value, selectValue, placeholderName }: Props): ReactComponent {
  // variables
  const [isFocus, setIsFocus] = useState(false);

  // functions
  const onFocus = () => {
    setIsFocus(true);
  };
  const onBlur = () => {
    setIsFocus(false);
  };

  // render
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>
        Dropdown&nbsp;Label&nbsp;<Text style={{ color: '#ff0000' }}>*</Text>
      </Text>
      <Picker
        enabled={isEnabled}
        mode="dropdown"
        // prompt={placeholderName} <-- only seen if mode is "dialog"
        onFocus={onFocus}
        onBlur={onBlur}
        selectedValue={value}
        onValueChange={itemValue => selectValue(itemValue)}
        style={{ flex: 1 }}
      >
        <Picker.Item key={-1} label={placeholderName} value={null} enabled={!isFocus} color="#999" />
        {data.map(selection => (
          <Picker.Item key={selection.id} label={selection.name} value={selection} />
        ))}
      </Picker>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    height: 55,
    borderWidth: 1,
    borderColor: '#03a9f4',
    zIndex: 1
  },
  containerText: {
    position: 'absolute',
    top: -11,
    left: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    zIndex: 2
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
