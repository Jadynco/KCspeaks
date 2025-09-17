import React, { useEffect, useRef } from 'react';
import t1 from './assets/testimonial1.mp4';
import t2 from './assets/testimonial2.mp4';
import t3 from './assets/testimonial3.mp4';

import { Link } from 'react-router-dom';

export default function Home(){

    const videoRefs = useRef([]);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      // Sort entries left-to-right
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.target.dataset.index - b.target.dataset.index);

      // Pause all
      videoRefs.current.forEach((video) => video && video.pause());

      // Play the first visible
      if (visible.length > 0) {
        visible[0].target.play();
      }
    },
    { threshold: 0.5 } // at least 50% visible
  );

  videoRefs.current.forEach((video) => {
    if (video) observer.observe(video);
  });

  return () => {
    videoRefs.current.forEach((video) => {
      if (video) observer.unobserve(video);
    });
  };
}, []);


  return (
    <main>
      <div className='hero_background'></div>
      <div class="hero_overlay"></div>
      <section className="hero">
        <div className="container">
          <p className="kicker">Kenyatta Speaks</p>
          <h1>Igniting Change From the Inside Out</h1>
          <p style={{marginTop:'12px'}}>Mental Fitness • Emotional Intelligence • Mindset Development • Habit Formation.</p>
          <div style={{display:'flex', gap:'12px', marginTop:'24px'}}>
            <Link to="/services" className="btn">Explore Services</Link>
            <Link to="/about" className="nav-link active" style={{padding:'.65rem 1rem'}}>About Us</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid">
            <div className="card span-6">
              <div className="kicker">Coaching & Training</div>
              <h3>Practical tools for real transformation</h3>
              <p>I support youth, adults, and organizations in discovering their full potential by increasing awareness, shifting limiting beliefs, and developing practical tools for change.</p>
            </div>
            <div className="card span-6">
              <div className="kicker">Speaking</div>
              <h3>Rooted in truth and transformation</h3>
              <p>My speaking empowers people to see beyond their current circumstances and step boldly into who they’re becoming.</p>
            </div>
            <div className="card span-4">
              <h4>Leadership & Management</h4>
              <p>Instructor-led leadership and professional development training that strengthens teams and accelerates success.</p>
            </div>
            <div className="card span-4">
              <h4>Team Development</h4>
              <p>Build trust, increase collaboration, and cultivate purpose‑driven cultures where people thrive.</p>
            </div>
            <div className="card span-4">
              <h4>Coaching Development</h4>
              <p>Personal and professional coaching that helps individuals own their voice and lead with confidence from the inside out.</p>
            </div>
          </div>
        </div>
      </section>

       <section className="section" id="testimonials">
        <div className="container">
          <div className="kicker">Testimonials</div>
          <h3>What people are saying</h3>

        <div
  style={{
    display: "flex",
    flexDirection: "row",
    gap: "24px",
    alignItems: "center",
  }}
>
  {[t1, t2, t3].map((src, i) => (
    <div key={i} className="video-wrap">
      <video
        ref={(el) => (videoRefs.current[i] = el)}
        data-index={i}
        src={src}
        className="testimonial-video"
        controls
        muted
        playsInline
        preload="metadata"
        onEnded={() => {
          if (videoRefs.current[i + 1]) {
            videoRefs.current[i + 1].play();
          }
          
        }}
      />
    </div>
  ))}
</div>


        </div>
      </section>

    </main>
  )
}
