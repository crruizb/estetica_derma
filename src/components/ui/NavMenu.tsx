interface Route {
  label: string;
  href: string;
}

interface Props {
  routes: Route[];
}

export function NavMenu({ routes }: Props) {
  return (
    <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
      {routes.map((route) => (
        <a
          key={route.label}
          href={route.href}
          className="group relative font-body text-sm font-medium uppercase tracking-widest text-brand-text transition-colors hover:text-primary"
        >
          {route.label}
          <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
        </a>
      ))}
    </nav>
  );
}
