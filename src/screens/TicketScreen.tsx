/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ModalDropdown from 'react-native-modal-dropdown';
import Feather from 'react-native-vector-icons/Feather';
import DocumentPicker from 'react-native-document-picker';

const TicketScreen = ({ navigation }: any) => {
  const [users] = useState([
    {
      name: 'Ticket #001: Software Installation Issue',
      description: 'Active',
      descDate: 'August 2023',
    },
    {
      name: 'Ticket #002: Forgotten Password',
      description: 'Active',
      descDate: 'August 2023',
    },
    {
      name: 'Ticket #003: Email Configuration Problem',
      description: 'Active',
      descDate: 'August 2023',
    },
    {
      name: 'Ticket #004: Functionality Inquiry',
      description: 'Closed',
      descDate: 'August 2023',
    },
    {
      name: 'Ticket #005: Bug Report - System Error',
      description: 'Active',
      descDate: 'August 2023',
    },
    {
      name: 'Ticket #006: Account Deactivation Request',
      description: 'Active',
      descDate: 'August 2023',
    },
    {
      name: 'Ticket #007: Data Import Assistance',
      description: 'Active',
      descDate: 'August 2023',
    },
    {
      name: 'Ticket #008: Mobile App Sync Issue',
      description: 'Closed',
      descDate: 'August 2023',
    },
    {
      name: 'Ticket #009: Feature Enhancement Request',
      description: 'Active',
      descDate: 'August 2023',
    },
    {
      name: 'Ticket #010: Performance Slowdown',
      description: 'Closed',
      descDate: 'August 2023',
    },
  ]);

  const [filteredTickets, setFilteredTickets] = useState([...users]);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('All Products');
  const [selectedUsers, setSelectedUsers] = useState('All Users');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [selectedTickets, setSelectedTickets] = useState('All Tickets');
  const products = [
    'Jack Henry Symitar',
    'Ancillary Products',
    'Technology',
    'Security',
    'Digital Channels',
    'All Products',
  ];
  const usersDropdown = [
    'Emily Thompson',
    'Alex Rodriguez',
    'Jasmine Patel',
    'Marcus Davis',
    'Olivia Chen',
    'All Users',
  ];
  const tickets = ['Active', 'Closed', 'All Tickets'];
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [attachment, setAttachment] = useState(null);





  const pickAttachment = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      // Update the state with the selected file information
      setAttachment(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // Handle cancel event
      } else {
        // Handle other errors
      }
    }
  };

  const handleNewPress = () => {
    setModalVisible(true);
  };

  const handleDropdownToggle1 = (willShow: boolean) => {
    setIsDropdownOpen1(willShow);
  };
  const handleDropdownToggle2 = (willShow: boolean) => {
    setIsDropdownOpen2(willShow);
  };
  const handleDropdownToggle3 = (willShow: boolean) => {
    setIsDropdownOpen3(willShow);
  };

  const handleFilterPress = () => {
    setShowFilterDropdown(!showFilterDropdown);
  };

  const applyFilters = () => {
    let filteredData = [...users];

    if (selectedProduct !== 'All Products') {
      filteredData = filteredData.filter(item =>
        item.name.includes(selectedProduct),
      );
    }

    if (selectedUsers !== 'All Users') {
      filteredData = filteredData.filter(item =>
        item.name.includes(selectedUsers),
      );
    }

    if (selectedTickets !== 'All Tickets') {
      filteredData = filteredData.filter(
        item => item.description === selectedTickets,
      );
    }

    const searchLower = search.toLowerCase();
    filteredData = filteredData.filter(
      item =>
        item.name.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower),
    );

    setFilteredTickets(filteredData);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedProduct, selectedUsers, selectedTickets, search]);

  const renderUserItem = ({
    item,
  }: {
    item: { name: string; description: string; descDate: string };
  }) => (
    <View style={styles.userItem}>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <View style={styles.userDescDate}>
          <Text style={styles.userDescription}>{item.description}</Text>
          <Text>{item.descDate}</Text>
        </View>
      </View>
      <AntDesign
        onPress={() => navigation.navigate('Home')}
        name="right"
        size={20}
      />
    </View>
  );

  const LineSeparator = () => {
    return <View style={styles.lineSeperator} />;
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.tool}>
          <Text style={styles.ticketsText}>Tickets</Text>
          <TouchableOpacity
            style={styles.newContainer}
            onPress={handleNewPress}>
            <Text style={styles.newText}>New</Text>
            <Ionicons
              style={styles.newIcon}
              name="add-circle-outline"
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />

        <View style={styles.filterTool}>
          <Text style={styles.clearfilterText}>Clear Filters</Text>
          <TouchableOpacity onPress={handleFilterPress} activeOpacity={1}>
            <View style={styles.filterContainer}>
              <Text style={styles.filterText}>Filter</Text>
              <Ionicons
                style={styles.filterIcon}
                name="filter-circle-outline"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
          {showFilterDropdown ? (
            <View style={styles.card}>
              <TouchableOpacity onPress={handleFilterPress} activeOpacity={1}>
                <View style={styles.filterContainerCard}>
                  <Text style={styles.filterText}>Close</Text>
                  <Ionicons
                    style={styles.filterIcon}
                    name="filter-circle-outline"
                    size={24}
                    color="black"
                  />
                </View>
              </TouchableOpacity>

              <ModalDropdown
                options={products}
                defaultValue="All Products"
                textStyle={{ fontSize: 16, color: 'black' }}
                style={styles.allproductsDropdown}
                dropdownStyle={{
                  width: 348,
                  borderColor: '#ccc',
                  marginRight: 100,
                  borderTopColor: 'white',
                  // height: 'auto'
                }}
                dropdownTextStyle={{
                  fontSize: 14,
                  marginVertical: -5,
                  marginLeft: 6,
                  color: 'black',
                }}
                onSelect={(_index: any, value: React.SetStateAction<string>) =>
                  setSelectedProduct(value)
                }
                onDropdownWillShow={() => handleDropdownToggle1(true)}
                onDropdownWillHide={() => handleDropdownToggle1(false)}
                renderSeparator={() => (
                  <View style={{ backgroundColor: 'white' }} />
                )}>
                <View style={styles.allproductsView}>
                  <Text style={styles.allproductsDropdownText}>
                    {selectedProduct}
                  </Text>

                  <Ionicons
                    name="triangle-outline"
                    size={16}
                    color="black"
                    style={{
                      transform: [
                        { rotate: isDropdownOpen1 ? '0deg' : '180deg' },
                      ],
                    }}
                  />
                </View>
              </ModalDropdown>
              <ModalDropdown
                options={usersDropdown}
                defaultValue="All Users"
                textStyle={{ fontSize: 16, color: 'black' }}
                style={{
                  width: 350,
                  borderWidth: 1,
                  backgroundColor: 'white',
                  borderColor: '#ccc',
                  paddingVertical: 10,
                  flexDirection: 'row',
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}
                dropdownStyle={{
                  width: 348,
                  borderColor: '#ccc',
                  marginTop: 5,
                  marginRight: 100,
                  borderTopColor: 'white',
                  // height: 'auto'
                }}
                dropdownTextStyle={{
                  fontSize: 14,
                  marginVertical: -5,
                  marginLeft: 6,
                  color: 'black',
                }}
                onSelect={(_index: any, value: React.SetStateAction<string>) =>
                  setSelectedUsers(value)
                }
                onDropdownWillShow={() => handleDropdownToggle2(true)}
                onDropdownWillHide={() => handleDropdownToggle2(false)}
                // Use ItemSeparatorComponent to customize the separator between items
                renderSeparator={() => (
                  <View style={{ backgroundColor: 'white' }} />
                )}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '99%',
                  }}>
                  <Text style={{ fontSize: 14, color: 'black', marginLeft: 14 }}>
                    {selectedUsers}
                  </Text>
                  <Ionicons
                    name="triangle-outline"
                    size={16}
                    color="black"
                    style={{
                      transform: [
                        { rotate: isDropdownOpen2 ? '0deg' : '180deg' },
                      ],
                    }}
                  />
                </View>
              </ModalDropdown>
              <ModalDropdown
                options={tickets}
                defaultValue="All Tickets"
                textStyle={{ fontSize: 16, color: 'black' }}
                style={{
                  width: 350,
                  borderWidth: 1,
                  backgroundColor: 'white',
                  borderColor: '#ccc',
                  paddingVertical: 10,
                  flexDirection: 'row',
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}
                dropdownStyle={{
                  width: 348,
                  borderColor: '#ccc',
                  backgroundColor: 'green',

                  marginTop: 5,
                  // marginRight: 100,
                  borderTopColor: 'white',
                  height: 'auto',
                }}
                dropdownTextStyle={{
                  fontSize: 14,
                  marginVertical: -5,
                  // marginLeft: 5,
                  color: 'black',
                }}
                onSelect={(_index: any, value: React.SetStateAction<string>) =>
                  setSelectedTickets(value)
                }
                onDropdownWillShow={() => handleDropdownToggle3(true)}
                onDropdownWillHide={() => handleDropdownToggle3(false)}
                renderSeparator={() => (
                  <View style={{ backgroundColor: 'white' }} />
                )}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '99%',
                  }}>
                  <Text style={{ fontSize: 14, color: 'black', marginLeft: 14 }}>
                    {selectedTickets}
                  </Text>
                  <Ionicons
                    name="triangle-outline"
                    size={16}
                    color="black"
                    style={{
                      transform: [
                        { rotate: isDropdownOpen3 ? '0deg' : '180deg' },
                      ],
                    }}
                  />
                </View>
              </ModalDropdown>

              <View style={{ marginTop: 10 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    backgroundColor: 'white',
                    borderColor: '#e6e6e6',
                    width: 350,
                    alignSelf: 'center',
                  }}>
                  <TextInput
                    style={{ padding: 10, flex: 1 }}
                    value={search}
                    placeholder="Search Tickets"
                    placeholderTextColor="black"
                    onChangeText={text => setSearch(text)}
                  />
                  <Ionicons
                    name="search-outline"
                    size={16}
                    color="black"
                    style={{ padding: 10 }}
                  />
                </View>
              </View>
            </View>
          ) : null}
        </View>

        <View>
          <FlatList
            data={filteredTickets}
            renderItem={renderUserItem}
            keyExtractor={item => item.name}
            ItemSeparatorComponent={LineSeparator}
          />
        </View>
      </View>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  borderWidth: 4,
                  width: 70,
                  borderRadius: 10,
                  borderColor: 'grey',
                }}
              />
              <View
                style={{
                  alignSelf: 'flex-start',
                  marginLeft: -9,
                  marginBottom: 20,
                }}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={{ fontSize: 18, marginLeft: 8 }}>Cancel</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginBottom: 10,
                }}>
                <Text style={{ alignSelf: 'flex-start', fontSize: 18 }}>
                  New Ticket
                </Text>
                <ModalDropdown
                  options={products}
                  defaultValue="All Products"
                  textStyle={{ fontSize: 16, color: 'black' }}
                  style={{
                    borderColor: isDropdownOpen1 ? 'gray' : 'transparent',
                    borderBottomColor: 'white',
                    borderWidth: 1,
                    height: 40, // Set a fixed height for the dropdown container
                    width: '45%',


                  }}
                  dropdownStyle={{
                    borderTopColor: 'white',
                    borderWidth: 1,
                    height: 200, // Set a fixed height for the dropdown list
                    borderColor: 'gray',
                    width: '40%',
                    marginTop: 10,
                    backgroundColor: 'white'
                  }}
                  dropdownTextStyle={{
                    fontSize: 14, // Adjust the font size for better visibility
                    marginLeft: 6,
                    color: 'black',
                    marginTop: 5,
                    borderTopColor: 'white'
                  }}
                  onSelect={(_index: any, value: React.SetStateAction<string>) =>
                    setSelectedProduct(value)
                  }
                  onDropdownWillShow={() => handleDropdownToggle1(true)}
                  onDropdownWillHide={() => handleDropdownToggle1(false)}
                  renderSeparator={() => <View style={{ backgroundColor: 'white' }} />}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center', // Center the text vertically
                      paddingLeft: 10, // Adjust left padding for better alignment
                      // borderWidth: isDropdownOpen1 ? 1 : 0, // Apply border only when open
                      // borderColor: 'gray', // Border color when open
                    }}
                  >
                    <Text style={{ fontSize: 14, color: 'black' }}>
                      {selectedProduct}
                    </Text>
                    <Ionicons
                      name="triangle-outline"
                      size={16} // Adjust the size for better visibility
                      color="black"
                      style={{
                        transform: [
                          { rotate: isDropdownOpen1 ? '0deg' : '180deg' },
                        ],
                      }}
                    />
                  </View>
                </ModalDropdown>
              </View>
              <View style={{ flexDirection: 'row', }}>
                <Text
                  style={{
                    // alignSelf: 'flex-start',
                    fontSize: 17,
                    // marginBottom: 15,
                    alignSelf: 'center'

                  }}>
                  Subject :
                </Text>
                <TextInput style={{
                  borderColor: 'red',
                  borderWidth: 1,
                  width: '80%',
                  marginTop: 5,
                  padding: 10,
                  borderRadius: 8,
                }}
                  value={subject}
                  onChangeText={text => setSubject(text)}
                />
              </View>
              <View style={{ borderBottomWidth: 1, width: '100%' }} />
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 17, alignSelf: 'center'}}>Message :</Text>
                <TextInput
                  style={{
                    borderColor: 'red',
                    borderWidth: 1,
                    width: '80%',
                    marginTop: 5,
                    padding: 10,
                    borderRadius: 8,
                  }}
                  value={message}
                  onChangeText={(text) => setMessage(text)}
                />
              </View>
             
              <TouchableOpacity
                style={{
                  // marginTop: '20%',
                  alignSelf: 'flex-end',
                  marginRight: 30,
                }}
                onPress={pickAttachment}>
                <Feather name="paperclip" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {attachment && (
          <View>
            <Text>Attachment:</Text>
            <Text>{attachment.name}</Text>
            <Text>{attachment.type}</Text>
            {/* Add more details if needed */}
          </View>
        )}
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    // position:'relative'
  },
  container: {
    // marginLeft: 10,
    // marginRight: 10,
    marginTop: 15,
  },
  tool: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  filterTool: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 30,
  },
  ticketsText: {
    fontSize: 18,
    // color: 'rgb(90, 90, 90)',
    fontWeight: 'bold',
  },
  newText: {
    fontSize: 15,
    // color: 'rgb(90, 90, 90)',
    fontWeight: 'bold',
  },
  newIcon: {
    fontSize: 30,
    // color: 'rgb(90, 90, 90)',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  clearfilterText: {
    marginTop: 10,
    fontSize: 11,
    // color: 'rgb(90, 90, 90)',
    marginBottom: 10,
    marginLeft: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterContainerCard: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  filterText: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 13,

    // color: 'rgb(90, 90, 90)',
  },
  filterIcon: {
    marginTop: 5,
    marginLeft: 5,
    // color: 'rgb(90, 90, 90)',
    // fontSize: 14,
    marginRight: 20,
  },
  lineSeperator: {
    height: 1,
    backgroundColor: 'gray',
    marginLeft: 20,
    marginRight: 20,
  },

  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    // borderColor:'red',
    // borderWidth:1,
    // borderBottomWidth: 1,
    // borderBottomColor: 'lightgray',
    marginLeft: 20,
    marginRight: 20,
  },
  userInfo: {
    // borderColor:'red',
    // borderWidth:1,
    flexDirection: 'column',
    flex: 1,
  },
  userName: {
    fontSize: 16,
    // color: 'rgb(90, 90, 90)',
    fontWeight: 'bold',
  },
  userDescription: {
    // color: 'rgb(90, 90, 90)',
    // flex: 1,
  },

  userDescDate: {
    flexDirection: 'row',
    // alignItems:'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  newContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    marginTop: 5,
    // padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth:5,
    // borderColor:'red'
  },
  containerDropdown: {
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    height: '100%',
    backgroundColor: '#e7e7e7',
    
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    
  },
  modalView: {
    borderColor:'red',
    borderWidth:1,
    margin: 20,
    width: '100%',
    height: '88%',
    backgroundColor: 'white',
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    // marginBottom:30,
    // padding: 20,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // elevation: 5,
  },
  card: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#e6e6e6',
    height: '800%',
  },
  allproductsDropdown: {
    width: 350,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#ccc',
    paddingVertical: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  allproductsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '99%',
  },
  allproductsDropdownText: {
    fontSize: 14,
    color: 'black',
    marginLeft: 14,
  },
});

export default TicketScreen;
