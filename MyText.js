import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';

const MyText = () => {
	//const insets = useSafeAreaInsets();

	return (
		<SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Test</Text>
		</SafeAreaView>
	);
};

export default MyText;

const styles = StyleSheet.create({});
