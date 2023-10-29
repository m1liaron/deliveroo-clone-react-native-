import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"

export const CategoryCard = ({imgUrl, title}) => {
    return (
        <TouchableOpacity className='relative m-1'>
            <Image source={{
               uri: imgUrl
            }}
            className='h-20 w-20 rounded'
            />
            <Text className='absolute bottom-1 left-1 text-white font-sold'>{title}</Text>
        </TouchableOpacity>
    )
}