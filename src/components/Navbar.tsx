
const Navbar = () => (
  <header className="w-full max-w-[1980px] mx-auto flex justify-end px-4 py-2 sticky top-0">
    <nav>
      {/* Checado = dracula  |  Desmarcado = lofi */}
      <input
        type="checkbox"
        value="dracula"
        className="toggle theme-controller border-zinc-300 before:bg-green-500"
      />
    </nav>
  </header>
);
export default Navbar;
