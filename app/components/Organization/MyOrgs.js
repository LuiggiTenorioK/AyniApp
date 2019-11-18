import React, { Component } from 'react'
import { Dimensions, View } from 'react-native'
import axios from '../../store/axios';
import OrgCard from './OrgCard';

import { connect } from 'react-redux';

import {Buffer} from 'buffer';


class MyOrgs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            organizaciones: []
        }

        axios({
            url: 'api/organization/get_org_user',
            data: {
                "userId": this.props.idUser
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
                this.setState({organizaciones: response.data.listOfOrganizations});
            } else {
                alert("Error code ",response.status);
            }
        }).catch((error) => {
            console.log("ERROR");
            console.log(error.message);
        });
    }

    render() {
        return (
            <View style={{ width: Dimensions.get('window').width, padding: 15, alignItems: 'stretch' }}>
                {this.state.organizaciones.map((org) =>
                    <OrgCard name={org.name} username={org.reference_1} 
                        profileImgURL={org.image_direction}></OrgCard>
                )}
            </View>
        )
    }
}


const mapStateToProp = state => {
    return {
        token: state.auth.token,
        idUser: state.auth.idUser
    };
}
export default connect(mapStateToProp)(MyOrgs);