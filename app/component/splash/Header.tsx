import Logo from "../icon/Logo";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full gradient-header border-b border-gray-800/20 h-19 sm:h-20 lg:h-24">
      <div className="max-w-container mx-auto h-full flex items-center justify-center sm:justify-start pt-3 px-4 sm:px-6 lg:px-8">
        <div className="shrink-0">
          <Logo />
        </div>
      </div>
    </header>
  );
}
