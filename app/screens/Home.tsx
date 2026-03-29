import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MainDropdown } from '@app/components';
import type { MainDropdownValue } from '@app/types';

const data: Array<MainDropdownValue> = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
  { id: 7, name: 'Item 7' },
  { id: 8, name: 'Item 8' },
  { id: 9, name: 'Item 9' },
  { id: 10, name: 'Item 10' }
];

export default function Home(): ReactComponent {
  const [mainDropdownValue, setMainDropdownValue] = useState<MainDropdownValue | null>(null);
  useEffect(() => {
    console.log('mainDropdownValue:', mainDropdownValue);
  }, [mainDropdownValue]);
  return (
    <View style={styles.container}>
      <MainDropdown
        isEnabled={true}
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
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  }
});
