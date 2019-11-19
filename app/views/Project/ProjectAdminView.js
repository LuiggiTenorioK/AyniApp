import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, TextInput } from 'react-native';

import { ScrollView } from 'react-navigation';
import HelpInfo from '../../components/Activities/HelpInfo';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class ProjectAdminView extends Component {

    admView = [
        {
            title: 'LISTA DE TAREAS',
            color: '#00A6FF'
        },
        {
            title: 'KANBAN',
            color: '#77D353'
        },
        {
            title: 'CRONOGRAMA',
            color: '#7CD7D7'
        },
        {
            title: 'PRESUPUESTO',
            color: '#18C4B4'
        },
        {
            title: 'POSTULACIONES',
            color: '#735CD1'
        },
        {
            title: 'MENSAJES',
            color: '#00C87A'
        },
    ];

    render() {
        return (
            <ScrollView contentContainerStyle={{ padding: 10 }}>
                <Text style={styles.text}>¿Qué desea revisar?</Text>
                <View style={styles.cardsGrid}>
                    {this.admView.map(v =>
                        <HelpInfo title={v.title} color={v.color} />)}
                </View>

                <Text style={{ ...styles.text, marginTop: 30 }}>Modificar información del Proyecto</Text>
                <Text style={{ ...styles.text, fontSize: 14 }}>Nombre del Proyecto</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ name: text })}
                    placeholder="Define el nombre de tu actividad"
                    value='Prog. Amazonas: Primera Edición'
                />
                <Text style={{ ...styles.text, fontSize: 14 }}>Eslogan del Proyecto</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ name: text })}
                    placeholder="Define el eslogan de tu actividad"
                    value='Proteger lo nuestro'
                />
                <Text style={{ ...styles.text, fontSize: 14 }}>Descripción</Text>
                <TextInput
                    style={styles.textArea}
                    multiline={true}
                    onChangeText={(text) => this.setState({ description: text })}
                    placeholder="Empieza con una frase inspiradora, define cual es el alcance y objetivo de tu actividad."
                    value = 'El objetivo de este programa para el futuro del Perú es preservar la reserva natural. La organización se compromete también a procurar alcanzar las metas o resultados establecidos y esperados, generando así un objetivo en común.'
                />
            </ScrollView>
        )
    }
};

export default ProjectAdminView;

const styles = StyleSheet.create({
    cardsGrid: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        textAlign: 'left',
        color: '#343F4B',
        margin: 10,
        fontSize: 18,
        fontFamily: 'Lato-Bold',
    },
    textInput: {
        textAlign: 'left',
        marginTop: 0,
        marginBottom: 5,
        color: '#343F4B',
        width: '100%',
        borderWidth: 2,
        borderColor: '#18C4B4',
        borderRadius: 20,
        padding: 10,
        fontFamily: 'Lato-Regular',
    },
    textArea: {
        textAlign: 'left',
        textAlignVertical: 'top',
        marginTop: 0,
        marginBottom: 5,
        color: '#343F4B',
        width: '100%',
        height: 100,
        borderWidth: 2,
        borderColor: '#18C4B4',
        borderRadius: 20,
        padding: 10,
        fontFamily: 'Lato-Regular',
    },
});