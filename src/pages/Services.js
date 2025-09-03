import React from 'react'

// Import your images
import Leadership from './assets/leadership.jpg'
import Team from './assets/team.jpg'
import Speaking from './assets/speaking.png'
import Coaching from './assets/coaching.jpg'


function ServiceCard({title, children, img}) {
  return (
    <div className="card span-6">
      <h4 style={{marginTop:0}}>{title}</h4>
      <p>{children}</p>
      <img src={img} alt={title} className="service-photo" />
    </div>
  )
}

export default function Services(){
  return (
    <main className="section">
      <div className="container">
        <div className="kicker">Services</div>
        <h2>Leadership & Professional Development</h2>
        <p className="small">
          We offer tailored, instructor-led leadership and professional development training to strengthen your teams, cultivate lasting client relationships, and accelerate organizational success.
        </p>
        <div className="grid">
          <ServiceCard title="Leadership & Management" img={Leadership}>
            Instructor-led leadership and professional development training that strengthens teams and accelerates organizational success.
          </ServiceCard>
          <ServiceCard title="Team Development" img={Team}>
            Build trust, increase collaboration, and cultivate purpose-driven cultures where people thrive.<br/><br/> 
          </ServiceCard>
          <ServiceCard title="Personal & Professional Coaching" img={Coaching}>
            Personalized coaching to help individuals break through limiting beliefs, own their voice, and lead with confidence from the inside out.
          </ServiceCard>
          <ServiceCard title="Transformational Speaking" img={Speaking}>
            Rooted in truth and transformation, our speaking empowers people to see beyond their current circumstances and step boldly into who they’re becoming.
          </ServiceCard>
        </div>
      </div>
    </main>
  )
}
