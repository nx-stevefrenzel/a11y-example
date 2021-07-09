import Image from 'next/image';
import Head from 'next/head';
import TextInput from '@components/utils/TextInput';
import Progress from '@components/utils/Progress';
import Checkbox from '@components/utils/Checkbox';
import RadioButton from '@components/utils/RadioButton';
import ExternalLink from '@components/utils/ExternalLink';
import workers from '@images/workers.png';
import nyanCat from '@images/nyan-cat.gif';
import dog from '@images/dog.jpg';
import cat from '@images/cat.jpg';
import horse from '@images/horse.jpg';

export default function goodExample() {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Good Example | Web Accessibility</title>
      </Head>
      <a href="#main">Skip to main content</a>
      <section id="good-example-wrapper">
        <div id="inner-wrapper">
          <figure id="hero-image">
            <Image src={workers} alt="Two people looking at a laptop" />
            <figcaption aria-hidden="true">Two people looking at a laptop</figcaption>
          </figure>
          <br />
          <main id="main">
            <h1>What is Digital Accessibility?</h1>
            <br />
            <br />
            <p>
              Every user deserves a first-rate digital experience on the web. Someone with a
              disability must be able to experience web-based services, content and other digital
              products with the same successful outcome as those without disabilities. This
              awareness and commitment to inclusion is the goal of{' '}
              <ExternalLink
                url="https://globalaccessibilityawarenessday.org/"
                content="Global Accessibility Awareness Day"
              />{' '}
              (GAAD), a global event that shines a light on digital access and inclusion for people
              with disabilities.
            </p>
            <hr aria-hidden="true" />
            <h2>State of accessibility</h2>
            <br />
            <figure>
              <Image
                src={dog}
                alt="Dog with yellow sweatshirt in front of a blue background"
                placeholder="blur"
              />
              <figcaption aria-hidden="true">
                Dog with yellow sweatshirt in front of a blue background
              </figcaption>
            </figure>
            <br />
            <p>
              In 2020, <ExternalLink url="https://webaim.org/" content="WebAIM" /> analyzed one
              million websites for accessibility issues and found out that
            </p>
            <ul>
              <li>98.1% of homepages have at least on WCAG 2.0 Failure</li>
              <li>60.9 is the average number of errors per homepage</li>
            </ul>
            <h3>Causes of most common accessibility failures (% of websites)</h3>
            <ul>
              <li>86,3%: Low contrast text</li>
              <li>66%: Missing image alt text</li>
              <li>59,9%: Empty links</li>
              <li>53,8%: Missing form input labels</li>
              <li>28,7%: Empty buttons</li>
              <li>28%: Missing document language</li>
            </ul>
            <hr aria-hidden="true" />
            {/* List of links */}
            <h2>Check out this list of four great looking and accessible websites:</h2>
            <br />
            <figure>
              <Image src={cat} alt="Fat cat in front of pink background" placeholder="blur" />
              <figcaption aria-hidden="true">Fat cat in front of pink background</figcaption>
            </figure>
            <ol>
              <li>
                <ExternalLink url="https://www.chase.com/" content="Chase Bank" />
              </li>
              <li>
                <ExternalLink url="https://www.funka.com/" content="Funka" />
              </li>
              <li>
                <ExternalLink url="https://www.jiffylube.com/" content="Jiffy Lube" />
              </li>
              <li>
                <ExternalLink url="https://www.whitehouse.gov/" content="The White House" />
              </li>
            </ol>
            <hr aria-hidden="true" />
            {/* Form */}
            <h2>Form example</h2>
            <br />
            <figure id="nyan-cat">
              <Image
                src={nyanCat}
                alt="Nyan cat (a cat with a toast as body and with a rainbow trail) in real life"
              />
              <figcaption aria-hidden="true">
                Nyan cat (a cat with a toast as body and with a rainbow trail) in real life
              </figcaption>
            </figure>
            <br />
            <form onSubmit={handleSubmit}>
              <TextInput id="enter-name" inputType="text" content="Enter your name: " />
              <br />
              <TextInput id="enter-email" inputType="email" content="Enter your e-mail: " />
              <br />
              <input type="submit" value="Subscribe!"></input>
            </form>
            <br />
            <hr aria-hidden="true" />
            <h2>Input examples</h2>
            {/* Checkboxes */}
            <br />
            <figure>
              <Image src={horse} alt="Horse showing it's tongue and teeth" placeholder="blur" />
              <figcaption aria-hidden="true">Horse showing it&apos;s tongue and teeth</figcaption>
            </figure>
            <br />
            <fieldset>
              <legend aria-hidden="true">Select your favorite ice creams:</legend>
              <Checkbox id="strawberry" content="Strawberry" />
              <Checkbox id="chocolate" content="Chocolate" />
              <Checkbox id="lemon" content="Lemon" />
              <Checkbox id="vanilla" content="Vanilla" />
              <Checkbox id="blueberry" content="Blueberry" />
            </fieldset>
            <br />
            {/* Radio buttons */}
            <fieldset>
              <legend aria-hidden="true">Choose your favorite mars rover:</legend>
              <RadioButton id="sojourner" name="rover" content="Sojourner" />
              <RadioButton id="spirit" name="rover" content="Spirit" />
              <RadioButton id="opportunity" name="rover" content="Opportunity" />
              <RadioButton id="curiosity" name="rover" content="Curiosity" />
              <RadioButton id="perseverance" name="rover" content="Perseverance" />
            </fieldset>
            <br />
          </main>
        </div>
      </section>
    </>
  );
}
