"use client"

import * as React from "react"
import Link from "next/link"
// import { cn } from "@/lib/utils"

import { Menu } from "lucide-react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Image from "next/image"

export function Navigation() {
  return (
    <div className="fixed top-0 z-50 w-full px-4 py-4">
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between rounded-full bg-black px-4 sm:px-6 py-2.5 transition-all duration-300 hover:shadow-xl">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/assets/maptiu_logo_white.png" alt="Maptiu Logo" width={108} height={64} />
            </Link>

          <div className="hidden items-center space-x-1 lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 bg-black p-4 lg:w-[500px] lg:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/skill-access" className="block rounded-md p-3 hover:bg-zinc-800">
                            <div className="text-sm font-medium text-white">SkillAccess</div>
                            <p className="mt-1 text-sm text-zinc-400">Connecting Top Talent with Leading Corporates</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/hire-it" className="block rounded-md p-3 hover:bg-zinc-800">
                            <div className="text-sm font-medium text-white">HireIt</div>
                            <p className="mt-1 text-sm text-zinc-400">Your Trusted Talent Acquisition Partner</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="lg:col-span-2">
                        <NavigationMenuLink asChild>
                          <Link href="/resource-augmentation" className="block rounded-md p-3 hover:bg-zinc-800">
                            <div className="text-sm font-medium text-white">Resource Augmentation</div>
                            <p className="mt-1 text-sm text-zinc-400">Scale Your Workforce with Ease</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about-us" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-white">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/careers" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-white">
                      Careers
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact-us" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-white">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hidden text-white hover:bg-white/10 hover:text-white lg:inline-flex"
              asChild
            >
              <Link href="/about-us">Learn More</Link>
            </Button>
            <Button className="hidden bg-[#FF4500] text-white hover:bg-[#FF4500]/90 lg:inline-flex" asChild>
              <Link href="/contact-us">Book Now</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="lg:hidden" size="icon">
                  <Menu className="h-5 w-5 text-white" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-black p-6">
                <nav className="flex flex-col space-y-4">
                  <Link href="/skill-access" className="text-lg font-medium text-white hover:text-[#FF4500]">
                    SkillAccess
                  </Link>
                  <Link href="/hire-it" className="text-lg font-medium text-white hover:text-[#FF4500]">
                    HireIt
                  </Link>
                  <Link href="/resource-augmentation" className="text-lg font-medium text-white hover:text-[#FF4500]">
                    Resource Augmentation
                  </Link>
                  <Link href="/about-us" className="text-lg font-medium text-white hover:text-[#FF4500]">
                    About
                  </Link>
                  <Link href="/careers" className="text-lg font-medium text-white hover:text-[#FF4500]">
                    Careers
                  </Link>
                  <Link href="/contact-us" className="text-lg font-medium text-white hover:text-[#FF4500]">
                    Contact
                  </Link>
                  <div className="pt-4">
                    <Button className="w-full bg-[#FF4500] text-white hover:bg-[#FF4500]/90" asChild>
                      <Link href="/contact-us">Book Now</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </div>
  )
}
