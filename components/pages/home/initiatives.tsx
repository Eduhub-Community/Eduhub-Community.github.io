import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BitcoinIcon, CodeIcon, GithubIcon, Link2Icon } from "lucide-react"

export default function Initiatives() {
  const initiatives = [
    {
      icon: GithubIcon,
      name: 'Open Source',
      description: 'Our motivation is to funnel learning through development skills, that can solve real-world problems.'
    },
    {
      icon: CodeIcon,
      name: 'Collaboration',
      description: 'Collaborative working that helps you develop showcase-worthy work.'
    },
    {
      icon: Link2Icon,
      name: 'Networking',
      description: 'India’s smartest student community, to learn, grow and solve real world problems together.'
    },
    {
      icon: BitcoinIcon,
      name: 'Web3',
      description: 'Learn the basics of building your dApps, pitch your ideas, brainstorming with likeminded people, and much more!'
    }
  ]

  return (
    <section className="px-10 py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Initiatives</h2>
      <div className="flex justify-evenly items-stretch gap-4 flex-wrap lg:flex-nowrap">
        {initiatives.map(item => (
          <Card key={item.name} className="p-4 w-full">
            <CardHeader className="flex items-center flex-col gap-4">
              <item.icon />
              <CardTitle>{item.name}</CardTitle>
              <CardDescription className="max-w-prose">{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

