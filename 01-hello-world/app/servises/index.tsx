import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'

export class servises extends Component {
  render() {
    return (
      <View>
        <Text>Servises</Text>

        <View style={{
  flex: 1,
  justifyContent:'center',
  flexDirection:'row',
  gap:10,

}}>

        <Link href={'/'} style={{
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


<View>
          <Text style={{
            fontSize:30,
            textAlign:'center',
            margin:30,
            }}>
We do awesome services for our clients
</Text>

<View style={{
  padding:20,

}}>

<Text style={{
  fontSize:20,
  padding:10,
}}>
Web Design

</Text>

          <Text style={{
            padding:10,
            // textAlign:'ter'
            
          }}>


Elevate your brand with stunning, responsive web designs that captivate and convert.

          </Text>
            </View>



            <View style={{
  padding:20,

}}>

<Text style={{
  fontSize:20,
  padding:10,
}}>
Web Application

</Text>

          <Text style={{
            padding:10,
            // textAlign:'ter'
            
          }}>


Build scalable, user-friendly web applications that drive business results.
Build powerful, scalable web applications tailored to your business needs.
          </Text>
            </View>





            <View style={{
  padding:20,

}}>

<Text style={{
  fontSize:20,
  padding:10,
}}>
Web Development

</Text>

          <Text style={{
            padding:10,
            // textAlign:'ter'
            
          }}>


Crafting high-performance, custom web development solutions that results.

          </Text>
            </View>





        </View>

        
      </View>
    )
  }
}

export default servises