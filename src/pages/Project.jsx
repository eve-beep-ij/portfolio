import shopnow from "../assets/shopnow.png";

const projects = [
  
   {
  title: "Shopnow",
  description:
    "A responsive online store where customers browse products, choose their preferred items and quantities, and add them to a cart. The cart updates totals instantly, so shoppers always see exactly what they're buying.",
  tech: "React, CSS",
  image: shopnow,
   },
    
  // {
  //   title: "Project two",
  //   description: "A short description of what this project does.",
  //   tech: "JavaScript, API",
  // },
  // {
  //   title: "Project three",
  //   description: "A short description of what this project does.",
  //   tech: "React, Vite",
  // },
];

export default function Project() {
  return (
    <section className="content-section">
      <h1>Projects</h1>
      <div className="project-grid">
        {projects.map((p) => (
          <article key={p.title} className="project-card">
          {p.image && (
  <img src={p.image} alt={`${p.title} screenshot`} className="project-image" />)}
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <small>{p.tech}</small>
          </article>
        ))}
      </div>
    </section>
  );
}