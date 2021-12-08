import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MyText from './MyText';

export default function App() {
	return (
		// <SafeAreaProvider>
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<MyText />
			</View>
		</SafeAreaView>
		// </SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
