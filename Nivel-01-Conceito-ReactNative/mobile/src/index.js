import React, { useEffect, useState } from 'react'
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native'

import api from './services/api';

export default function App() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        api.get('repositories').then(response => {
            setRepositories(response.data);
        })
    }, []);

    return(
        <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <SafeAreaView style={styles.container}>
            
        <FlatList
        data={repositories}
        keyExtractor={repository => repository.id}
        renderItem={({ item: repository}) => (
            <Text style={styles.project}>{repository.url}</Text>
        )}

        />
        </SafeAreaView>
     {/* <View style={styles.container}>
         {repositories.map(repository => (
         
         ))}
    </View> */}
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7159c1',
        flex: 1,
    },
    project: {
        color: '#FFF',
        fontSize: 120,
        fontWeight: 'bold',
    },
})