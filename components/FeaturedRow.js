import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestarauntCard from "./RestarauntCard";

export default FeaturedRow = ({title, description}) => {
    return (
        <View>
            <View className='mt-4 flex-row items-center justify-between px-4'>
                <Text className='font-bold text-lg'>{title}</Text>
                <ArrowRightIcon color='#00CCBB'/>
            </View>
            <Text className='text-x text-gray-500 px-4'>{description}</Text>
        
            <ScrollView 
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 13,
                }}
                showsHorizontalScrollIndicator={false}
                className='pt-4'
            >
                {/* Restaraunt Card */}
                <RestarauntCard
                    id={123}
                    imgUrl={'https://th.bing.com/th/id/OIP.jeIEITMsvyGpxm4r-jyRqwHaFE?pid=ImgDet&rs=1'}
                    title={'Yo! Sushi'}
                    rating={4.5}
                    genre={"Japanese"}
                    address={"123 Main 51"}
                    short_description={"Description"}
                    disches={[]}
                    long={20}
                    lat={0}
                />
                <RestarauntCard
                    id={123}
                    imgUrl={'https://th.bing.com/th/id/OIP.jeIEITMsvyGpxm4r-jyRqwHaFE?pid=ImgDet&rs=1'}
                    title={'Yo! Sushi'}
                    rating={4.5}
                    genre={"Japanese"}
                    address={"123 Main 51"}
                    short_description={"Description"}
                    disches={[]}
                    long={20}
                    lat={0}
                />
                <RestarauntCard
                    id={123}
                    imgUrl={'https://th.bing.com/th/id/OIP.jeIEITMsvyGpxm4r-jyRqwHaFE?pid=ImgDet&rs=1'}
                    title={'Yo! Sushi'}
                    rating={4.5}
                    genre={"Japanese"}
                    address={"123 Main 51"}
                    short_description={"Description"}
                    disches={[]}
                    long={20}
                    lat={0}
                />
            </ScrollView>
        </View>
    )
}