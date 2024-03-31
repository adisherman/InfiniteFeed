import React, {useState} from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import {FallbackComponentProps} from './FallbackComponent.types';
import {fallbackComponentStyles as styles} from './FallbackComponent.styles';

const FallbackComponent = (props: FallbackComponentProps): JSX.Element => {
  const {error, resetError} = props;
  const [isVisible, setIsVisible] = useState(true);

  const onClose = () => {
    setIsVisible(false);
    resetError();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>An error occurred!</Text>
          <Text style={styles.errorMessage}>{error.message}</Text>
          <TouchableOpacity onPress={onClose}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FallbackComponent;
