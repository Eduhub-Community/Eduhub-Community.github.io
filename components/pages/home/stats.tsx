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

export default function Stats() {
  const stats = [
    {
      number: '3000+',
      name: 'Discord Members',
    },
    {
      number: '25+',
      name: 'Offline Events',
    },
    {
      number: '200+',
      name: 'Virtual Geekouts',
    }
  ]

  return (
    <section className="px-10 py-20 text-center">
      <div className="flex justify-evenly items-stretch gap-4 flex-wrap lg:flex-nowrap">
        {stats.map(item => (
          <Card key={encodeURIComponent(item.name)} className="px-6 py-3">
            <CardContent className="flex items-center justify-around flex-col gap-4">
              <CardTitle className="text-4xl font-bold">{item.number}</CardTitle>
              <CardDescription className="text-lg font-semibold">{item.name}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

