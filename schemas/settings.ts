
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text'
    }),
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image'
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
        { name: 'twitter', title: 'Twitter', type: 'url' },
        { name: 'facebook', title: 'Facebook', type: 'url' },
        { name: 'email', title: 'Contact Email', type: 'email' }
      ]
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'email', title: 'Email', type: 'email' },
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'address', title: 'Address', type: 'text' }
      ]
    }),
    defineField({
      name: 'analytics',
      title: 'Analytics',
      type: 'object',
      fields: [
        { name: 'googleAnalyticsId', title: 'Google Analytics ID', type: 'string' },
        { name: 'googleTagManagerId', title: 'Google Tag Manager ID', type: 'string' }
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings'
      }
    }
  }
})
