const memories = [
  { date: "05 SEP", title: "The day we met", text: "One club day, a table full of parts, and a whole lot of curiosity. That first hello turned into our favorite team.", tag: "THE FIRST SPARK", photo: "Club day · the whole crew", color: "memory-peach" },
  { date: "SEP", title: "A team takes shape", text: "We traded names, big ideas, and sketches of what might be possible. Our first meeting made the club feel like ours.", tag: "IDEAS IN MOTION", photo: "First meeting · planning together", color: "memory-pink" },
  { date: "WEEK 01", title: "Let’s build something", text: "Twelve weeks of learning by doing began with the basics, a few tangled wires, and a lot of questions.", tag: "BUILD LOG · 001", photo: "First training day · getting started", color: "memory-yellow" },
];

function PhotoCard({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`photo-placeholder ${className}`} role="img" aria-label={`Photo placeholder: ${label}`}>
      <span className="photo-sun" aria-hidden="true">✳</span>
      <svg className="photo-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="7" y="9" width="34" height="30" rx="5" />
        <circle cx="18" cy="19" r="3" />
        <path d="m10 34 10-10 7 7 5-5 7 8" />
      </svg>
      <span className="photo-label">{label}</span>
      <span className="photo-hint">YOUR PHOTO GOES HERE</span>
    </div>
  );
}

function MemoryCard({ memory, index }: { memory: (typeof memories)[number]; index: number }) {
  return (
    <article className={`memory-card ${memory.color}`}>
      <div className="memory-photo-wrap">
        <PhotoCard label={memory.photo} className="memory-photo" />
        <span className="photo-index">0{index + 1} / MEMORY</span>
      </div>
      <div className="memory-copy">
        <div className="memory-meta"><span>{memory.tag}</span><time>{memory.date}</time></div>
        <h3>{memory.title}</h3>
        <p>{memory.text}</p>
        <span className="memory-scribble" aria-hidden="true">✳</span>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="recap-page" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Robotics Club recap home">
          <span className="wordmark-icon">R<span>✳</span></span>
          <span>ROBOTICS CLUB<small>KHÓA 18 · 2026</small></span>
        </a>
        <a className="header-link" href="#memories">OUR RECAP <span>↓</span></a>
      </header>

      <section className="hero section-wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="overline"><span className="sparkle">✳</span> A LITTLE LOOK BACK</p>
          <h1 id="hero-title">We came.<br />We built.<br /><span>We had a blast.</span></h1>
          <p className="hero-intro">Twelve weeks, one curious crew, and a whole bunch of memories worth keeping.</p>
          <a className="round-link" href="#memories">SCROLL THE STORY <span>↓</span></a>
        </div>
        <div className="hero-collage">
          <div className="hero-tape" aria-hidden="true" />
          <PhotoCard label="Add your favorite group photo" className="hero-photo" />
          <span className="hero-sticker">GOOD<br />TIMES! <b>♥</b></span>
          <span className="hero-caption">HKI · THE 2026 CREW</span>
        </div>
        <div className="hero-side-note" aria-hidden="true">MADE OF LITTLE MOMENTS</div>
      </section>

      <section className="intro-strip" aria-label="Recap introduction">
        <span>THE YEARBOOK</span><p>From our first hello to the final high-five.</p><span>SWIPE / SCROLL ↓</span>
      </section>

      <section className="memories-section section-wrap" id="memories">
        <div className="section-heading">
          <div><p className="overline">CHAPTERS 01—03</p><h2>It all started<br /><span>with a spark.</span></h2></div>
          <p className="section-aside">The first day. The first meeting. The first time we made something move.</p>
        </div>
        <div className="memory-list">
          {memories.map((memory, index) => <MemoryCard key={memory.title} memory={memory} index={index} />)}
        </div>
      </section>

      <section className="play-section">
        <div className="play-inner section-wrap">
          <div className="play-heading"><p className="overline">BREAK TIME, BEST TIME</p><h2>Serious fun.<br /><span>Seriously.</span></h2><p>We learned by trying, testing, laughing, and trying again. A few highlights from the chaos.</p></div>
          <div className="activity-grid">
            <article className="activity-card activity-coral"><PhotoCard label="Robot race snapshot" className="activity-photo" /><span className="activity-number">01</span><h3>Robot race</h3><p>Fast builds. Faster cheering.</p></article>
            <article className="activity-card activity-lilac"><PhotoCard label="Team challenge snapshot" className="activity-photo" /><span className="activity-number">02</span><h3>Team challenge</h3><p>One mission, many ideas.</p></article>
            <article className="activity-card activity-lemon"><PhotoCard label="Coding game snapshot" className="activity-photo" /><span className="activity-number">03</span><h3>Code &amp; create</h3><p>Debugging, but make it fun.</p></article>
          </div>
        </div>
      </section>

      <section className="finale-section section-wrap">
        <div className="finale-copy"><p className="overline">12 WEEKS · ONE TEAM</p><h2>Look what<br />we <span>made.</span></h2><p>Not just robots. New skills, big ideas, good friends—and the confidence to make the next thing even better.</p><div className="finale-stamp">COURSE<br />COMPLETE <span>✓</span></div></div>
        <div className="finale-photo-wrap"><PhotoCard label="Add a team celebration or graduation photo" className="finale-photo" /><span className="finale-doodle" aria-hidden="true">✳</span></div>
      </section>

      <section className="thankyou-section">
        <span className="thankyou-spark" aria-hidden="true">✳</span>
        <p className="overline">TO EVERY BUILDER, BRAINSTORMER &amp; BIG-IDEA PERSON</p>
        <h2>This is only<br />the <span>beginning.</span></h2>
        <p>Thanks for making Khóa 18 one to remember.<br />Keep curious. Keep building. Xin chào for now! 👋</p>
        <a className="back-top" href="#top">BACK TO THE TOP ↑</a>
      </section>

      <footer className="site-footer"><span>ROBOTICS CLUB · HKI · 2026</span><span>MADE TO REMEMBER <b>♥</b></span></footer>
    </main>
  );
}
