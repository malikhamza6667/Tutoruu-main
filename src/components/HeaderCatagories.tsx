import React,{useState} from "react";
import {View ,Text,TouchableOpacity,FlatList, ScrollView } from 'react-native'
import Colors from "../../assets/Colors";

interface Props{
    data: any,
    padding?:string|undefined
    backgroundColor?: string|undefined
    activeBackgroundColor?: string|undefined
    activeTitleColor?: string|undefined
   
    BorderRadius?:string
}

interface ListProps{
id: number
name:string
}

const HeaderCatagories:React.FC<Props>=({data,padding,backgroundColor,BorderRadius,activeBackgroundColor,activeTitleColor})=>{
    let touchableStyles="  py-2 mx-1 rounded-full "
    if(BorderRadius){
touchableStyles='py-1 mx-1 rounded-xl'
    }
    
    const[selectedIndex,setSelectedIndex]=useState(0)
    const[backgroundColour,setBackGroundColour]=useState('')
    if(selectedIndex==-1){
        setSelectedIndex(0)
       }


       return(
<View >
    <ScrollView contentContainerStyle={{padding:3,flexDirection:'row'}}>
    {
    data.map((item:{name:string,id:number},index:number)=>{
        return(
    
            <TouchableOpacity 
            onPress={()=>{
            setSelectedIndex(index)
            }}
            
            className={touchableStyles}
            style={{backgroundColor: backgroundColor ? Colors.lightorange: index==selectedIndex ? activeBackgroundColor?activeBackgroundColor:  Colors.orange:'#F2F4F5',
            paddingHorizontal: padding? padding: 15,
            }}
            
            >
                <Text
                style={{fontFamily:'PoppinsMedium',color: backgroundColor ? Colors.orange: selectedIndex ==index ? activeTitleColor?activeTitleColor: Colors.white:Colors.black,
            textTransform:'uppercase'}}
                >{item.name}</Text>
            </TouchableOpacity>
        )
    })
  }
    </ScrollView>
        {/* <FlatList
       
        data={data}
      horizontal
        renderItem={({item,index}:{item:ListProps,index:number})=>{
           
return(
    
    <TouchableOpacity 
    onPress={()=>{
    setSelectedIndex(index)
    }}
    
    className={touchableStyles}
    style={{backgroundColor: backgroundColor ? Colors.lightorange: index==selectedIndex ?  Colors.orange:Colors.gray,
    paddingHorizontal: padding? padding: 15,
    }}
    
    >
        <Text
        style={{fontFamily:'PoppinsMedium',color: backgroundColor ? Colors.orange: selectedIndex ==index ?Colors.white:Colors.black,
    textTransform:'uppercase'}}
        >{item.name}</Text>
    </TouchableOpacity>
)
        }}
        keyExtractor={(item)=>{return item.id.toString()}}
        /> */}
  
  
</View>
    )
}

export default HeaderCatagories