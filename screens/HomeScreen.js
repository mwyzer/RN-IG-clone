import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Header from '../components/Home/Header.js'
import Stories from '../components/Home/Stories.js'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    }
})

export default HomeScreen
