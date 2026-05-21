import { motion } from 'framer-motion'
import {
  Briefcase,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone
} from 'lucide-react'

const socialLinks = {
  linkedin: 'https://linkedin.com/in/himanshu-kumar-009bbb1a8',
  github: 'https://github.com/your-github-username',
  email: 'mailto:himanshuk526@gmail.com',
  phone: 'tel:+919097722868'
}

const skills = [
  'JavaScript', 'Node.js', 'NestJS', 'Express.js', 'LoopBack 4', 'React.js', 'MongoDB', 'MySQL', 'Redis',
  'AWS', 'Git', 'GitHub', 'Socket.IO', 'Firebase', 'Agora', 'Stripe', 'Razorpay', 'REST APIs',
  'Microservices', 'Event-driven Architecture'
]

const experience = [
  {
    company: 'Monocept Consulting Pvt. Ltd.',
    role: 'Senior Software Developer',
    period: 'Jun 2024 – Present',
    achievements: [
      'Built scalable microservices handling 1M+ monthly API requests with 99.9% uptime.',
      'Reduced API response time by ~35% through caching and query optimization.',
      'Led backend architecture decisions for enterprise-grade insurance workflows.'
    ]
  },
  {
    company: 'Sparx IT Solutions Pvt. Ltd.',
    role: 'Software Developer',
    period: 'Jun 2022 – May 2024',
    achievements: [
      'Delivered 8+ production modules across fintech, e-commerce, and social products.',
      'Implemented payment and event-driven services, reducing failure rates by ~28%.',
      'Developed reusable Node.js service templates that improved delivery speed by 30%.'
    ]
  },
  {
    company: 'Mobikasa Pvt. Ltd.',
    role: 'Software Developer Trainee',
    period: 'Jan 2022 – Jun 2022',
    achievements: [
      'Built REST APIs and authentication modules for client applications.',
      'Contributed to production bug fixes and reduced issue turnaround time by 20%.'
    ]
  }
]

const projects = [
  {
    name: 'MPRO – Axis Max Life Insurance Platform',
    impact: 'Supported large-scale insurance operations with robust API orchestration and secure workflows.',
    stack: ['Node.js', 'NestJS', 'Microservices', 'Redis', 'MySQL']
  },
  {
    name: 'CARORBIS – Automotive E-Commerce',
    impact: 'Improved backend throughput and checkout reliability for multi-vendor commerce flows.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Razorpay']
  },
  {
    name: 'TIITLI – Real-Time Dating App',
    impact: 'Enabled real-time chat/calling experiences with low latency and high engagement.',
    stack: ['Node.js', 'Socket.IO', 'Agora', 'Firebase', 'MongoDB']
  },
  {
    name: 'MetalsBuy – B2B Metals Marketplace',
    impact: 'Streamlined B2B procurement through scalable APIs and event-driven order processing.',
    stack: ['Node.js', 'LoopBack 4', 'MySQL', 'AWS', 'REST APIs']
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 px-4 py-10 text-slate-100 md:px-8">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <motion.section variants={fadeUp} initial="hidden" animate="show" className="section-card">
          <p className="mb-2 text-sm text-brand-400">Available for freelance work</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Himanshu Kumar</h1>
          <p className="mt-3 text-lg text-slate-300">Senior Software Developer | Backend & Node.js Specialist</p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-slate-400">
            <span className="flex items-center gap-2"><MapPin size={16} /> Noida, India</span>
            <a href={socialLinks.phone} className="flex items-center gap-2 hover:text-brand-400"><Phone size={16} /> +91-9097722868</a>
            <a href={socialLinks.email} className="flex items-center gap-2 hover:text-brand-400"><Mail size={16} /> himanshuk526@gmail.com</a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={socialLinks.email} className="rounded-xl bg-brand-500 px-5 py-3 font-medium text-white shadow-glow transition hover:opacity-90">Hire Me</a>
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-medium hover:border-brand-400 hover:text-brand-400">
              <Download size={16} /> Download Resume
            </a>
          </div>
          <div className="mt-6 flex gap-4 text-slate-300">
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-brand-400"><Linkedin /></a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-brand-400"><Github /></a>
            <a href={socialLinks.email} className="hover:text-brand-400"><Mail /></a>
          </div>
        </motion.section>

        <section className="grid gap-8 md:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="section-card">
            <h2 className="mb-4 text-2xl font-semibold">About</h2>
            <p className="text-slate-300">
              Backend-focused software engineer with 4+ years of experience building scalable Node.js applications,
              REST APIs, microservices, and production-grade systems. Passionate about clean architecture,
              reliability, and shipping high-impact products.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="section-card">
            <h2 className="mb-4 text-2xl font-semibold">Technical Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-200">{skill}</span>
              ))}
            </div>
          </motion.div>
        </section>

        <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="section-card">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold"><Briefcase size={22} /> Work Experience</h2>
          <div className="relative border-l border-slate-700 pl-6">
            {experience.map((item) => (
              <div key={item.company} className="relative mb-8 last:mb-0">
                <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-brand-400" />
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="text-slate-300">{item.company}</p>
                <p className="mb-3 text-sm text-slate-400">{item.period}</p>
                <ul className="list-disc space-y-1 pl-5 text-slate-300">
                  {item.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="section-card">
          <h2 className="mb-6 text-2xl font-semibold">Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="mt-2 text-slate-300">{project.impact}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-md bg-slate-800 px-2 py-1 text-xs text-brand-400">{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <section className="grid gap-8 md:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="section-card">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold"><GraduationCap size={22} /> Education</h2>
            <p className="font-medium">B.Tech Computer Science & Engineering</p>
            <p className="text-slate-300">Dronacharya Group of Institutions, Greater Noida | AKTU University</p>
            <p className="text-slate-400">2018 – 2022</p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="section-card">
            <h2 className="mb-4 text-2xl font-semibold">Contact / Hire Me</h2>
            <p className="text-slate-300">
              Open to freelance opportunities in backend engineering, API development, microservices architecture,
              and production system optimization.
            </p>
            <a href={socialLinks.email} className="mt-5 inline-block rounded-xl bg-brand-500 px-5 py-3 font-medium text-white hover:opacity-90">
              Let&apos;s Work Together
            </a>
            <div className="mt-5 space-y-2 text-slate-300">
              <p><a className="hover:text-brand-400" href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
              <p><a className="hover:text-brand-400" href={socialLinks.github} target="_blank" rel="noreferrer">GitHub (update placeholder)</a></p>
              <p><a className="hover:text-brand-400" href={socialLinks.email}>himanshuk526@gmail.com</a></p>
              <p><a className="hover:text-brand-400" href={socialLinks.phone}>+91-9097722868</a></p>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

export default App
