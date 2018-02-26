/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import Post from './components/Post';

export default class App extends Component {

  state = {
    posts: [{ id: 0, title: 'Aprendendo React Native', author: 'Guilherme Lourenço', description: '	Lorem ipsum nec a metus senectus nunc fringilla nec, ac tortor congue suspendisse neque sed rhoncus viverra, vulputate lobortis diam a sociosqu ultricies ante. ut duis aenean senectus, tristique urna. ' },
      { id: 1, title: 'Aprendendo React Native', author: 'Mateus Pereira', description: '	Lorem ipsum pretium curae velit purus tempor, per senectus vulputate morbi vitae, velit porta sociosqu tortor aliquet. dictum condimentum ut ligula magna sociosqu tempus etiam, congue augue diam convallis vehicula' },
    { id: 2, title: 'Aprendendo React Native', author: 'Vaqueli de Paula', description: '	Lorem ipsum venenatis lobortis cursus dolor duis blandit ullamcorper placerat bibendum scelerisque eleifend nisi faucibus dui, sapien consectetur ultricies est nunc a senectus etiam sociosqu vestibulum ligula nulla dapibus sollicitudin. ' },
    { id: 3, title: 'Aprendendo React Native', author: 'Vaqueli de Paula', description: '	Lorem ipsum venenatis lobortis cursus dolor duis blandit ullamcorper placerat bibendum scelerisque eleifend nisi faucibus dui, sapien consectetur ultricies est nunc a senectus etiam sociosqu vestibulum ligula nulla dapibus sollicitudin. ' },
    { id: 4, title: 'Aprendendo React Native', author: 'Vaqueli de Paula', description: '	Lorem ipsum venenatis lobortis cursus dolor duis blandit ullamcorper placerat bibendum scelerisque eleifend nisi faucibus dui, sapien consectetur ultricies est nunc a senectus etiam sociosqu vestibulum ligula nulla dapibus sollicitudin. ' },
    { id: 5, title: 'Aprendendo React Native', author: 'Vaqueli de Paula', description: '	Lorem ipsum venenatis lobortis cursus dolor duis blandit ullamcorper placerat bibendum scelerisque eleifend nisi faucibus dui, sapien consectetur ultricies est nunc a senectus etiam sociosqu vestibulum ligula nulla dapibus sollicitudin. ' },
    { id: 6, title: 'Aprendendo React Native', author: 'Vaqueli de Paula', description: '	Lorem ipsum venenatis lobortis cursus dolor duis blandit ullamcorper placerat bibendum scelerisque eleifend nisi faucibus dui, sapien consectetur ultricies est nunc a senectus etiam sociosqu vestibulum ligula nulla dapibus sollicitudin. ' },
    { id: 7, title: 'Aprendendo React Native', author: 'Vaqueli de Paula', description: '	Lorem ipsum venenatis lobortis cursus dolor duis blandit ullamcorper placerat bibendum scelerisque eleifend nisi faucibus dui, sapien consectetur ultricies est nunc a senectus etiam sociosqu vestibulum ligula nulla dapibus sollicitudin. ' },
    { id: 8, title: 'Aprendendo React Native', author: 'Vaqueli de Paula', description: '	Lorem ipsum venenatis lobortis cursus dolor duis blandit ullamcorper placerat bibendum scelerisque eleifend nisi faucibus dui, sapien consectetur ultricies est nunc a senectus etiam sociosqu vestibulum ligula nulla dapibus sollicitudin. udhsa' },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Go Native</Text>
        </View>
        <ScrollView>
          {this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} author={post.author}
              description={post.description} />
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    // flex:1,
    backgroundColor: '#fff',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    color: '#333',
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  }
});
