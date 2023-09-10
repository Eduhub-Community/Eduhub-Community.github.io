import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Events() {
  return (
    <section className="flex flex-col md:flex-row justify-evenly items-center px-10 py-20 gap-4">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-8">Events</h2>
        <p className="max-w-prose mb-8">Events are the pillar of community, they allow members to recollect, connect and grow!</p>
        <Link href="https://lu.ma"><Button variant='outline'>Find Events</Button></Link>
      </div>
      <div className="w-full">
        <iframe
          src="https://lu.ma/embed/calendar/cal-amS6MdvewhCdW3y/events"
          width="600"
          height="450"
          frameBorder="0"
          allowFullScreen={false}
          aria-hidden={false}
          tabIndex={0}
          className="rounded-md border w-full h-auto min-w-full min-h-[50vh]"
        ></iframe>
      </div>
    </section>
  )
}
