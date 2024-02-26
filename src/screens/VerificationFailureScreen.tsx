import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import {ButtonSecondary, ButtonPrimary} from '@/components';
import theme from '@/utils/theme';

interface VerificationFailureScreenProps {
  onRetry: () => void;
  onSubmitWithoutVerification: () => void;
}

export const VerificationFailureScreen: React.FC<
  VerificationFailureScreenProps
> = ({onRetry, onSubmitWithoutVerification}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/failure.png')} // Adjust the image path as necessary
        style={styles.imageStyle}
      />
      <Text style={[theme.headingText, styles.textStyle]}>Error</Text>
      <Text style={theme.subHeadingText}>
        Sorry! We couldn’t verify your photo. Please try again or, you can
        submit without verification.
      </Text>
      <View style={styles.buttonContainer}>
        <ButtonSecondary
          title="RETRY"
          onPress={onRetry}
          style={styles.buttonStyle}
        />
        <ButtonPrimary
          title="SUBMIT WITHOUT VERIFICATION"
          onPress={onSubmitWithoutVerification}
          style={styles.buttonStyle}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  textStyle: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  buttonStyle: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 30,
  },
});