import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Crypto} from './Interfaces';

export const List = ({cryptos} /* :Crypto[] */) => {
  let bull: boolean;

  return (
    <>
      {cryptos.map((el: Crypto) => {
        return (
          <>
            <View style={[styles.cryptoContainer, {padding: 25}]}>
              <View style={styles.cryptoContainer}>
                <Image style={styles.image} source={el.img} />
                <View style={[{paddingLeft: 5}]}>
                  <Text style={styles.name}> {el.name} </Text>
                  <Text> {el.symbol} </Text>
                </View>
              </View>
              <View style={styles.lineContainer}>
                <View>
                  <Text style={styles.name}> ${el.price} </Text>
                  <View style={styles.percentContainer}>
                    {(bull = el.percent > 0 ? true : false)}
                    {/* { bull = el.percent > 0? arrow = require('../Images/ArrowUp.png') : arrow = require('../Images/ArrowDown.png') } */}
                    <Image style={[{width: 15, height: 15}]} source={el.arrow} />
                    <Text
                      style={[
                        {
                          textAlign: 'right',
                          color: bull ? 'green' : 'red',
                          width: 'auto',
                        },
                      ]}>
                      {' '}
                      {Math.abs(el.percent)}%{' '}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.lineContainer}>
              <Text style={styles.line} />
            </View>
          </>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  cryptoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '7.5%',
  },
  image: {
    width: 50,
    height: 50,
  },
  name: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  percentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  lineContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    backgroundColor: 'rgb(229, 233, 236)',
    height: 1.5,
    width: '85%',
  },
});
