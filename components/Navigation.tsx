import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();
  function addClass(path: string) {
    if (router.pathname === path) {
      return 'active';
    } else {
      return undefined;
    }
  }

  return (
    <header>
      <nav>
        <ol>
          <li>
            <Link href="/" scroll={false} passHref>
              <a className={addClass('/')}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/bad-example" scroll={false}>
              <a className={addClass('/bad-example')}>Bad example</a>
            </Link>
          </li>
          <li>
            <Link href="/good-example" scroll={false}>
              <a className={addClass('/good-example')}>Good example</a>
            </Link>
          </li>
        </ol>
      </nav>
    </header>
  );
}
