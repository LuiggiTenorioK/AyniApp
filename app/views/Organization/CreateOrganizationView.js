import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import axios from '../../store/axios';
import SocialMedia from '../../components/Activities/SocialMedia';
import CountryPicker from 'react-native-country-picker-modal';
import { connect } from 'react-redux';

import {Buffer} from 'buffer';

class CreateOrganizationView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            name: "",
            username: "",
            telephone: "",
            address: "",
            countryCode: "PE",
            callingCode: "+51"
        }
    }

    handleCountry = (country) => {
        this.setState({
            countryCode: country.cca2,
            callingCode: country.callingCode
        })
    }

    sns = [
        { id: 1, name: 'facebook' },
        { id: 2, name: 'instagram' },
        { id: 3, name: 'twitter' },
        { id: 4, name: 'add' },
    ]


    registerOrg = () => {
        axios({
            url: 'api/organization/create',
            data: {
                "userId": this.props.idUser,
                "listOfUsers": [],
                "name": this.state.name,
                "telephone1": this.state.telephone,
                "telephone2": null,
                "email1": this.state.email,
                "email2": null,
                "direction": this.state.address,
                "imageDirection": 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSN7dRBbNBB7TfL7f7IEkM_MYoTfWvXgnq5GpBb2OsWQpKzZDC',
                "reference1": this.state.username
            },
            headers: {
                'Authorization': 'Basic ' + Buffer.from(this.props.token + ":" + "unused").toString('base64')
            },
            method: 'POST'
        }).then((response) => {
            console.log("RESPONSE");
            console.log(response.status);
            console.log(response.data);
            if (response.status === 200) {
                this.props.navigation.replace('MyActivities',{idx:2});
            } else {

            }
        }).catch((error) => {
            console.log("ERROR");
            console.log(error.message);
        });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={{ padding: 25 }}>
                    <Text style={styles.text}>Organización:</Text>
                    <TextInput style={styles.textInput}
                        onChangeText={(text) => this.setState({ name: text })}
                        placeholder="Nombre de la organización"
                        onSubmitEditing={() => this.usernameTextInput.focus()}
                    />
                    <Text style={styles.text}>Usuario de la organización:</Text>
                    <TextInput style={styles.textInput}
                        onChangeText={(text) => this.setState({ username: text })}
                        placeholder="Usuario de la organización"
                        autoCapitalize='none'
                        onSubmitEditing={() => this.emailTextInput.focus()}
                        ref={(input) => this.usernameTextInput = input}
                    />
                    <Text style={styles.text}>Email de contacto:</Text>
                    <TextInput style={styles.textInput}
                        onChangeText={(text) => this.setState({ email: text })}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize='none'
                        onSubmitEditing={() => this.telephoneTextInput.focus()}
                        ref={(input) => this.emailTextInput = input}
                    />
                    <Text style={styles.text}>Teléfono principal de contacto:</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <TouchableOpacity style={{ width: '15%', backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 5 }}>
                            <CountryPicker
                                translation='spa'
                                countryCode={this.state.countryCode}
                                withCallingCode withFilter
                                withFlag withCountryNameButton={false}
                                withAlphaFilter withEmoji
                                onSelect={(country) => this.handleCountry(country)} />
                            <Text style={{ color: '#000' }}>{this.state.callingCode}</Text>
                        </TouchableOpacity>

                        <TextInput style={{ ...styles.textInput, width: '85%', }}
                            onChangeText={(text) => this.setState({ telephone: text })}
                            placeholder="Teléfono de contacto"
                            keyboardType='phone-pad'
                            onSubmitEditing={() => this.addressTextInput.focus()}
                            ref={(input) => this.telephoneTextInput = input}
                        />
                    </View>


                    <Text style={styles.text}>Dirección principal:</Text>
                    <TextInput style={styles.textInput}
                        onChangeText={(text) => this.setState({ address: text })}
                        placeholder="Dirección"
                        ref={(input) => this.addressTextInput = input}
                    />

                    <Text style={styles.text}>Redes Sociales (Opcional)</Text>
                    <View style={styles.socialMediaContainer}>
                        {this.sns.map(x => (<SocialMedia key={x.id} name={x.name} />))}
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => this.registerOrg()} >
                        <Text style={styles.buttonText}>Registrar organización</Text>
                    </TouchableOpacity>
                </View>



            </ScrollView>

        )
    }
}

const mapStateToProp = state => {
    return {
        token: state.auth.token,
        idUser: state.auth.idUser
    };
}
export default connect(mapStateToProp)(CreateOrganizationView);


const styles = StyleSheet.create({
    centerContainer: {
        width: Dimensions.get('window').width,
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#18C4B4',
        height: 45,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        alignSelf: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Lato-Bold',
        fontSize: 18,
    },
    text: {
        textAlign: 'left',
        color: '#343F4B',
        marginBottom: 5,
        fontSize: 18,
        fontFamily: 'Lato-Bold',
    },
    textInput: {
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 15,
        color: '#343F4B',
        width: '100%',
        borderWidth: 2,
        borderColor: '#18C4B4',
        borderRadius: 20,
        padding: 10,
        fontFamily: 'Lato-Regular',
    },
    socialMediaContainer: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff',
    }
});