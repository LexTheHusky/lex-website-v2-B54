export default function Footer() {
  return (
    <footer className="w-full px-8 py-6 bg-white/10 backdrop-blur-md border-t border-white/20 mt-16">
      <div className="flex flex-col sm:flex-row items-center justify-between text-white gap-4">
        
        <div className="text-sm opacity-80">
          © {new Date().getFullYear()} Lex The Husky — All rights reserved.
        </div>

        <nav className="flex gap-6 text-sm opacity-90">
          <a href="/community">Community</a>
          <a href="/whitepaper">Whitepaper</a>
          <a href="/roadmap">Roadmap</a>
          <a href="/ecosystem">Ecosystem</a>
        </nav>

      </div>
    </footer>
  );
}
