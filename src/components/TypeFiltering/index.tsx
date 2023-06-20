import React,{useState} from 'react'
import {ScrollView,Text,Dimensions,TouchableOpacity} from 'react-native'

const {height,width}=Dimensions.get('window')

const TypeBox=({setCtg,item,active}:{setCtg:any,item:string,active:string})=>{
    return (
        <TouchableOpacity onPress={()=>setCtg(item)} style={[{flexDirection:'row',alignItems:'center',paddingHorizontal:10,borderRadius:6,height:height*0.044,marginRight:12},item==active?{backgroundColor:'#5C3EBC'}:{borderColor:'#F0EFF7',borderWidth:1.3}]}>
            <Text style={[{fontSize:12,color:'#7849F7',fontWeight:'600'},item==active&&{color:'white'}]}>{item}</Text>
        </TouchableOpacity>
    )
}
function index() {

    const [category,setCategory]=useState<String>("It goes well together!")
  return (
   <ScrollView style={{width:'100%',height:height*0.072,backgroundColor:'white',flexDirection:'row',paddingVertical:height*0.014,paddingHorizontal:12,borderBottomColor:'lightgrey',borderBottomWidth:1}} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
        {["It goes well together!","Stick","Box","Cone","Bar"].map((item)=>(
            <TypeBox setCtg={setCategory} item={item} active={category} />
        ))}
   </ScrollView>
  )
}

export default index
