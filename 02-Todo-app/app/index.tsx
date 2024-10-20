import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Modal, Alert, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
const [todo,settodo] = useState<string[]>([])
const [input,setinput] = useState('')
const [modalVisible, setModalVisible] = useState(false);
const [index, setIndex] = useState(0);
const [updateInput, setUpdateInput] = useState('')


function Addtodo() {

  todo.push(input)
  settodo([...todo])
  setinput('')
  console.log(todo);
  
}
function deleteTodo(index:number) {

  todo.splice(index,1)
  settodo([...todo])

  
}


function Edittodo(index:number) {

todo.splice(index,1,updateInput)
settodo([...todo])
setModalVisible(false)


  
}


  return (
      <SafeAreaView>
    <View>
      <Text 
      style={{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue',
        textAlign: 'center',
        marginVertical: 20
      
      }}
      >Todo</Text>

      
      <TextInput
        style={styles.input}
        onChangeText={setinput}
        value={input}
        placeholder="Enter Todo"
      />
       <TouchableOpacity style={styles.button} onPress={Addtodo}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
      
    </View>

    {todo.length > 0 ? <FlatList
        style={{ marginTop: 20,flexWrap:'wrap' }}
        data={todo}
        renderItem={({ item, index }) => {
          return <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
            <TouchableOpacity style={styles.ListBtn} onPress={() => deleteTodo(index)}
              activeOpacity={0.5}
            >
              <Text>Delete Todo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ListBtn} onPress={() => {
              setIndex(index)
              setUpdateInput(item)
              setModalVisible(true)
            }}>
              <Text>Edit Todo</Text>
            </TouchableOpacity>
          </View>
        }}
        keyExtractor={(item, index) => index.toString()}
      /> : <Text style={styles.title}>No Todo Found...</Text>}



<View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TextInput
        style={styles.editinput}
        onChangeText={setUpdateInput}
        value={updateInput}
        placeholder="Enter updated Todo"
      />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center', 
      }}>

       <TouchableOpacity style={styles.buttonClose} onPress={()=>setModalVisible(!modalVisible)}>
        <Text style={styles.textStyle}>Close</Text>
      </TouchableOpacity>
      
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() =>{ Edittodo(index), setModalVisible(!modalVisible)}}>
              <Text style={styles.textStyle}>Update Todo</Text>
            </Pressable>
                </View>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>



    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  editinput:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 200,

  },

  textStyle:{
    color: 'white',
    fontWeight: 'bold',
    margin: 10
    
  }
  ,

  buttonClose:{
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,

  },
  centeredView:{
    flex: 1,
    justifyContent: 'center',
    
  },
  modalText:{
    marginBottom: 15,
    textAlign: 'center',

  },
  modalView:{
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
        },
        buttonOpen: {
          backgroundColor: '#F194FF',
          },

      
  

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  ListBtn:{
    width: 100,
    height: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5


  }
  ,
  item:{
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,

  }
  ,
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    margin: 10


  },
  // button: {
  //   alignItems: 'center',
  //   backgroundColor: '#DDDDDD',
  //   padding: 10,
  //   marginHorizontal: 120,


  // },
});

export default index