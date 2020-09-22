import React, { useEffect, useState } from 'react'
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'

import api from './services/api';

export default function App() {
    const [repositories, setRepositories] = useState([]);

    
    useEffect(() => {
        api.get('repositories').then(response => {
            setRepositories(response.data);
        })
    }, []);

    async function handleAddRepository() {
        const response = await api.post('repositories', {
          title: 'Novo projeto',
          url: `Novo Repositório ${Date.now()}`,
          techs: ['NodeJs', 'ReactJs']
        });
    
        setRepositories([ ...repositories, response.data ]);
      }

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

        <TouchableOpacity 
        activeOpacity={0.5}
        style={styles.button}
        onPress={handleAddRepository}
        >
            <Text style={styles.buttonText}>Adicionar Repositório</Text>
        </TouchableOpacity>
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
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20,
        padding: 30,
    },

    button: {
        backgroundColor: '#FFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    }
})