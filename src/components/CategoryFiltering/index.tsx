import React,{useState} from 'react'
import {View,Text,Dimensions} from "react-native"
import { ScrollView } from 'react-native-gesture-handler'
import categoriesGetir from '../../../assets/categoriesGetir'
import { Category } from '../../models'
const {height,width}=Dimensions.get('window')


const CategoryBox=({item}:{item:Category})=>{
    return(
      <View style={{paddingHorizontal:9,flexDirection:'row',alignItems:'center'}}>
      <Text style={{fontSize:14,color:'white',fontWeight:'600'}}>{item.name}</Text>
      </View>
    )
}

function index() {
  const [categories,setCategories]=useState<Category[]>(categoriesGetir)
  return (
    <ScrollView style={{width:'100%',backgroundColor:'#7849F7',height:height*0.065}} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
        {categories?.map((item)=>(
          <CategoryBox item={item}/>
        ))
        }
    </ScrollView>
  )
}

export default index
