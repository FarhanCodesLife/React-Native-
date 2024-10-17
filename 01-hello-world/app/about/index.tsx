import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'

export class About extends Component {
  render() {
    return (
      <View>
        <Text>About</Text>


        <View style={{
  flex: 1,
  justifyContent:'center',
  flexDirection:'row',
  gap:10,

}}>



        <Link href={''} style={{
          color:'#820cf0',
          fontSize: 30,
        }}>
          Home
          </Link>
          
          <Link href={'about'} style={{
          color:'#820cf0',
          fontSize: 30,
        }}>
          About
          </Link>

          <Link href={'servises'} style={{
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
          About Me
          </Text>



          <Text style={{
            padding:30,
            textAlign:'center'

          }}>
          Hi, I'm Muhammad Farhan, a dedicated frontend developer born on October 09, 2004, in Malir, Karachi, Pakistan. Currently studying the MERN stack at SMIT, I’m passionate about crafting dynamic web applications with a focus on performance and scalability. Based in Karachi (Zip: 75080), I’m eager to collaborate and create impactful digital solutions. Reach out to me at farhansmit0318@gmail.com or +92 318 2127256.


          </Text>
        </View>
      </View>
    )
  }
}

export default About