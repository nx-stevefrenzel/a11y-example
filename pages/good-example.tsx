import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import TextInput from '@components/utils/TextInput';
import Progress from '@components/utils/Progress';
import Checkbox from '@components/utils/Checkbox';
import RadioButton from '@components/utils/RadioButton';
import workers from '@images/workers.png';
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
        <title>Good Example 👍</title>
      </Head>
      <section id="good-example-wrapper">
        <div id="inner-wrapper">
          {/* <a href="#main">Skip to main content</a> */}
          <figure>
            <Image src={workers} />
          </figure>
          <h1>What is Digital Accessibility?</h1>
          <br />
          <br />
          <p>
            Every user deserves a first-rate digital experience on the web. Someone with a
            disability must be able to experience web-based services, content and other digital
            products with the same successful outcome as those without disabilities. This awareness
            and commitment to inclusion is the goal of{' '}
            <Link href="https://globalaccessibilityawarenessday.org/">
              Global Accessibility Awareness Day
            </Link>{' '}
            (GAAD), a global event that shines a light on digital access and inclusion for people
            with disabilities.
          </p>
          <hr />
          <h2>State of accessibility</h2>
          <br />
          <p>
            In 2020, <Link href="https://webaim.org/">WebAIM</Link> analyzed one million websites
            for accessibility issues and found out that
          </p>
          <ul>
            <li>98.1% of homepages have at least on WCAG 2.0 Failure</li>
            <li>60.9 is the average number of errors per homepage</li>
          </ul>
          <hr />
          {/* Progress bar */}
          <h3>Causes of most common accessibility failures (% of websites)</h3>
          <br />
          <Progress id="contrast" value="86.3" content="86,3%: Low contrast text" />
          <br />
          <Progress id="image" value="66" content="66%: Missing image alt text" />
          <br />
          <Progress id="links" value="59.9" content="59,9%: Empty links" />
          <br />
          <Progress id="input" value="53.8" content="53,8%: Missing form input labels" />
          <br />
          <Progress id="buttons" value="28.7" content="28,7%: Empty buttons" />
          <br />
          <Progress id="language" value="28" content="28%: Missing document language" />
          <br />
          <hr />
          {/* List of links */}
          <h2>Check out this list of four great looking and accessible websites:</h2>
          <ol>
            <li>
              <Link href="https://www.chase.com/">Chase Bank</Link>
            </li>
            <li>
              <Link href="https://www.funka.com/">Funka</Link>
            </li>
            <li>
              <Link href="https://www.jiffylube.com/">Jiffy Lube</Link>
            </li>
            <li>
              <Link href="https://www.whitehouse.gov/">The White House</Link>
            </li>
          </ol>
          <hr />
          {/* Form */}
          <h2>Form example</h2>
          <br />
          <form onSubmit={handleSubmit}>
            <TextInput
              id="enter-name"
              inputType="text"
              content="Enter your name: "
              placeholder="Enter your name"
            />
            <br />
            <TextInput
              id="enter-email"
              inputType="email"
              content="Enter your e-mail: "
              placeholder="Enter your e-mail"
            />
            <br />
            <input type="submit" value="Subscribe!"></input>
          </form>
          <br />
          <hr />
          <h2>Input examples</h2>
          {/* Checkboxes */}
          <br />
          <h3>Select your favorite ice cream(s):</h3>
          <Checkbox id="strawberry" content="Strawberry" />
          <Checkbox id="chocolate" content="Chocolate" />
          <Checkbox id="lemon" content="Lemon" />
          <Checkbox id="vanilla" content="Vanilla" />
          <Checkbox id="blueberry" content="Blueberry" />
          <br />
          {/* Radio buttons */}
          <h3>Choose your favorite mars rover:</h3>
          <RadioButton id="sojourner" name="rover" content="Sojourner" />
          <RadioButton id="spirit" name="rover" content="Spirit" />
          <RadioButton id="opportunity" name="rover" content="Opportunity" />
          <RadioButton id="curiosity" name="rover" content="Curiosity" />
          <RadioButton id="perseverance" name="rover" content="Perseverance" />
          <br />
          <hr />
          {/* Picture examples */}
          <h2>Picture example</h2>
          <br />
          <Image src={dog} alt="Dog with yellow sweatshirt" placeholder="blur" />
          <Image src={cat} alt="Fat cat in front of pink background" placeholder="blur" />
          <Image src={horse} alt="Fat cat in front of pink background" placeholder="blur" />
        </div>
      </section>
    </>
  );
}
