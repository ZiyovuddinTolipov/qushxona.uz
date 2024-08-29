const Footer = () => {
  return (
    <footer className="bg-gray-950 py-4 text-white">
      <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row justify-between items-center px-5 text-center sm:text-left">
        <p className="text-sm mb-2 sm:mb-0">
          © {new Date().getFullYear()} Qushxona.uz. Barcha huquqlar himoyalangan.
        </p>
        <nav className="space-x-4">
          <a href="#" className="text-sm hover:text-gray-300 transition-colors">
            Biz haqimizda
          </a>
          <a href="#" className="text-sm hover:text-gray-300 transition-colors">
            Xizmatlar
          </a>
          <a href="#" className="text-sm hover:text-gray-300 transition-colors">
            Bog&apos;lanish
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer