import React, { useState } from 'react';
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
  { id: 10, name: 'Item 10 and this is a very long label to be inside this selection' },
  { id: 11, name: 'Item 11' },
  { id: 12, name: 'Item 12' },
  { id: 13, name: 'Item 13' },
  { id: 14, name: 'Item 14' },
  { id: 15, name: 'Item 15' },
  { id: 16, name: 'Item 16' },
  { id: 17, name: 'Item 17' },
  { id: 18, name: 'Item 18' }
];

export default function Home(): ReactComponent {
  const [mainDropdownValue, setMainDropdownValue] = useState<MainDropdownValue | null>(null);
  return (
    <View style={styles.container}>
      <MainDropdown
        isEnabled={true}
        isRequired={true}
        data={data}
        value={mainDropdownValue}
        selectValue={setMainDropdownValue}
        placeholderName="Select Item"
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
