
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
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
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Conference', value: 'conference' },
          { title: 'Workshop', value: 'workshop' },
          { title: 'Webinar', value: 'webinar' },
          { title: 'Training', value: 'training' },
          { title: 'Networking', value: 'networking' }
        ]
      }
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'timezone',
      title: 'Timezone',
      type: 'string',
      initialValue: 'Europe/Brussels'
    }),
    defineField({
      name: 'isVirtual',
      title: 'Virtual Event',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'virtualPlatform',
      title: 'Virtual Platform',
      type: 'string',
      hidden: ({ parent }) => !parent?.isVirtual
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      hidden: ({ parent }) => parent?.isVirtual,
      fields: [
        { name: 'venue', title: 'Venue', type: 'string' },
        { name: 'address', title: 'Address', type: 'string' },
        { name: 'city', title: 'City', type: 'string' },
        { name: 'country', title: 'Country', type: 'string' },
        {
          name: 'coordinates',
          title: 'Coordinates',
          type: 'object',
          fields: [
            { name: 'lat', title: 'Latitude', type: 'number' },
            { name: 'lng', title: 'Longitude', type: 'number' }
          ]
        }
      ]
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      name: 'capacity',
      title: 'Capacity',
      type: 'number'
    }),
    defineField({
      name: 'registered',
      title: 'Registered',
      type: 'number',
      initialValue: 0
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Ongoing', value: 'ongoing' },
          { title: 'Completed', value: 'completed' },
          { title: 'Cancelled', value: 'cancelled' }
        ]
      },
      initialValue: 'upcoming'
    }),
    defineField({
      name: 'registrationInfo',
      title: 'Registration Info',
      type: 'object',
      fields: [
        { name: 'registrationUrl', title: 'Registration URL', type: 'url' },
        { name: 'registrationDeadline', title: 'Registration Deadline', type: 'datetime' },
        { name: 'earlyBirdDeadline', title: 'Early Bird Deadline', type: 'datetime' },
        {
          name: 'fees',
          title: 'Fees',
          type: 'object',
          fields: [
            { name: 'regular', title: 'Regular Fee', type: 'number' },
            { name: 'earlyBird', title: 'Early Bird Fee', type: 'number' },
            { name: 'student', title: 'Student Fee', type: 'number' },
            { name: 'member', title: 'Member Fee', type: 'number' }
          ]
        }
      ]
    }),
    defineField({
      name: 'speakers',
      title: 'Speakers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'organization', title: 'Organization', type: 'string' },
            { name: 'bio', title: 'Bio', type: 'text' },
            { name: 'profileImage', title: 'Profile Image', type: 'image' }
          ]
        }
      ]
    }),
    defineField({
      name: 'organizers',
      title: 'Organizers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'email', title: 'Email', type: 'email' }
          ]
        }
      ]
    }),
    defineField({
      name: 'agenda',
      title: 'Agenda',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    }),
    defineField({
      name: 'materials',
      title: 'Event Materials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'type', title: 'Type', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
            { name: 'description', title: 'Description', type: 'text' }
          ]
        }
      ]
    }),
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true }
        }
      ]
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text' },
        { name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] }
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'eventType',
      media: 'featuredImage',
    },
  },
})
