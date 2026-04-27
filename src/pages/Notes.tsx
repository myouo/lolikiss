import { Book, Calendar } from 'lucide-react';

const notes = [
  {
    date: "2024.03.20",
    title: "The beauty of small things",
    excerpt: "Today I watched the petals fall in the park. It reminded me that even small transitions can be beautiful..."
  },
  {
    date: "2024.03.15",
    title: "Learning Three.js was a journey",
    excerpt: "Math can be scary, but seeing that first 3D cube spin made it all worth it. Here's what I learned about shaders..."
  },
  {
    date: "2024.02.28",
    title: "Minimalism in Code",
    excerpt: "Sometimes the best code is the code you don't write. Deleting 100 lines today felt better than writing them..."
  }
];

export const Notes = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="serif-text text-4xl text-gray-700 mb-12 flex items-center gap-3">
        <Book className="text-pink-400" /> Notes
      </h2>
      <div className="space-y-6">
        {notes.map((note, i) => (
          <div key={i} className="glass p-8 rounded-3xl hover:bg-white/40 transition-colors cursor-pointer group">
            <div className="flex items-center gap-2 text-xs font-bold text-pink-300 uppercase tracking-widest mb-3">
              <Calendar size={12} /> {note.date}
            </div>
            <h3 className="serif-text text-2xl text-gray-700 group-hover:text-pink-500 transition-colors mb-2">
              {note.title}
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              {note.excerpt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
