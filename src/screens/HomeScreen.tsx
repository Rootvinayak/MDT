import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Jack Henry Symitar', value: '1' },
  { label: 'Ancillary Products', value: '2' },
  { label: 'Technology', value: '3' },
  { label: 'Security', value: '4' },
  { label: 'Digital Channels', value: '5' },
  { label: 'All Products', value: '6' },
];

const HomeScreen = () => {
  const [value, setValue] = useState(null);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {/* Add icon here if needed */}
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="All Products"
      containerStyle={{
        // borderColor:'red',
        // borderWidth:1,
        // borderBottomWidth:1,
        // borderBottomColor:'red'
        borderColor:'gray',
        borderBottomWidth:1
      }}
      value={value}
      onChange={(item) => {
        setValue(item.value);
      }}
      renderItem={renderItem}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 40,
    backgroundColor: 'white',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
});
