import Link from "next/link";

export default function Services() {
  return (
    <div>
      <header>
        <h1>Our Services</h1>
        <nav>
          <Link href="/">Home</Link> |
          <Link href="/about"> About </Link> |
          <Link href="/services"> Services </Link> |
          <Link href="/contact"> Contact</Link>
        </nav>
      </header>

      <main>
        <h1>What We Offer</h1>

        <p>
          We provide digital services to help businesses
          establish a strong online presence.
        </p>

        <section>
          <h2>1. Web Development</h2>
          <p>
            We build fast, secure and responsive websites
            using modern technologies.
          </p>
        </section>

        <section>
          <h2>2. Frontend Development</h2>
          <p>
            We create attractive user interfaces using
            React.js, Next.js, HTML and CSS.
          </p>
        </section>

        <section>
          <h2>3. Backend Development</h2>
          <p>
            We develop powerful server-side applications
            using Node.js and databases.
          </p>
        </section>

        <section>
          <h2>4. UI/UX Design</h2>
          <p>
            We design simple, beautiful and user-friendly
            digital experiences.
          </p>
        </section>

        <h2>Our Technologies</h2>
        <ul>
          <li>HTML, CSS and JavaScript</li>
          <li>React.js and Next.js</li>
          <li>Node.js and Express.js</li>
          <li>MongoDB and MySQL</li>
        </ul>
      </main>

      <footer>
        <p>© 2026 TechNova. All Rights Reserved.</p>
      </footer>
    </div>
  );
}