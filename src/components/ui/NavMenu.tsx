interface Route {
  label: string;
  href: string;
}

interface Props {
  routes: Route[];
}

export function NavMenu({ routes }: Props) {
  return (
    <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
      {routes.map((route) => (
        <a
          key={route.label}
          href={route.href}
          className="group relative font-body text-xs font-medium uppercase tracking-[0.2em] text-brand-dark transition-colors hover:text-primary"
        >
          {route.label}
          <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
        </a>
      ))}
    </nav>
  );
}
