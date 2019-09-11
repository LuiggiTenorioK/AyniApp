import React, { Component } from 'react';
import { TouchableOpacity,StyleSheet, View, Dimensions,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ScrollView } from 'react-navigation';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
//import UserActivities from '../../components/Activities/UserActivities'; 
//import UserProjects from '../../components/Project/UserProjects';
import OrgProjects from '../../components/Organization/OrgProjects';
import ProjActivities from '../../components/Project/ProjActivities';


const SCREEN_HEIGHT = Dimensions.get('window').height;

class MyActivitiesView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: 'Actividades' },
                { key: 'second', title: 'Proyectos' },
            ],
            tabHeight: SCREEN_HEIGHT*0.75-50,
        }
        this.setHeight = this.setHeight.bind(this)
    }

    setHeight = () => event => {
        const height = event.nativeEvent.layout.height + SCREEN_HEIGHT * 0.08;
        if (this.state.tabHeight<height){
            this.setState({ tabHeight: height })
        }
    };

    renderTabBar = props => (
        <TabBar {...props}
            activeColor={'#6C28E1'}
            inactiveColor={'#333333'}
            indicatorStyle={styles.indicatorStyle}
            style={styles.tabBarStyle}
            labelStyle={styles.labelStyle}
        />);

    render() {
        return (
            <ScrollView style={{}}>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: () => (
                            <View onLayout={ this.setHeight() } >
                                <View style={styles.container}>
                                  <TouchableOpacity style={styles.button} onPress={() =>this.props.navigation.navigate('CreateActivity')}>
                                      <Icon name="md-add-circle-outline" size={30} color="#ffffff"/>
                                      <Text style = {styles.buttonText}> Crear Actividad</Text>
                                  </TouchableOpacity>
                                </View>
                                
                                <ProjActivities />
                            </View>
                        ),
                        second: () => (
                            <View onLayout={ this.setHeight() }>
                                <View style={styles.container}>
                                  <TouchableOpacity style={styles.button} onPress={() =>this.props.navigation.navigate('Signup')}>
                                      <Icon name="md-add-circle-outline" size={30} color="#ffffff"/>
                                      <Text style = {styles.buttonText}> Crear Proyecto</Text>
                                  </TouchableOpacity>
                                </View>
                                <OrgProjects />
                            </View>
                        ),
                    })}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width }}
                    style={{ height: this.state.tabHeight }}
                    renderTabBar={(props) => this.renderTabBar(props)}
                />
            </ScrollView>
        )
    }
};

export default MyActivitiesView;

const styles = StyleSheet.create({
    labelStyle: {
        fontFamily: 'Lato-Bold',
        color: '#555555',
        fontSize: 12
    },
    indicatorStyle: {
        height: 0,
        overflow: 'hidden',
    },
    tabBarStyle: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 50,
        elevation: 0
    },
    container:{
      flexDirection: 'row',
      justifyContent:'center',
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius:10,
      backgroundColor:'#00E1CC',
      height: 60,
      width: "90%",
      padding:20,
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Lato-Bold',
        fontSize: 18,
    },
});