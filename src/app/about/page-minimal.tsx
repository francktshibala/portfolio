export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <nav className="mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <a href="/" className="hover:text-gray-900 transition-colors">
              Home
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">About</span>
          </div>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            I'm a passionate full-stack developer with over 5 years of experience 
            creating innovative web solutions. I specialize in modern JavaScript frameworks, 
            scalable backend architectures, and delivering exceptional user experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4 mb-12">
          {[
            { label: 'Years of Experience', value: '5+' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Technologies Mastered', value: '20+' },
            { label: 'Happy Clients', value: '30+' }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold mb-6">Professional Journey</h2>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-4 h-4 rounded-full bg-green-500 border-4 border-white shadow" />
                  <div className="w-0.5 h-16 bg-gray-300 mt-2" />
                </div>
                <div className="flex-1 pb-8">
                  <h4 className="text-xl font-semibold mb-1">Senior Full Stack Developer</h4>
                  <p className="font-medium text-blue-600">Tech Company</p>
                  <p className="text-sm text-gray-500">Remote</p>
                  <p className="text-sm text-gray-600 mt-2">Jan 2022 - Present</p>
                  <div className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mt-1">
                    Current
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Skills & Expertise</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
                <div className="space-y-3">
                  {[
                    { name: 'React/Next.js', level: 95 },
                    { name: 'TypeScript', level: 90 },
                    { name: 'Tailwind CSS', level: 85 }
                  ].map((skill, idx) => (
                    <div key={idx} className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-gray-100 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">My Approach</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Clean Code</h4>
              <p className="text-sm text-gray-700">
                I believe in writing maintainable, well-documented code that stands the test of time.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-blue-600">User-Centric</h4>
              <p className="text-sm text-gray-700">
                Every decision is made with the end user in mind, ensuring intuitive and accessible experiences.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Continuous Learning</h4>
              <p className="text-sm text-gray-700">
                Technology evolves rapidly, and I stay current with the latest tools and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}