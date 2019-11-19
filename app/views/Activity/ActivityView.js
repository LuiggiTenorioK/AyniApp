import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import { ScrollView } from 'react-navigation';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ActHeader from '../../components/Activities/ActHeader';
import ActInformation from '../../components/Activities/ActInformation'; 
import ActNews from '../../components/Activities/ActNews';
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
        description : 'Apoya a los guardabosques de una concesión de conservación por la vigilancia y el monitoreo de una zona de protección de 40 000 ha de bosques amazonicos. La misión se desarolla en aislamiento y en condiciones de vida muy básicas.',
        contactName:'Luiggi Tenorio',
        contactNumber: '951888908',
        contactEmail:'lbit@gmail.com',
        contactAddress: 'Calle San Luis 679',
        organizers: [{id:'1',name:'Luiggi Tenorio', username:'lbitgreen', img:''},
        {id:'2',name:'Arian Gallardo', username:'ecofroz'}],
        volunteers: [{id:'1',name:'Moshe Ojeda', username:'moshe', img:'https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/60333966_3005076362843118_7309230646331703296_n.jpg?_nc_cat=103&_nc_oc=AQkR2A9ZMC9dRmJvDVIaez4Zw4UEioZg2UcufmTMt5SoObOf_4LH9RlBJap5ZXKaV2o&_nc_ht=scontent.flim9-1.fna&oh=b10d7290520c3ec330861c8b4dfee020&oe=5DD31050'},
        {id:'2',name:'Daniel Alpiste', username:'daniel', img:'https://i0.wp.com/metro.co.uk/wp-content/uploads/2018/03/red-nose-pitbull-1-e1520600821708.jpg?quality=90&strip=all&zoom=1&resize=644%2C548&ssl=1'}],
        news:[{id:'1',name:'Luiggi Tenorio', username:'lbitgreen',
        description:'Nuestro programa comienza en dos semanas! Aún puedes participar, si tienes alguna duda, puedes ecribirme a través del chat de Ayni :)',
        role:'ORGANIZADOR'}]
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
                                <ActNews activity ={this.activity}/>
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
        height: 2,
        backgroundColor: '#6C28E1' ,
    },
    tabBarStyle: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 50,
        elevation: 0
    }
});