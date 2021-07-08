import Image from 'next/image';
import Head from 'next/head';
import ExternalLink from './utils/ExternalLink';
import collab from '@images/collab.png';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Web Accessibility - Essential for some, useful for all.</title>
      </Head>
      <section id="homepage-wrapper">
        <div className="inner-wrapper">
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
            <ExternalLink
              url="https://www.codecademy.com/articles/how-to-setup-screen-reader"
              content="How to setup a screen reader"
            />
          </p>
          <br />
          <p>Other tools for a simple, quick analysis of the accessibility of a website are:</p>
          <ul>
            <li>
              <ExternalLink url="https://web.dev/measure/" content="Google Lighthouse" />
            </li>
            <li>
              <ExternalLink
                url="https://wave.webaim.org/"
                content="WAVE Web Accessibility Evaluation Tool"
              />
            </li>
            <li>
              <ExternalLink
                url="https://accessibilityinsights.io/"
                content="Accessibility Insights"
              />
            </li>
            <li>
              <ExternalLink
                url="https://webaim.org/resources/contrastchecker/"
                content="Contrast Checker"
              />
            </li>
            <li>
              Browser developer tools{' '}
              <ul>
                <li>
                  <ExternalLink
                    url="https://developer.chrome.com/docs/devtools/overview/#open"
                    content="Google Chrome"
                  />
                </li>
                <li>
                  <ExternalLink
                    url="https://developer.mozilla.org/en-US/docs/Tools#the_core_tools"
                    content="Firefox"
                  />
                </li>
                <li>
                  <ExternalLink
                    url="https://support.apple.com/en-gb/guide/safari/sfri20948/mac"
                    content="Safari"
                  />
                </li>
                <li>
                  <ExternalLink
                    url="https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/#open-the-devtools"
                    content="Microsoft Edge"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
