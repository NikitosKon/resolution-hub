import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <div>
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="lede">
          The guide may still be under editorial review or the address is
          incorrect.
        </p>
        <Link className="button primary" href="/">
          Choose a language
        </Link>
      </div>
    </main>
  );
}
