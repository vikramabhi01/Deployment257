import Link from "next/link";

export default function About() {
  return (
    <div>
      <header>
        <h1>About TechNova</h1>
        <nav>
          <Link href="/">Home</Link> |
          <Link href="/about"> About </Link> |
          <Link href="/services"> Services </Link> |
          <Link href="/contact"> Contact</Link>
        </nav>
      </header>

      <main>
        <h1>Who We Are</h1>

        <p>
          TechNova is a modern technology company focused
          on creating innovative web solutions.
        </p>

        <h2>Our Story</h2>
        <p>
          We started with a vision to make technology
          accessible to everyone. Our team works hard to
          deliver high-quality digital products.
        </p>

        <h2>Our Vision</h2>
        <p>
          To become a trusted technology partner for
          businesses around the world.
        </p>

        <h2>Our Core Values</h2>
        <ul>
          <li>Innovation</li>
          <li>Honesty</li>
          <li>Teamwork</li>
          <li>Customer Satisfaction</li>
        </ul>

        <h2>Our Team</h2>
        <p>
          Our team consists of creative designers,
          developers and technology enthusiasts.
        </p>
      </main>

      <footer>
        <p>© 2026 TechNova. All Rights Reserved.</p>
      </footer>
    </div>
  );
}