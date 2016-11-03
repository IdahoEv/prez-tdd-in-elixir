// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

import CodeSlide from 'spectacle-code-slide';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="bar">

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              TDD In Elixir
            </Heading>
            <Heading size={2} fit caps textColor="white">
              Santa Monica Elixir Meetup, 2016-11-2
            </Heading>
            <Heading size={4} textColor="black">
              Evan Dorn - @idahoev
            </Heading>

            <Heading size={4} textColor="black" margin="1em auto">
              Slides and Code Examples:
              <Link href="https://github.com/IdahoEv/prez-tdd-in-elixir">
                <Text bold textColor="tertiary">https://github.com/IdahoEv/prez-tdd-in-elixir</Text>
              </Link>
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              1. Basic Principles
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} caps fit>Unit Tests</Heading>
            <Heading size={2} caps fit>Are easy to write in Functional Languages</Heading>
            <List>
              <Appear><ListItem>Pure functions have no side effects</ListItem></Appear>
              <Appear><ListItem>So call function with args, assert return value</ListItem></Appear>
              <Appear><ListItem>... done</ListItem></Appear>
              <Appear><ListItem>Setup/Teardown are rare</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
          <Heading size={2} fit caps>Remember this:</Heading>
          <Appear><Heading size={2} fit lineHeight={2} textColor="white">Nobody "owns" functions in Elixir</Heading></Appear>
          <Appear><Heading size={2} fit lineHeight={2}>Modules are just for organization</Heading></Appear>
          <Appear><Heading size={2} fit lineHeight={2} textColor="white">You can call <u>any</u> function from <u>anywhere</u></Heading></Appear>
          </Slide>

          <Slide transition={["zoom"]} bgColor="secondary">
            <Heading size={1} fit  lineHeight={1} textColor="white">
              2. USING ExUnit
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} fit>USING ExUnit</Heading>
            <List>
              <Appear><ListItem>Code in <code>lib</code>, tests in <code>test</code>.</ListItem></Appear>
              <Appear><ListItem>Test files named <code>test/name_test.exs</code></ListItem></Appear>
              <Appear><ListItem><code>$> mix test</code></ListItem></Appear>
              <Appear><ListItem><code>$> mix test test/filename.exs:30</code></ListItem></Appear>
              <Appear><ListItem><code>$> mix test.watch</code></ListItem></Appear>
            </List>
          </Slide>


          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../example/test/example_test.exs")}
            ranges={[
              { loc: [0, 33], title: "Using ExUnit" },
              { loc: [1, 2], title: "Use ExUnit.case Behaviour"},
              { loc: [3, 6], title: "Assert Truthy Things" },
              { loc: [4, 5], title: "Assert Truthy Things" },
              { loc: [8, 11], title: "Successful pattern matches are truthy" },
              { loc: [14, 17], title: "Failed pattern matches are falsy" },
              { loc: [19, 22], title: "Partial test w/pattern match" },
              { loc: [24, 26], title: "Helper functions" },
              { loc: [28, 31], title: "Helper functions" }
            ]}
          />

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../example/test/setup_example_test.exs")}
            ranges={[
              { loc: [0, 17], title: "Using Setup" },
              { loc: [3, 4], title: "Using Setup"},
              { loc: [6, 10], title: "Setup must return a keyword list" },
              { loc: [12, 15], title: "KW list is passed to your test as 2nd arg" },
              { loc: [12, 13], title: "KW list is passed to your test as 2nd arg" },
            ]}
          />

          <Slide transition={["slide"]}>
            <Heading size={2} caps fit>Want BDD Syntax?</Heading>
            <List>
              <Appear><ListItem>In mix.exs, add <code>ex_spec</code> </ListItem></Appear>
              <Appear><ListItem><code>{'{'} :ex_spec, ">= 0.0.0", only: :test {'}'}</code></ListItem></Appear>
              <Appear><ListItem>Gives you <code>describe</code> and <code>context</code></ListItem></Appear>
              <Appear><ListItem>And <code>it</code> as a synonym for <code>test</code></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="secondary">
            <Heading size={1} fit  lineHeight={1} textColor="white">
              3. DOCTESTS
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} caps fit>Doctests</Heading>
            <List>
              <Appear><ListItem>Document your code for humans</ListItem></Appear>
              <Appear><ListItem>And get free tests!</ListItem></Appear>
              <Appear><ListItem>Just put example usage (from iex)</ListItem></Appear>
              <Appear><ListItem>Below a markdown <code>##examples</code> header</ListItem></Appear>
            </List>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../example/lib/adder.ex")}
            ranges={[
              { loc: [0, 16], title: "Writing doctests" },
              { loc: [11, 14] },
              { loc: [2, 5] },
              { loc: [5, 6] },
              { loc: [6, 8] },
              { loc: [8, 10] },
            ]}
          />
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../example/test/adder_test.exs")}
            ranges={[
              { loc: [0, 6], title: "Running doctests" },
              { loc: [3, 4] },
            ]}
          />

          <Slide transition={["zoom"]} bgColor="secondary">
            <Heading size={1} fit  lineHeight={1} textColor="white">
              4. TESTING GenServers
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} fit caps>GenServers are like Objects:</Heading>
            <Appear><Heading size={2} fit lineHeight={2} textColor="white">They have internal state</Heading></Appear>
            <Appear>
               <Heading size={2} fit lineHeight={2}>You can <code>cast</code> to modify state</Heading>
             </Appear>
             <Appear>
               <Text lineHeight={1}><i>(like a method w/o return)</i></Text>
            </Appear>
            <Appear>
              <Heading size={2} fit lineHeight={2} textColor="white">You can <code>call</code> to get a response</Heading>
            </Appear>
            <Appear>
              <Text textColor="white" lineHeight={1}><i>(like a method with a return)</i></Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} fit caps>But GenServer Handler functions are <u>pure</u></Heading>
            <Appear><Heading size={2} fit lineHeight={2} textColor="white">They receive the full state</Heading></Appear>
            <Appear>
               <Heading size={2} fit lineHeight={2}>They return the new full state</Heading>
             </Appear>
             <Appear>
               <Heading size={2} fit lineHeight={2} textColor="white"><i>So you don't actually need a GenServer to test them!</i></Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>


          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>


          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>


          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>


          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>


          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
