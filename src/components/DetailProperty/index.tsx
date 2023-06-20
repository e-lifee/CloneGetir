import React,{useState} from 'react'
import {View,Text} from "react-native"
import { Feather } from '@expo/vector-icons';
function index() {
    const [details,setDetails]=useState<string[]>(
        ["Milk chocolate coated with crunchy almond pieces and a hint of vanilla flavor.",
        "Ingredients",
        "Nutritional Values",
        "Usage",
        "Additional Informations"
        ]
    )

    const TextComponent=({detail,index}:{detail:string,index:number})=>{
        return (
            <View style={{
                paddingVertical:12,
                borderBottomWidth: index===details.length-1 ? 0 : 0.4,
                borderBottomColor:'lightgrey',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between'
            }}>
                <Text style={{color: index===0 ? 'lightblack' : '#687482',fontSize: index===0 ? 10.5 : 13,fontWeight:index===0 ? '400' : '500'}}>{detail}</Text>
                {index != 0 && <Feather name="chevron-down" size={24} color="#9f9f9f" />}
            </View>
        )
    }
  return (
    <View style={{backgroundColor:'white',paddingHorizontal:16,paddingVertical:8}}>
        {details.map((item,index)=>(
            <TextComponent key={index} index={index} detail={item}/>
        ))}
    </View>
  )
}

export default index
