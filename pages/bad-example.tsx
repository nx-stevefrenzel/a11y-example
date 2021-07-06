import Head from 'next/head';
import Progress from '@utils/ProgressBad';
import Checkbox from '@utils/CheckboxBad';
import RadioButton from '@utils/RadioButtonBad';
import Link from '@utils/FakeLink';

const workers = require('../public/images/workers.png');
const nyanCat = require('../public/images/nyan-cat.gif');
const dog = require('../public/images/dog.jpg');
const cat = require('../public/images/cat.jpg');
const horse = require('../public/images/horse.jpg');

export default function badExample() {
  return (
    <>
      <Head>
        <title>Bad Example 👎</title>
      </Head>
      <div id="bad-example-container">
        <div id="inner-wrapper-bad">
          <div id="intro-image">
            <img src={workers.default.src} />
          </div>

          {/* Explanation */}

          <div className="margin-top"></div>

          <div className="heading-one">What is Digital Accessibility?</div>

          <div className="paragraph">
            Every user deserves a first-rate digital experience on the web. Someone with a
            disability must be able to experience web-based services, content and other digital
            products with the same successful outcome as those without disabilities. This awareness
            and commitment to inclusion is the goal of Global Accessibility Awareness Day (
            <Link url="https://globalaccessibilityawarenessday.org/" content="click here" />
            ), a global event that shines a light on digital access and inclusion for people with
            disabilities.
          </div>

          <div className="divider"></div>

          {/* State */}

          <div className="heading-two">State of accessibility</div>

          <div className="paragraph">
            In 2020, WebAIM (<Link url="https://webaim.org/" content="more info" />) analyzed one
            million websites for accessibility issues and found out that
          </div>

          <div className="unordered-list">
            <div className="list-item">• 98.1% of homepages have at least on WCAG 2.0 Failure</div>
            <div className="list-item">• 60.9 is the average number of errors per homepage</div>
          </div>

          <div className="divider"></div>

          {/* Common failures */}

          <div className="heading-three">
            Causes of most common accessibility failures (% of websites)
          </div>

          <Progress content="86,3%: Low contrast text" style={{ width: '86.3%' }} />
          <Progress content="66%: Missing image alt text" style={{ width: '66%' }} />
          <Progress content="59,9%: Empty links" style={{ width: '59.9%' }} />
          <Progress content="53,8%: Missing form input labels" style={{ width: '53.8%' }} />
          <Progress content="28,7%: Empty buttons" style={{ width: '28.7%' }} />
          <Progress content="28%: Missing document language" style={{ width: '28%' }} />

          <div className="divider"></div>

          {/* Link list */}

          <div className="heading-two">
            Check out this list of four great looking and accessible websites:
          </div>

          <div className="ordered-list">
            <div className="list-item">
              1. Chase Bank: <Link url="https://www.chase.com/" content="CLICK" />
            </div>

            <div className="list-item">
              2. Funka: <Link url="https://www.funka.com/" content="MORE INFO" />
            </div>

            <div className="list-item">
              3. Jiffy Lube: <Link url="https://www.jiffylube.com/" content="DETAILS" />
            </div>

            <div className="list-item">
              4. The White House: <Link url="https://www.whitehouse.gov/" content="CLICK HERE!!!" />
            </div>
          </div>

          <div className="divider"></div>

          {/* Form example */}
          <div className="heading-two">Form example</div>

          <div className="input-wrapper">
            <div className="input-label">Enter your name:</div>
            <div contentEditable="true" className="user-input">
              Enter your name
            </div>
          </div>

          <div className="input-wrapper">
            <div className="input-label">Enter your e-mail:</div>
            <div contentEditable="true" className="user-input">
              Enter your e-mail
            </div>
          </div>

          <div className="divider"></div>

          {/* Input example */}

          <div className="heading-two">Input examples</div>

          <div className="heading-three">Select your favorite ice cream:</div>

          <Checkbox content="Strawberry" />
          <Checkbox content="Chocolate" />
          <Checkbox content="Lemon" />
          <Checkbox content="Vanilla" />
          <Checkbox content="Blueberry" />

          <div className="heading-three">Choose your favorite mars rover:</div>

          <RadioButton content="Sojourner" />
          <RadioButton content="Spirit" />
          <RadioButton content="Opportunity" />
          <RadioButton content="Curiosity" />
          <RadioButton content="Perseverance" />

          <div className="divider"></div>

          {/* Picture example */}

          <div className="heading-two">Picture example</div>

          <img src={nyanCat.default.src} className="animal-image" />
          <img src={dog.default.src} className="animal-image" />
          <img src={cat.default.src} className="animal-image" />
          <img src={horse.default.src} className="animal-image" />
        </div>
      </div>
    </>
  );
}

// TODO Links should be divs
// TODO Add percentage to progress bar so it's hidden from screen reader
