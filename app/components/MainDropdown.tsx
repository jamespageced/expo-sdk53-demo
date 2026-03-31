import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import type { MainDropdownValue } from '@app/types';

interface Props {
  isEnabled: boolean;
  isRequired: boolean;
  data: Array<MainDropdownValue>;
  value: any | null;
  selectValue: (value: MainDropdownValue) => void;
  placeholderName: string;
}

export default function MainDropdown({
  isEnabled,
  isRequired,
  data,
  value,
  selectValue,
  placeholderName
}: Props): ReactComponent {
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
    <View style={isEnabled ? styles.container : styles.containerDisabled}>
      <View style={styles.topBorderTitleContainer}>
        <View style={isEnabled ? styles.topBorderTitleContainerLeft : null} />
        <Text style={isEnabled ? styles.topBorderTitleContainerText : styles.topBorderTitleContainerTextDisabled}>
          &nbsp;Dropdown&nbsp;Label&nbsp;{isRequired ? <Text style={{ color: '#ff0000' }}>*&nbsp;</Text> : null}
        </Text>
        <View style={isEnabled ? styles.topBorderTitleContainerRight : null} />
      </View>
      <Picker
        enabled={isEnabled}
        numberOfLines={1}
        mode="dropdown"
        // prompt={placeholderName} <-- only seen if mode="dialog"
        onFocus={onFocus}
        onBlur={onBlur}
        selectedValue={value}
        onValueChange={itemValue => selectValue(itemValue)}
        style={isEnabled ? styles.pickerContainer : styles.pickerContainerDisabled}
      >
        <Picker.Item
          key={-1}
          label={placeholderName}
          value={null}
          enabled={!isFocus}
          color="#999"
          style={isEnabled ? styles.listItem : styles.listItemDisabled}
        />
        {data.map(selection => (
          <Picker.Item key={selection.id} label={selection.name} value={selection} style={styles.listItem} />
        ))}
      </Picker>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    height: 55,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#03a9f4',
    zIndex: 1
  },
  containerDisabled: {
    height: 55,
    borderWidth: 1,
    backgroundColor: '#f5f5f5',
    borderColor: '#e1e1e1',
    zIndex: 1
  },
  topBorderTitleContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: -1,
    width: '100%',
    zIndex: 2
  },
  topBorderTitleContainerLeft: {
    height: 0,
    width: 30,
    marginLeft: -1,
    borderTopWidth: 1,
    borderColor: '#03a9f4'
  },
  topBorderTitleContainerText: {
    marginTop: -11,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    fontSize: 16
  },
  topBorderTitleContainerTextDisabled: {
    marginTop: -12,
    marginLeft: 29,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    fontSize: 16
  },
  topBorderTitleContainerRight: {
    flex: 1,
    height: 0,
    marginRight: -1,
    borderTopWidth: 1,
    borderColor: '#03a9f4'
  },
  pickerContainer: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  pickerContainerDisabled: {
    flex: 1,
    backgroundColor: '#e1e1e1'
  },
  listItem: {
    backgroundColor: '#ffffff',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    fontSize: 16,
    color: '#323840'
  },
  listItemDisabled: {
    backgroundColor: '#e1e1e1',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    fontSize: 16,
    color: '#323840'
  }
});
