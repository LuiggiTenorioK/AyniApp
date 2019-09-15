import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import { ScrollView } from 'react-navigation';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ActHeader from '../../components/Activities/ActHeader';
import ActInformation from '../../components/Activities/ActInformation'; 
import ProjActivities from '../../components/Project/ProjActivities';
import ActMembers from '../../components/Activities/ActMembers';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class ActivityView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: 'Información' },
                { key: 'second', title: 'Noticias' },
                { key: 'third', title: 'Miembros' },
            ],
            tabHeight: SCREEN_HEIGHT*0.75-50,
        }
        this.setHeight = this.setHeight.bind(this)
    };

    activity={
        description : 'Todos los días nuestro equipo de trabajo se encarga de recolectar las donaciones y material de reciclaje a domicilio con una llamada podemos acercar a tu casa oficina o lugar de trabajo a hacer la recolección sin costo alguno totalmente gratis ',
        contactName:'Luiggi Tenorio',
        contactNumber: '951888908',
        contactEmail:'lbit@gmail.com',
        contactAddress: 'Calle San Luis 679',
        organizers: [{id:'1',name:'Luiggi Tenorio', username:'lbitgreen'},{id:'2',name:'Arian Gallardo', username:'ecofroz'}],
        volunteers: [{id:'1',name:'Moshe Ojeda', username:'moshe'},{id:'2',name:'Daniel Alpiste', username:'daniel'}]
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
                <ActHeader></ActHeader>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: () => (
                            <View onLayout={ this.setHeight() }>
                                <ActInformation activity ={this.activity} />
                            </View>
                        ),
                        second: () => (
                            <View onLayout={ this.setHeight() }>
                                <ProjActivities/>
                            </View>
                        ),
                        third: () => (
                            <View onLayout={ this.setHeight() }>
                                <ActMembers activity ={this.activity}/>
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

export default ActivityView;

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
    }
});