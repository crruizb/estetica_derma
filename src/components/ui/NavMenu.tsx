import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";


interface MenuItem {
  label: string;
  href: string;
}

interface MenuItems {
  items: MenuItem[];
}

export function NavMenu({items} : MenuItems) {
  return (
    <NavigationMenu className="flex gap-16 justify-center items-center text-lg">
      {
        items.map((item, index) => (
          <div>
            <div className="hover:scale-125 hover:transition hover:duration-1000 duration-1000">
              <a className="font-bold" key={index} href={item.href}>{item.label}</a>
            </div>
            <hr className="h-[0.1rem] border-0 rounded bg-gradient-to-r from-fuchsia-100 via-fuchsia-400 to-pink-700"  />
          </div>
          
        ))
      }
    </NavigationMenu>
  )
}