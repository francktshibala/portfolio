'use client'

import { useState } from 'react'
import { Container, Heading, Text, Card, CardContent, Button, Input, Textarea } from '@/components/ui'
import { createContactSchema, CreateContactInput } from '@/lib/validations'
import { z } from 'zod'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ContactFormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value
    setFormData(prev => ({ ...prev, [field]: value }))
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    try {
      createContactSchema.parse(formData)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: ContactFormErrors = {}
        error.errors.forEach(err => {
          const field = err.path[0] as keyof ContactFormErrors
          newErrors[field] = err.message
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const success = Math.random() > 0.2
      
      if (success) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label="Name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleInputChange('name')}
          error={errors.name}
          variant={errors.name ? 'error' : 'default'}
          required
        />
        
        <Input
          label="Email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleInputChange('email')}
          error={errors.email}
          variant={errors.email ? 'error' : 'default'}
          required
        />
      </div>

      <Input
        label="Subject"
        placeholder="What's this about?"
        value={formData.subject}
        onChange={handleInputChange('subject')}
        error={errors.subject}
        variant={errors.subject ? 'error' : 'default'}
        helperText="Optional - helps me understand your inquiry better"
      />

      <Textarea
        label="Message"
        placeholder="Tell me about your project, question, or how I can help..."
        value={formData.message}
        onChange={handleInputChange('message')}
        error={errors.message}
        variant={errors.message ? 'error' : 'default'}
        rows={6}
        required
      />

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <Text className="text-green-800 font-medium">
              Message sent successfully! I'll get back to you soon.
            </Text>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <Text className="text-red-800 font-medium">
              Something went wrong. Please try again or contact me directly.
            </Text>
          </div>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        loading={isSubmitting}
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

export default function ContactPage() {
  const contactInfo = [
    {
      title: 'Email',
      value: 'hello@yourname.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: 'mailto:hello@yourname.com'
    },
    {
      title: 'Phone',
      value: '+1 (555) 123-4567',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      href: 'tel:+15551234567'
    },
    {
      title: 'Location',
      value: 'San Francisco, CA',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Response Time',
      value: 'Within 24 hours',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  const faqs = [
    {
      question: "What's your typical response time?",
      answer: "I aim to respond to all inquiries within 24 hours, usually much sooner during business hours."
    },
    {
      question: "Do you work with clients remotely?",
      answer: "Yes! I work with clients worldwide and have experience managing projects remotely with excellent communication and delivery."
    },
    {
      question: "What information should I include in my project inquiry?",
      answer: "Please include your project goals, timeline, budget range, and any specific requirements or technologies you have in mind."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, I offer a free 30-minute consultation to discuss your project needs and see if we're a good fit."
    }
  ]

  return (
    <Container className="py-16">
      <nav className="mb-6">
        <div className="flex items-center text-sm text-[var(--color-text-secondary)]">
          <a href="/" className="hover:text-[var(--color-text-primary)] transition-colors">
            Home
          </a>
          <span className="mx-2">/</span>
          <span className="text-[var(--color-text-primary)]">Contact</span>
        </div>
      </nav>

      <div className="mb-12">
        <Heading level={1} className="mb-4">Get In Touch</Heading>
        <Text size="lg" className="text-[var(--color-text-secondary)] max-w-2xl">
          Ready to start your next project? I'd love to hear about it. 
          Send me a message and I'll get back to you as soon as possible.
        </Text>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Heading level={2} className="mb-6">Send Me a Message</Heading>
          <ContactForm />
        </div>

        <div>
          <div className="mb-8">
            <Heading level={2} className="mb-6">Contact Information</Heading>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 text-blue-600">
                      {info.icon}
                    </div>
                    <div>
                      <Text className="font-medium text-gray-900">{info.title}</Text>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <Text className="text-gray-600">{info.value}</Text>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Heading level={2} className="mb-6">Frequently Asked Questions</Heading>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-4">
                  <Heading level={4} className="mb-2 text-gray-900">
                    {faq.question}
                  </Heading>
                  <Text size="sm" className="text-gray-600">
                    {faq.answer}
                  </Text>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 p-8 bg-gray-50 rounded-lg">
        <div className="text-center">
          <Heading level={3} className="mb-4">Prefer a Different Way to Connect?</Heading>
          <Text className="text-gray-600 mb-6">
            I'm also available on various platforms. Choose whatever works best for you!
          </Text>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/yourprofile" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/yourusername" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}