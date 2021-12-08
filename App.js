import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyText from './MyText';

export default function App() {
	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<MyText />
			</View>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'yellow',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
