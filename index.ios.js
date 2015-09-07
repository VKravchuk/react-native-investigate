// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  */
// 'use strict';

// var React = require('react-native');
// var {
//   AppRegistry,
//   Image,
//   ListView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableHighlight,
//   NavigatorIOS,
//   ScrollView,
// } = React;

// /**
//  * For quota reasons we replaced the Rotten Tomatoes' API with a sample data of
//  * their very own API that lives in React Native's Github repo.
//  */
// var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

// var MOCKED_MOVIES_DATA = [
//   {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
// ];

// var NavDemo = React.createClass({
//     onRightButtonPress: function() {
//         this.refs.nav.push({
//             title: 'From Right',
//             component: ForRightScene
//         })
//     },

//     render () {
//         return (
//             <NavigatorIOS ref="nav" style={styles.container} initialRoute={{
//                 component: AwesomeProject,
//                 title: 'NavigatorIOS Demo',
//                 rightButtonTitle: 'MORE!',
//                 onRightButtonPress: this.onRightButtonPress
//             }} />
//         );
//     }
// });


// var AwesomeProject = React.createClass({
//   getInitialState: function() {
//     return {
//       dataSource: new ListView.DataSource({
//         rowHasChanged: (row1, row2) => row1 !== row2,
//       }),
//       loaded: false,
//     };
//   },
//   componentDidMount: function() {
//     this.fetchData();
//   },
//   fetchData: function() {
//     fetch(REQUEST_URL)
//       .then((response) => response.json())
//       .then((responseData) => {
//         this.setState({
//           dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
//           loaded: true,
//         });
//       })
//       .done();
//   },
//   render: function() {
//     if (!this.state.loaded) {
//       return this.renderLoadingView();
//     }


//         // <NavigatorIOS
//         //   initialRoute={{
//         //     component: AwesomeProject,
//         //     title: 'My View Title',
//         //     passProps: { myProp: 'foo' },
//         //   }}
//         // />
//     return (
//       <ListView
//         dataSource={this.state.dataSource}
//         renderRow={this.renderMovie}
//         style={styles.listView}
//       />
//     );
//   },

//   renderLoadingView: function() {
//     return (
//       <View style={styles.container}>
//         <Text>
//           Loading movies...
//         </Text>
//       </View>
//     );
//   },
//   renderMovie: function(movie) {
//     return (
//       <View style={styles.container}>
//         <Image
//           source={{uri: movie.posters.thumbnail}}
//           style={styles.thumbnail}
//         />
//         <TouchableHighlight style={styles.rightContainer}  onPress={this.onPress}>
//           <View>
//             <Text style={styles.title}>{movie.title}</Text>
//             <Text style={styles.year}>{movie.year}</Text>
//           </View>
//         </TouchableHighlight>
//       </View>
//     );
//   },

//   onPress(){
//     this.props.navigator.push({
//         title: 'From TouchableHighlight',
//         component: ForTouchScene
//     });
//   }


// });

// var ForRightScene = React.createClass({
//     render() {
//         return (
//             <View style={[styles.scene, {backgroundColor: '#FFF1E8'}]}>
//                 <Text>You came here from the "right" button!</Text>
//             </View>
//         );
//     }
// });


// var ForTouchScene = React.createClass({
//     render() {
//         return (
//             <View style={[styles.scene, {backgroundColor: '#ECF6E8'}]}>
//                 <Text>You came here from the TouchableHighlight!</Text>
//             </View>
//         );
//     }
// });

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   rightContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   year: {
//     textAlign: 'center',
//   },
//   thumbnail: {
//     width: 53,
//     height: 81,
//   },
//   listView: {
//     paddingTop: 20,
//     backgroundColor: '#F5FCFF',
//   },
// });


// AppRegistry.registerComponent('AwesomeProject', () => NavDemo);
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS,
  ScrollView,
} = React;

/**
 * For quota reasons we replaced the Rotten Tomatoes' API with a sample data of
 * their very own API that lives in React Native's Github repo.
 */
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];



var ForRightScene = React.createClass({
    render() {
        return (
            <View style={[styles.scene, {backgroundColor: '#FFF1E8'}]}>
                <Text>You came here from the "right" button!</Text>
            </View>
        );
    }
});


var ForTouchScene = React.createClass({
    render() {
        return (
            <View style={[styles.scene, {backgroundColor: '#ECF6E8'}]}>
                <Text>You came here from the TouchableHighlight!</Text>
            </View>
        );
    }
});


var AwesomeProject = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  },
  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }


        // <NavigatorIOS
        //   initialRoute={{
        //     component: AwesomeProject,
        //     title: 'My View Title',
        //     passProps: { myProp: 'foo' },
        //   }}
        // />
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
      />
    );
  },

  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  },
  renderMovie: function(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <TouchableHighlight style={styles.rightContainer}  onPress={this.onPress}>
          <View>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  },

  onPress(){
    this.props.navigator.push({
        title: 'From TouchableHighlight',
        component: ForTouchScene
    });
  }
});



var HomeScene = React.createClass({
    onPress() {
        this.props.navigator.push({
            title: 'From TouchableHighlight',
            component: ForTouchScene
        });
    },

    render() {
        return (
            <View style={[styles.scene, {backgroundColor: '#DAF6FF'}]}>
                <TouchableHighlight onPress={this.onPress}>
                    <Text>Welcome to the NavigatorIOS Demo. Press here!</Text>
                </TouchableHighlight>
            </View>
        );
    }
});

var NavDemo = React.createClass({
    onRightButtonPress: function() {
        this.refs.nav.push({
            title: 'From Right',
            component: ForRightScene
        })
    },

    render () {
        return (
            <NavigatorIOS ref="nav" style={styles.container} initialRoute={{
                component: AwesomeProject,
                title: 'NavigatorIOS Demo',
                rightButtonTitle: 'MORE!',
                onRightButtonPress: this.onRightButtonPress
            }} />
        );
    }
});

var styles = StyleSheet.create({
    // container: {
    //     flex: 1
    // },
    scene: {
        padding: 10,
        paddingTop: 74,
        flex: 1
    },
    container: {
      flex: 1,
    },
    rightContainer: {
      flex: 1,
    },
    title: {
      fontSize: 20,
      marginBottom: 8,
      textAlign: 'center',
    },
    year: {
      textAlign: 'center',
    },
    thumbnail: {
      width: 53,
      height: 81,
    },
    listView: {
      paddingTop: 20,
      backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('AwesomeProject', () => NavDemo);