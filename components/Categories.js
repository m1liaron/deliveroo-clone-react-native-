import React from "react"
import { View, Text, ScrollView } from "react-native"
import { CategoryCard } from "./CategoryCard"

export default Categories = () => {
    return (
        <ScrollView 
            contentContainerStyle={{
                paddingHorizontal:15,
                paddingTop:10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            >
            {/* Categorie Card */}

            <CategoryCard imgUrl={'https://th.bing.com/th/id/OIP.jeIEITMsvyGpxm4r-jyRqwHaFE?pid=ImgDet&rs=1'} title="Testing 1"/>
            <CategoryCard imgUrl={'https://th.bing.com/th/id/OIP.jeIEITMsvyGpxm4r-jyRqwHaFE?pid=ImgDet&rs=1'} title="Testing 2"/>
            <CategoryCard imgUrl={'https://th.bing.com/th/id/OIP.jeIEITMsvyGpxm4r-jyRqwHaFE?pid=ImgDet&rs=1'} title="Testing 3"/>
            <CategoryCard imgUrl={'https://th.bing.com/th/id/OIP.jeIEITMsvyGpxm4r-jyRqwHaFE?pid=ImgDet&rs=1'} title="Testing 1"/>
            <CategoryCard imgUrl={'https://th.bing.com/th/id/OIP.jeIEITMsvyGpxm4r-jyRqwHaFE?pid=ImgDet&rs=1'} title="Testing 2"/>
            <CategoryCard imgUrl={'https://th.bing.com/th/id/OIP.jeIEITMsvyGpxm4r-jyRqwHaFE?pid=ImgDet&rs=1'} title="Testing 3"/>
        </ScrollView>
    )
}