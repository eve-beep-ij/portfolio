export default function About() {
  return (
    <section className="content-section">
      <h1>About</h1>

      <p>
        I'm Gloria Eve, a full-stack developer who enjoys turning ideas into
        polished, reliable web experiences. I work across the whole stack, from
        building clean, responsive interfaces with React to designing the
        backend logic that powers them.
      </p>

      <p>
        I pay close attention to detail, because the small things (spacing,
        performance, edge cases, clear error messages) are what make a product
        feel trustworthy. I care about writing code that is tidy, readable and
        built to last.
      </p>

      <p>
        Outside of code, I'm drawn to adventure. I love exploring new places
        and trying new things, and that same curiosity shapes how I work: I
        like learning new tools, taking on fresh challenges and finding better
        ways to solve problems.
      </p>

      <h2>Skills</h2>
      <ul className="chips">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Git</li>
        <li>Django</li>
        <li>Bootsrap</li>
        <li>Python</li>
        {/* <li>MySQL</li> */}
      </ul>
    </section>
  );
}