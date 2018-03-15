import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Post from 'components/Post';
import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

const styles = StyleSheet.create({
  header: {
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
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Mateus Pereira',
        description:
          'Lorem ipsum pretium curae velit purus tempor, per senectus vulputate morbi vitae, velit porta sociosqu tortor aliquet. dictum condimentum ut ligula magna sociosqu tempus etiam, congue augue diam convallis vehicula',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Vaqueli de Paula',
        description:
          'Lorem ipsum venenatis lobortis cursus dolor duis blandit ullamcorper placerat bibendum scelerisque eleifend nisi faucibus dui, sapien consectetur ultricies est nunc a senectus etiam sociosqu vestibulum ligula nulla dapibus sollicitudin. ',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Vaqueli de Paula',
        description:
          'Lorem ipsum venenatis lobortis cursus dolor duis blandit ullamcorper placerat bibendum scelerisque eleifend nisi faucibus dui, sapien consectetur ultricies est nunc a senectus etiam sociosqu vestibulum ligula nulla dapibus sollicitudin. ',
      },
      {
        id: 4,
        title: 'Aprendendo React Native',
        author: 'Vaqueli de Paula',
        description:
          'Lorem ipsum venenatis lobortis cursus dolor duis blandit ullamcorper placerat bibendum scelerisque eleifend nisi faucibus dui, sapien consectetur ultricies est nunc a senectus etiam sociosqu vestibulum ligula nulla dapibus sollicitudin. ',
      },
      {
        id: 5,
        title: 'Aprendendo React Native',
        author: 'Vaqueli de Paula',
        description:
          'Lorem ipsum venenatis lobortis cursus dolor duis blandit ullamcorper placerat bibendum scelerisque eleifend nisi faucibus dui, sapien consectetur ultricies est nunc a senectus etiam sociosqu vestibulum ligula nulla dapibus sollicitudin. ',
      },
      {
        id: 6,
        title: 'Aprendendo React Native',
        author: 'Vaqueli de Paula',
        description:
          'Lorem ipsum venenatis lobortis cursus dolor duis blandit ullamcorper placerat bibendum scelerisque eleifend nisi faucibus dui, sapien consectetur ultricies est nunc a senectus etiam sociosqu vestibulum ligula nulla dapibus sollicitudin. ',
      },
      {
        id: 7,
        title: 'Aprendendo React Native',
        author: 'Vaqueli de Paula',
        description:
          'Lorem ipsum venenatis lobortis cursus dolor duis blandit ullamcorper placerat bibendum scelerisque eleifend nisi faucibus dui, sapien consectetur ultricies est nunc a senectus etiam sociosqu vestibulum ligula nulla dapibus sollicitudin. ',
      },
      {
        id: 8,
        title: 'Aprendendo React Native',
        author: 'Vaqueli de Paula',
        description:
          'Lorem ipsum venenatis lobortis cursus dolor duis blandit ullamcorper placerat bibendum scelerisque eleifend nisi faucibus dui, sapien consectetur ultricies est nunc a senectus etiam sociosqu vestibulum ligula nulla dapibus sollicitudin. udhsa',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Go Native</Text>
        </View>
        <ScrollView>
          {this.state.posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              description={post.description}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
