export default {
    title: 'featured',
    name: 'Featured Menu categories',
    type: 'document',
    fields: [
      {
        name:"name",
        type:"string",
        title:'Featured Category name',
        validation: (Rule) => Rule.required(),
      },
      {
        name:"short_description",
        type:"string",
        title:'Short Description',
        validation: (Rule) => Rule.max(200),
      },
      {
        name:"restaraunts",
        type:"array",
        title:'Restaraunts',
        of: [{type:'reference', to: [{type:
        "restaraunt"}] }],
      }
    ]
  }