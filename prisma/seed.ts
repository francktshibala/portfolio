import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.experienceSkill.deleteMany()
  await prisma.experience.deleteMany()
  await prisma.skill.deleteMany()
  await prisma.project.deleteMany()
  await prisma.contact.deleteMany()
  await prisma.blog.deleteMany()

  const skills = await prisma.skill.createMany({
    data: [
      {
        name: 'React',
        level: 5,
        category: 'FRONTEND',
        description: 'Modern React with hooks, context, and performance optimization',
        yearsOfExperience: 4,
        certified: true,
        featured: true
      },
      {
        name: 'TypeScript',
        level: 5,
        category: 'FRONTEND',
        description: 'Type-safe JavaScript with advanced patterns',
        yearsOfExperience: 3,
        certified: false,
        featured: true
      },
      {
        name: 'Next.js',
        level: 5,
        category: 'FRONTEND',
        description: 'Full-stack React framework with SSR/SSG',
        yearsOfExperience: 2,
        certified: false,
        featured: true
      },
      {
        name: 'Node.js',
        level: 4,
        category: 'BACKEND',
        description: 'Server-side JavaScript with Express and NestJS',
        yearsOfExperience: 3,
        certified: false,
        featured: true
      },
      {
        name: 'PostgreSQL',
        level: 4,
        category: 'DATABASE',
        description: 'Relational database design and optimization',
        yearsOfExperience: 2,
        certified: false,
        featured: false
      },
      {
        name: 'Prisma',
        level: 4,
        category: 'DATABASE',
        description: 'Modern database toolkit and ORM',
        yearsOfExperience: 1,
        certified: false,
        featured: false
      },
      {
        name: 'Docker',
        level: 3,
        category: 'DEVOPS',
        description: 'Containerization and orchestration',
        yearsOfExperience: 2,
        certified: false,
        featured: false
      },
      {
        name: 'AWS',
        level: 3,
        category: 'DEVOPS',
        description: 'Cloud infrastructure and services',
        yearsOfExperience: 1,
        certified: false,
        featured: false
      },
      {
        name: 'Tailwind CSS',
        level: 5,
        category: 'FRONTEND',
        description: 'Utility-first CSS framework',
        yearsOfExperience: 2,
        certified: false,
        featured: true
      },
      {
        name: 'Figma',
        level: 3,
        category: 'DESIGN',
        description: 'UI/UX design and prototyping',
        yearsOfExperience: 2,
        certified: false,
        featured: false
      }
    ]
  })

  const projects = await prisma.project.createMany({
    data: [
      {
        title: 'Elite Portfolio System',
        description: 'Modern portfolio website with advanced component library',
        longDescription: 'A comprehensive portfolio system built with Next.js 15, TypeScript, and Tailwind CSS. Features a complete design system with 15+ reusable components, database integration with Prisma, and deployment automation.',
        technologies: JSON.stringify(['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Framer Motion']),
        githubUrl: 'https://github.com/username/elite-portfolio',
        liveUrl: 'https://portfolio-mu-two-93.vercel.app',
        imageUrl: '/projects/portfolio-preview.jpg',
        images: JSON.stringify(['/projects/portfolio-1.jpg', '/projects/portfolio-2.jpg']),
        featured: true,
        status: 'IN_PROGRESS',
        startDate: new Date('2024-07-01'),
        category: 'Full-Stack',
        priority: 1
      },
      {
        title: 'E-Commerce Platform',
        description: 'Scalable e-commerce solution with modern architecture',
        longDescription: 'A full-featured e-commerce platform with inventory management, payment processing, and admin dashboard. Built with microservices architecture for scalability.',
        technologies: JSON.stringify(['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker']),
        githubUrl: 'https://github.com/username/ecommerce-platform',
        liveUrl: 'https://ecommerce-demo.vercel.app',
        imageUrl: '/projects/ecommerce-preview.jpg',
        images: JSON.stringify(['/projects/ecommerce-1.jpg', '/projects/ecommerce-2.jpg']),
        featured: true,
        status: 'COMPLETED',
        startDate: new Date('2024-03-01'),
        endDate: new Date('2024-06-15'),
        category: 'Full-Stack',
        priority: 2
      },
      {
        title: 'Task Management App',
        description: 'Collaborative task management with real-time updates',
        longDescription: 'A modern task management application with real-time collaboration, drag-and-drop interface, and team management features.',
        technologies: JSON.stringify(['React', 'Socket.io', 'MongoDB', 'Express', 'Material-UI']),
        githubUrl: 'https://github.com/username/task-manager',
        liveUrl: 'https://task-manager-demo.vercel.app',
        imageUrl: '/projects/taskmanager-preview.jpg',
        featured: false,
        status: 'COMPLETED',
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-02-28'),
        category: 'Frontend',
        priority: 3
      },
      {
        title: 'Weather Dashboard',
        description: 'Beautiful weather dashboard with location-based forecasts',
        longDescription: 'A responsive weather dashboard that provides detailed weather information, forecasts, and interactive maps using various weather APIs.',
        technologies: JSON.stringify(['Vue.js', 'TypeScript', 'Chart.js', 'OpenWeather API']),
        githubUrl: 'https://github.com/username/weather-dashboard',
        liveUrl: 'https://weather-dashboard-demo.vercel.app',
        imageUrl: '/projects/weather-preview.jpg',
        featured: false,
        status: 'COMPLETED',
        startDate: new Date('2023-11-01'),
        endDate: new Date('2023-12-15'),
        category: 'Frontend',
        priority: 4
      }
    ]
  })

  const experiences = await prisma.experience.createMany({
    data: [
      {
        title: 'Senior Full-Stack Developer',
        company: 'Tech Innovators Inc.',
        location: 'San Francisco, CA',
        description: 'Led development of scalable web applications using React, Node.js, and PostgreSQL. Mentored junior developers and established best practices for code quality and testing.',
        startDate: new Date('2023-01-01'),
        current: true,
        type: 'FULL_TIME',
        logoUrl: '/companies/tech-innovators.jpg',
        companyUrl: 'https://techinnovators.com',
        achievements: JSON.stringify([
          'Increased application performance by 40% through optimization',
          'Led a team of 5 developers on major product features',
          'Implemented CI/CD pipeline reducing deployment time by 60%',
          'Established testing standards achieving 95% code coverage'
        ])
      },
      {
        title: 'Frontend Developer',
        company: 'StartupXYZ',
        location: 'New York, NY',
        description: 'Developed responsive web applications using React and TypeScript. Collaborated with designers to implement pixel-perfect UIs and improved user experience.',
        startDate: new Date('2022-03-01'),
        endDate: new Date('2022-12-31'),
        current: false,
        type: 'FULL_TIME',
        logoUrl: '/companies/startupxyz.jpg',
        companyUrl: 'https://startupxyz.com',
        achievements: JSON.stringify([
          'Built component library used across 5 different products',
          'Reduced bundle size by 30% through code splitting',
          'Implemented accessibility features meeting WCAG 2.1 standards',
          'Collaborated with UX team to improve user engagement by 25%'
        ])
      },
      {
        title: 'Full-Stack Developer',
        company: 'Digital Solutions Ltd.',
        location: 'Remote',
        description: 'Worked on various client projects building custom web applications. Specialized in e-commerce solutions and content management systems.',
        startDate: new Date('2021-06-01'),
        endDate: new Date('2022-02-28'),
        current: false,
        type: 'CONTRACT',
        logoUrl: '/companies/digital-solutions.jpg',
        companyUrl: 'https://digitalsolutions.com',
        achievements: JSON.stringify([
          'Delivered 8 client projects on time and within budget',
          'Increased client satisfaction scores by 35%',
          'Developed reusable templates reducing development time by 50%',
          'Mentored 3 junior developers on best practices'
        ])
      }
    ]
  })

  const blogs = await prisma.blog.createMany({
    data: [
      {
        title: 'Building Modern React Applications with TypeScript',
        slug: 'modern-react-typescript',
        excerpt: 'Learn how to build scalable React applications with TypeScript, focusing on best practices and performance optimization.',
        content: '# Building Modern React Applications with TypeScript\n\nTypeScript has become an essential tool for React development...',
        published: true,
        featured: true,
        imageUrl: '/blog/react-typescript.jpg',
        tags: JSON.stringify(['React', 'TypeScript', 'JavaScript', 'Frontend']),
        readTime: 8,
        views: 1250,
        likes: 89,
        publishedAt: new Date('2024-06-15')
      },
      {
        title: 'Optimizing Database Performance with Prisma',
        slug: 'database-performance-prisma',
        excerpt: 'Discover advanced techniques for optimizing database queries and improving application performance using Prisma ORM.',
        content: '# Optimizing Database Performance with Prisma\n\nDatabase performance is crucial for web applications...',
        published: true,
        featured: false,
        imageUrl: '/blog/prisma-performance.jpg',
        tags: JSON.stringify(['Prisma', 'Database', 'PostgreSQL', 'Performance']),
        readTime: 12,
        views: 890,
        likes: 67,
        publishedAt: new Date('2024-05-20')
      },
      {
        title: 'The Future of Web Development: Trends to Watch',
        slug: 'future-web-development-trends',
        excerpt: 'Explore upcoming trends in web development and how they will shape the future of building web applications.',
        content: '# The Future of Web Development: Trends to Watch\n\nWeb development is constantly evolving...',
        published: false,
        featured: false,
        imageUrl: '/blog/web-trends.jpg',
        tags: JSON.stringify(['Web Development', 'Trends', 'Technology', 'Future']),
        readTime: 10,
        views: 0,
        likes: 0
      }
    ]
  })

  console.log('Database seeded successfully!')
  console.log(`Created ${skills.count} skills`)
  console.log(`Created ${projects.count} projects`)
  console.log(`Created ${experiences.count} experiences`)
  console.log(`Created ${blogs.count} blog posts`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })