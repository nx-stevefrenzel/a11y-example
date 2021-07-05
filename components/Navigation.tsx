import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" scroll={false}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/bad-example" scroll={false}>
            Bad example
          </Link>
        </li>
        <li>
          <Link href="/good-example" scroll={false}>
            Good example
          </Link>
        </li>
      </ul>
    </nav>
  );
}
