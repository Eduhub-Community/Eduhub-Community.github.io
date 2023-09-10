"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useState } from "react"
import { Button } from "./ui/button"

export default function Navigation() {
  const navigation = [
    {
      name: 'Initiatives',
      link: '/#initiatives',
      imp: false
    },
    {
      name: 'Events',
      link: 'https://lu.ma/eduhub',
      imp: true
    },
    {
      name: 'About',
      link: '/about',
      imp: false
    },
    {
      name: 'FAQ',
      link: '/#faq',
      imp: false
    }
  ]

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <NavigationMenu className="flex justify-between items-center py-3 px-6 w-full max-w-full">
      <NavigationMenuItem className="list-none">
        <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <span className="text-xl font-extrabold">EduHub</span>
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuList>
        {navigation.map(item => (
          <NavigationMenuItem key={item.link} className={`${item.imp ? '' : 'hidden'} sm:block`}>
            <Link href={item.link} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="font-medium">{item.name}</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
