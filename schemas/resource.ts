
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'resourceType',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          { title: 'Toolkit', value: 'toolkit' },
          { title: 'Guide', value: 'guide' },
          { title: 'Template', value: 'template' },
          { title: 'Research', value: 'research' },
          { title: 'Case Study', value: 'case-study' }
        ]
      }
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Curriculum Development', value: 'curriculum' },
          { title: 'Assessment Tools', value: 'assessment' },
          { title: 'Digital Resources', value: 'digital' },
          { title: 'Policy Frameworks', value: 'policy' },
          { title: 'Training Materials', value: 'training' }
        ]
      }
    }),
    defineField({
      name: 'subcategory',
      title: 'Subcategory',
      type: 'string'
    }),
    defineField({
      name: 'accessType',
      title: 'Access Type',
      type: 'string',
      options: {
        list: [
          { title: 'Free', value: 'free' },
          { title: 'Members Only', value: 'members' },
          { title: 'Premium', value: 'premium' }
        ]
      },
      initialValue: 'free'
    }),
    defineField({
      name: 'fileInfo',
      title: 'File Information',
      type: 'object',
      fields: [
        { name: 'fileType', title: 'File Type', type: 'string' },
        { name: 'fileSize', title: 'File Size', type: 'string' },
        { name: 'downloadUrl', title: 'Download URL', type: 'url' },
        { name: 'previewUrl', title: 'Preview URL', type: 'url' }
      ]
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'object',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'profileImage', title: 'Profile Image', type: 'image' }
      ]
    }),
    defineField({
      name: 'contributors',
      title: 'Contributors',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' }
          ]
        }
      ]
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: { hotspot: true }
        }
      ]
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'downloadCount',
      title: 'Download Count',
      type: 'number',
      initialValue: 0
    }),
    defineField({
      name: 'featured',
      title: 'Featured Resource',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'license',
      title: 'License',
      type: 'object',
      fields: [
        { name: 'type', title: 'License Type', type: 'string' },
        { name: 'url', title: 'License URL', type: 'url' },
        { name: 'attribution', title: 'Attribution', type: 'string' }
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'resourceType',
      media: 'thumbnail',
    },
  },
})
