function Header() {
  return (
      <header className="p-4 bg-white shadow">
        <div className="container flex items-center justify-between mx-auto">
          <h1 className="text-2xl font-bold text-blue-700">NewsToday</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Politics</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Tech</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>
  );
}
export default Header;