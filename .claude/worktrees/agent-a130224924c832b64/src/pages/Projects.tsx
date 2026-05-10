import { Monitor, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Pixel Dreamer",
    description: "A small pixel art editor built with React and Canvas.",
    tags: ["React", "TypeScript", "Canvas"],
    link: "#",
    github: "#"
  },
  {
    title: "Lofi Garden",
    description: "Interactive garden with lofi music and ambient sounds.",
    tags: ["Three.js", "Web Audio"],
    link: "#",
    github: "#"
  },
  {
    title: "Note Whisper",
    description: "A minimalist note-taking app with end-to-end encryption.",
    tags: ["Next.js", "WebCrypto"],
    link: "#",
    github: "#"
  }
];

export const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="serif-text text-4xl text-gray-700 mb-8 flex items-center gap-3">
        <Monitor className="text-pink-400" /> Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="glass p-8 rounded-3xl group relative overflow-hidden transition-all hover:scale-[1.02]">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Monitor size={80} />
            </div>
            <h3 className="serif-text text-2xl text-gray-700 mb-2">{project.title}</h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/40 text-[10px] uppercase tracking-wider text-pink-500 font-bold rounded-full border border-white/50">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a href={project.link} className="flex items-center gap-1.5 text-sm font-medium text-pink-400 hover:text-pink-500">
                <ExternalLink size={16} /> Live Demo
              </a>
              <a href={project.github} className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-gray-600">
                <Github size={16} /> Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
