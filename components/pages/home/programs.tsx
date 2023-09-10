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
import { PinIcon, SchoolIcon, TrophyIcon } from "lucide-react"
import Link from "next/link"

export default function Programs() {
  const programs = [
    {
      icon: SchoolIcon,
      name: 'Campus Lead',
      description: 'Campus Leaders at Eduhub are people with an entrepreneurial mindset who want to add value to the community by spreading awareness about the cause and gathering like-minded people to work towards it.',
      apply: 'https://tally.so'
    },
    {
      icon: TrophyIcon,
      name: 'Hackathons',
      description: 'We organise workshops, sessions, mentorship, hackathons everything free of cost. We also periodically organise community meetings for our core members.'
    },
    {
      icon: PinIcon,
      name: 'City Lead',
      description: 'Chapter Leaders at eduhub community are people with an entrepreneurial mindset who want to add value to the community by spreading awareness about the cause and gathering like minded people to work towards it.',
      apply: 'https://tally.so'
    }
  ]

  return (
    <section className="px-10 py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Opportunities for you!</h2>
      <div className="flex justify-evenly items-stretch gap-4 flex-wrap lg:flex-nowrap">
        {programs.map(item => (
          <Card key={item.name} className="p-4 w-full">
            <CardHeader className="flex items-center flex-col gap-4">
              <item.icon />
              <CardTitle>{item.name}</CardTitle>
              <CardDescription className="max-w-prose">{item.description}</CardDescription>
            </CardHeader>
            {item.apply && (<CardFooter>
              <Link href={item.apply} className="block m-auto"><Button variant='outline'>Apply now!</Button></Link>
            </CardFooter>)}
          </Card>
        ))}
      </div>
    </section>
  )
}

