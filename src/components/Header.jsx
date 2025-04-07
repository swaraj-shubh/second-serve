import { Link, useLocation } from 'react-router-dom';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"

function Header() {

    const location = useLocation();

    const getLinkClass = (path) =>
        `text-gray-1000 hover:shadow-2xl shadow-black hover:text-black hover:font-medium transition-transform duration-1000 hover:scale-105 ${
          location.pathname === path ? "text-black font-bold" : ""
        }`;


  return (
    <header className="bg-blue-400 rounded-b-sm shadow-2xl">
      <div className="container flex items-center justify-between p-4 mx-auto">
        
        <Link to="/" className="flex items-center gap-2">
          <img src="/icon7.png" alt="PetConnect Logo" className='w-10 h-10 hover:scale-105' />
          <h1 className="text-2xl font-bold hover:scale-105">Second Serve</h1>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
          
          {/* <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  shubham
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/products" className={getLinkClass("/products")}>
                  Products
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>  */}
{/* 
<Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/restaurant-dashboard" element={<RestaurantDashboard />} />
        <Route path="/ngo-dashboard" element={<NGODashboard />} />
        <Route path="/dashboard" element={<Navigate to="/auth" />} /> temporary redirect */}




        <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/" className={getLinkClass("/")}>Home</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/auth" className={getLinkClass("/auth")}>Auth Page</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/restaurant-dashboard" className={getLinkClass("/restaurant-dashboard")}>Restaurant</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>

       

        <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/ngo-dashboard" className={getLinkClass("/ngo-dashboard")}>NGO</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/settings" className={getLinkClass("/settings")}><img className='w-8 h-8' src="/setting.png" alt="" /></Link>
            </NavigationMenuLink>
        </NavigationMenuItem> */}

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

export default Header;
