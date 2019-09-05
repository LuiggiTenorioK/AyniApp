import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { getUser } from '../../store/modules/user/actions';
import UserProfile from '../../components/User/UserProfile';



class ProfileView extends Component {
    constructor(props) {
        super(props);
        this.props.getUserDispatch(this.props.idUser, this.props.token);
        //this.props.getUserDispatch(1, this.props.token);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Mi Perfil',
            headerRight: (
                <Icon name="md-settings" size={30} color="#000000"
                    style={{ marginHorizontal: 15 }} onPress={() => navigation.navigate('Configuration')} />
            ),
        }
    };

    render() {
        const { routeName } = this.props.navigation.state;
        return (
            <UserProfile selectedUser={this.props.selectedUser}></UserProfile>
        )
    }

};

const mapStateToProp = state => {
    return {
        token: state.auth.token,
        idUser: state.auth.idUser,
        selectedUser: state.user.selectedUser,
    };
}

const mapDispatchToProp = dispatch => {
    return {
        getUserDispatch: (id, token) => {
            dispatch(getUser(id, token));
        }
    };
}

export default connect(mapStateToProp, mapDispatchToProp)(ProfileView);