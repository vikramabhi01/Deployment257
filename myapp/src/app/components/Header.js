import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>TechNova</h1>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}