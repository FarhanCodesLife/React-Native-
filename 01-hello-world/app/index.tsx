import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'

export default class index extends Component {
  render() {
    return (


      <View  style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff',
        borderColor:'#'
        
      }}>


<View style={{
  flex: 1,
  justifyContent:'center',
  flexDirection:'row',
  gap:20,
  margin:30,

}}>


<Link href={"/"} style={{
  color:'#820cf0',
  fontSize: 30,
}}>
          Home
          </Link>
          
          <Link href={'/about'} style={{
            color:'#820cf0',
            fontSize: 30,
          }}>
          About
          </Link>

          <Link href={'/servises'} style={{
          color:'#820cf0',
          fontSize: 30,
        }}>
          Servises
          </Link>

          </View>
        
        <View style={{
          flex: 3,
        }}>



<View style={{
  
        alignItems:'center'
      }}>

        <ImageBackground src='https://images.unsplash.com/photo-1719937206341-38a6392dfdef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D' 
        style={{
          
          width: 200,
          height: 200,
          borderRadius: 100,
          overflow:'hidden',
          borderColor: '#820cf0',
          borderWidth: 2,
          margin:'auto',
          
        }}/>

      </View>


<View style={{
  borderWidth:2,
  margin:30,
  padding:5,
  backgroundColor:'#70dbdb'
}}>

<Text style={{
  
  
  color:'#820cf0',
  fontSize: 25,
}}>Hi There! 👋🏻</Text>
        
        <Text style={{
          color:'#043d3d',
          fontSize: 45,
          
        }}>Muhammad Farhan
</Text>

<Text style={{
  
  color:'#820cf0',
  fontSize: 30,
}}>React-Native Developer
</Text>

</View>
        
      
     
        </View>
      
      
      </View>

    )
  }
}

const styles = StyleSheet.create({})