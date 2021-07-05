import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import world from '@images/world.png';
import collab from '@images/collab.png';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Benefits of an accessible website</title>
      </Head>
      <section id="homepage-wrapper">
        <div className="inner-wrapper">
          <figure id="world">
            <Image src={world} alt="Illustration of a globe" />
          </figure>
          <h1>Benefits of an accessible website </h1>
          <br />
          <br />
          <p>
            Accessible websites allow a wide range of people to consume and interact with the
            content on them. But despite many resources, tools and people actively pushing the
            issue, this topic is only a minor aspect in the tech industry.
            <br />
            <br />
            The reasons for this are as numerous as they are varied. I myself attended a coding
            bootcamp and only realized in retrospect that I would have been better off putting the
            basics into practice if I had come into contact with the topic earlier.
            <br />
            <br />
            This talk is not just for developers, but anyone who can identify with the idea that
            everyone can use websites without limitations. I will illustrate this with two websites
            that are visually almost identical, but differ greatly in their usability.
            <br />
            <br />
            The differences will become especially clear if you try to navigate on them only with
            the keyboard or only with a screen reader. I will also show how to quickly and easily
            examine a website with selected browser tools.
          </p>
          <br />
          <figure id="collab">
            <Image src={collab} alt="Two people working on a user interface" />
          </figure>
          <h2>Tools and resources</h2>
          <br />
          <br />
          <p>
            The differences between the two examples become most apparent depending on how you use
            them. The following operating options are available, among others:
          </p>
          <ul>
            <li>Computer mouse or trackpad</li>
            <li>Keyboard</li>
            <li>Screen reader</li>
          </ul>
          <p>
            If you are not sure how to use a screen reader, here is an excellent tutorial on the
            subject:{' '}
            <Link href="https://www.codecademy.com/articles/how-to-setup-screen-reader">
              How to setup a screen reader
            </Link>
          </p>
          <br />
          <p>Other tools for a simple, quick analysis of the accessibility of a website are:</p>
          <ul>
            <li>
              <Link href="https://wave.webaim.org/">WAVE Web Accessibility Evaluation Tool</Link>
            </li>
            <li>
              <Link href="https://accessibilityinsights.io/">Accessibility Insights</Link>
            </li>
            <li>
              <Link href="https://webaim.org/resources/contrastchecker/">Contrast Checker</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
