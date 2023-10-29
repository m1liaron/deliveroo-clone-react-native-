import React, { useLayoutEffect } from 'react'
import { 
  Text, 
  SafeAreaView, 
  Image, 
  View,
  TextInput,
  ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { 
    AdjustmentsHorizontalIcon, 
    AdjustmentsVerticalIcon, 
    ChevronDownIcon, 
    MagnifyingGlassIcon,
    UserIcon,
  } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow  from '../components/FeaturedRow'

export const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() =>{
        navigation.setOptions({
          headerShown: false,
        })
    }, [])

    return (
      <SafeAreaView className='pt-7 bg-white'>

          <View className='flex-row pb-3 items-center mx-4 space-x-2 '>
            <Image 
              source={{
                uri:'https://links.papareact.com/wru',
              }}
              className='h-7 w-7 bg-gray-300 p-4 rounded-full'
            />

            <View className ="flex-1">
              <Text className='font-bold text-gray-400 text-xs'>
                Deliver now!
              </Text>
              <Text className='font-bold text-xl'>Current Location
                <ChevronDownIcon size={20} color="#00CCBB"/>
              </Text>
            </View>

            <UserIcon size={35} color="#00CCBB"/>
          </View>
          {/* search */}
              <View className='flex-row items-center space-x-2 pb-2 mx-4 px-4'>
                <View className='flex-row flex-1 space-x-2 bg-gray-100 p-3'>
                  <MagnifyingGlassIcon size={20} color="gray"/>
                  <TextInput 
                    placeholder="Restaraunts and cuisines"
                    keyboardType="default"
                  />
                </View>
                <AdjustmentsVerticalIcon color='#00CCBB'/>
              </View>

              {/* Body */}

              <ScrollView 
                className='bg-gray-100'
                contentContainerStyle={{
                  paddingBottom:100
                }}
              >
                {/* Categories Component */}
                  <Categories/>
                {/*Featued Rows*/}
                <FeaturedRow 
                  id='123'
                  title="Featured"
                  description="Paid placements from our partners"
                />
                <FeaturedRow 
                  id='1234'
                  title="Tasty discounts"
                  description="Paid placements from our partners"
                />
                <FeaturedRow 
                  id='12345'
                  title="Offers near you!"
                  description="Paid placements from our partners"
                />
              </ScrollView>

      </SafeAreaView>
    )
}
