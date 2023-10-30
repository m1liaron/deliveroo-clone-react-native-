import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  icon,
  fields: [
    { 
      name:"name",
      type:"string",
      title:"Category name",
      validation: (Rule) => Rule.required(),
    },
    {
      name:"image",
      type:"image",
      title:"Image of Category"
    }
  ]
})
