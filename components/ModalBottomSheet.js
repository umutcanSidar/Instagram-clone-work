import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

const ModalBottomSheet = ({isVisible, setVisible, pk}) => {
  // bottomSheetModalRef
  const bottomSheetModalRef = useRef();
  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  useEffect(() => {
    // BottomSheet isVisible
    if (isVisible) {
      bottomSheetModalRef.current?.present();
      return;
    }
    bottomSheetModalRef.current?.dismiss();
  }, [isVisible]);
  // Changes BottomSheet
  const handleSheetChanges = useCallback(index => {
    if (index === 1) {
      setVisible(true);
      return;
    }
    setVisible(false);
  }, []);

  return (
    <View style={[styles.bottomsheet, !isVisible ? {display: 'none'} : null]}>
      <TouchableWithoutFeedback
        onPress={() => bottomSheetModalRef.current?.dismiss()}>
        <View style={styles.container}>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
            <View style={styles.contentContainer}>
              <Text>{pk}</Text>
            </View>
          </BottomSheetModal>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomsheet: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 20,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ModalBottomSheet;
