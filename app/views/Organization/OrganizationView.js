import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import { ScrollView } from 'react-navigation';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import OrgHeader from '../../components/Organization/OrgHeader';
import OrgHomepage from '../../components/Organization/OrgHomepage';
import OrgProjects from '../../components/Organization/OrgProjects';
import OrgContact from '../../components/Organization/OrgContact';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class OrganizationView extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', ''),
        };
    }

    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: 'Detalles' },
                { key: 'second', title: 'Proyectos' },
                { key: 'third', title: 'Contacto' },
            ],
            tabHeight: SCREEN_HEIGHT*0.75-50,
        }
        this.setHeight = this.setHeight.bind(this)
        this.props.navigation.setParams({ 'title': '@reforesta' })
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.props.navigation.getParam('title', '') != '@reforesta')
            this.props.navigation.setParams({ 'title': '@reforesta' })
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
                <OrgHeader></OrgHeader>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: () => (
                            <View onLayout={ this.setHeight() }>
                                <OrgHomepage />
                            </View>
                        ),
                        second: () => (
                            <View onLayout={ this.setHeight() }>
                                <OrgProjects />
                            </View>
                        ),
                        third: () => (
                            <View onLayout={ this.setHeight() }>
                                <OrgContact />
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

export default OrganizationView;

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
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: 50,
        elevation: 1
    }
});