import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'react-native';

const styles = StyleSheet.create({
  header: {
    color: '#333',
    fontSize: 19,
  },
  author: {
    color: '#999',
    fontSize: 15,
  },
  description: {
    color: '#666',
    fontSize: 13,
  },
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'transparent',
    backgroundColor: '#fff',
    marginVertical: 20,
    padding: 20,
    marginHorizontal: 10,
    shadowColor: '#eee',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  division: {
    borderWidth: 1,
    backgroundColor: '#fefefe',
    marginVertical: 8,
  },
});

const Post = props => (
  <View style={styles.container}>
    <Text style={styles.header}>{props.title}</Text>
    <Text style={styles.author}>{props.author}</Text>
    <View style={styles.division} />
    <Text style={styles.description}>{props.description}</Text>
  </View>
);

Post.defaultProps = {
  title: 'Post',
  author: 'Autor A',
  description: 'React Native é 10',
};

Post.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
};

export default Post;
