export default function Header() {
  return (
    <header className="w-full px-8 py-4 bg-white/10 backdrop-blur-md border-b border-white/20 flex items-center justify-between">
      <div className="text-white font-bold text-xl">
        Lex The Husky
      </div>

      <nav className="flex gap-6 text-white">
        <a href="/">Home</a>
        <a href="/ecosystem">Ecosystem</a>
        <a href="/swap">Swap</a>
        <a href="/staking">Staking</a>
        <a href="/og-pass">OG Pass</a>
        <a href="/huskyworld">HuskyWorld</a>
        <a href="/burn-center">Burn Center</a>
        <a href="/roadmap">Roadmap</a>
        <a href="/community">Community</a>
        <a href="/whitepaper">Whitepaper</a>
      </nav>
    </header>
  );
}
