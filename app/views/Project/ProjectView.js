import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import { ScrollView } from 'react-navigation';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ProjHeader from '../../components/Project/ProjHeader'; 
import ProjActivities from '../../components/Project/ProjActivities';
import ProjHomepage from '../../components/Project/ProjHomepage';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class ProjectView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: 'Información' },
                { key: 'second', title: 'Actividades' },
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
                <ProjHeader></ProjHeader>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: () => (
                            <View onLayout={ this.setHeight() }>
                                <ProjHomepage />
                            </View>
                        ),
                        second: () => (
                            <View onLayout={ this.setHeight() }>
                                <ProjActivities />
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

export default ProjectView;

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