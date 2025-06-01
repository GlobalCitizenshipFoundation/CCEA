
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'memberType',
      title: 'Member Type',
      type: 'string',
      options: {
        list: [
          { title: 'Institutional', value: 'institutional' },
          { title: 'Associate', value: 'associate' },
          { title: 'Individual', value: 'individual' }
        ]
      }
    }),
    defineField({
      name: 'membershipLevel',
      title: 'Membership Level',
      type: 'string',
      options: {
        list: [
          { title: 'Full', value: 'full' },
          { title: 'Associate', value: 'associate' },
          { title: 'Honorary', value: 'honorary' }
        ]
      }
    }),
    defineField({
      name: 'title',
      title: 'Title/Role',
      type: 'string'
    }),
    defineField({
      name: 'logo',
      title: 'Logo/Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'bio',
      title: 'Full Bio',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        { name: 'city', title: 'City', type: 'string' },
        { name: 'country', title: 'Country', type: 'string' },
        { name: 'region', title: 'Region', type: 'string' }
      ]
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'email', title: 'Email', type: 'email' },
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'website', title: 'Website', type: 'url' }
      ]
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
        { name: 'twitter', title: 'Twitter', type: 'url' },
        { name: 'facebook', title: 'Facebook', type: 'url' }
      ]
    }),
    defineField({
      name: 'memberSince',
      title: 'Member Since',
      type: 'date',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'achievements',
      title: 'Key Achievements',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'contributions',
      title: 'Contributions to CCEA',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    }),
    defineField({
      name: 'featured',
      title: 'Featured Member',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'publicProfile',
      title: 'Public Profile',
      type: 'boolean',
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'memberType',
      media: 'logo',
    },
  },
})
