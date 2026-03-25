import React from 'react';
import { Modal, Platform, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { StackParamsList } from '@app/types';

export default function ModalScreen(): ReactComponent {
  const navigation: any = useNavigation<StackNavigationProp<StackParamsList>>();
  return (
    <Modal animationType="none" transparent={true} statusBarTranslucent={true} navigationBarTranslucent={true}>
      <TouchableOpacity style={styles.backgroundContainer} activeOpacity={1} onPress={() => navigation.goBack()}>
        <TouchableWithoutFeedback>
          <View style={styles.contentContainer}>
            <View style={styles.btnRowContainer}>
              <TouchableOpacity style={styles.btnPrimary} onPress={() => navigation.goBack()}>
                <Text style={styles.btnPrimaryTxt}>CLOSE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(22, 27, 34, 0.6)'
  },
  contentContainer: {
    alignItems: 'center',
    width: '100%',
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#ffffff'
  },
  btnRowContainer: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20
  },
  btnPrimary: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 15.36,
    borderWidth: 1,
    borderColor: '#1e88e5',
    fontSize: 15,
    letterSpacing: 0.4
  },
  btnPrimaryTxt: {
    color: '#2370B3',
    textAlign: 'center',
    letterSpacing: 1.4,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    fontSize: 14
  }
});
