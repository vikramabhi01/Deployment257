import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <header>
        <h1>Contact Us</h1>
        <nav>
          <Link href="/">Home</Link> |
          <Link href="/about"> About </Link> |
          <Link href="/services"> Services </Link> |
          <Link href="/contact"> Contact</Link>
        </nav>
      </header>

      <main>
        <h1>Get In Touch</h1>

        <p>
          Have a project in mind? We would love to hear
          from you. Contact us for more information.
        </p>

        <h2>Our Contact Details</h2>
        <p>Email: technova@example.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Location: India</p>

        <h2>Send Us a Message</h2>

        <form>
          <label>Your Name:</label>
          <br />
          <input type="text" placeholder="Enter your name" />
          <br /><br />

          <label>Your Email:</label>
          <br />
          <input type="email" placeholder="Enter your email" />
          <br /><br />

          <label>Subject:</label>
          <br />
          <input type="text" placeholder="Enter subject" />
          <br /><br />

          <label>Your Message:</label>
          <br />
          <textarea placeholder="Write your message"></textarea>
          <br /><br />

          <button type="submit">Send Message</button>
        </form>
      </main>

      <footer>
        <p>© 2026 TechNova. All Rights Reserved.</p>
      </footer>
    </div>
  );
}