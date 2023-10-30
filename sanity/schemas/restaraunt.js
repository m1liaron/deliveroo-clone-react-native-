import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md'

export default defineType({
  name: 'restaraunt',
  title: 'Restaraunt',
  type: 'document',
  icon,
  fields: [
    {
      name:"name",
      type:"string",
      title:'Restaraunt name',
      validation: (Rule) => Rule.max(200),
    },
    {
      name:"image",
      type:"image",
      title:'Image of the Restaraunt',
    },
    {
      name:"lat",
      type:"number",
      title:'Longitude of the Restaraunt',
    },
    {
      name:"long",
      type:"number",
      title:'Restaraunt address',
    },
    {
      name:"adress",
      type:"string",
      title:'Enter a Rating from (1-5 Start)',
      validation: (Rule) => 
      Rule.required()
                    .min(1)
                    .max(5)
                    .error("Please enter a value between 1 and 5")
    },
    {
      name:"type",
      title:"Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type:"category" }]
    },
    {
      name:"dishes",
      type:"array",
      title:"Dishes",
      of:[{ type: "reference", to: [{ type:"Dish" }] }],
    },
  ],
});