import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MainDropdown } from '@app/components';

const data: Array<string> = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8',
  'Item 9',
  'Item 10'
];

export default function Home(): ReactComponent {
  const [mainDropdownValue, setMainDropdownValue] = useState<string | null>(null);
  return (
    <View style={styles.container}>
      <MainDropdown
        isDisabled={false}
        data={data}
        value={mainDropdownValue}
        selectValue={setMainDropdownValue}
        placeholderName="Select Item"
        labelField="name"
        valueField="id"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: '#ffffff',
    alignItems: 'center'
  }
});
