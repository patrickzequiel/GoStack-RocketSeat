import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

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
     <View style={styles.container}>
         {repositories.map(repository => (
         <Text style={styles.project} key={repository.id}>{repository.url}</Text>
         ))}
    </View>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7159c1',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    project: {
        color: '#FFF',
        fontSize: 120,
        fontWeight: 'bold',
    },
})