import { Button } from "@/components/ui/button";
import Stats from "./stats";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-10 py-20 text-center">
      <div className="flex-col justify-center items-center flex">
        <div className="flex flex-col items-center justify-center gap-7">
          <h1 className="text-white text-6xl font-black">Let’s Take You Forward</h1>
          <p className="max-w-prose text-center text-white text-lg font-normal">The community geared towards bringing you, one step forward towards your goals in tech.</p>
          <Link href="https://discord.gg/baZPs4cPJD"><Button variant="outline" size='lg'>Join 3k+ Members</Button></Link>
        </div>
        <Stats />
      </div>
      <div className="absolute bottom-0 -z-10 overflow-hidden">
        <svg width="1280" className="min-w-screen" height="640" viewBox="0 0 1280 640" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1280 640C1280 555.954 1263.45 472.731 1231.28 395.083C1199.12 317.434 1151.98 246.881 1092.55 187.452C1033.12 128.022 962.566 80.8801 884.917 48.7171C807.269 16.5541 724.046 3.67377e-06 640 0C555.954 -3.67377e-06 472.731 16.5541 395.083 48.7171C317.434 80.8801 246.881 128.022 187.452 187.452C128.022 246.881 80.8801 317.434 48.7171 395.083C16.5541 472.731 0 555.954 0 640H1280Z" fill="#03045E" fillOpacity="0.1" />
          <path d="M1152 640C1152 572.763 1138.76 506.185 1113.03 444.066C1087.3 381.947 1049.58 325.505 1002.04 277.961C954.495 230.418 898.053 192.704 835.934 166.974C773.815 141.243 707.237 128 640 128C572.763 128 506.185 141.243 444.066 166.974C381.947 192.704 325.505 230.418 277.961 277.961C230.418 325.505 192.704 381.947 166.974 444.066C141.243 506.185 128 572.763 128 640L1152 640Z" fill="#0077B6" fillOpacity="0.2" />
          <path d="M1024 640C1024 589.572 1014.07 539.639 994.77 493.05C975.472 446.461 947.187 404.129 911.529 368.471C875.871 332.813 833.539 304.528 786.95 285.23C740.361 265.932 690.428 256 640 256C589.572 256 539.639 265.932 493.05 285.23C446.461 304.528 404.129 332.813 368.471 368.471C332.813 404.129 304.528 446.461 285.23 493.05C265.932 539.639 256 589.572 256 640L1024 640Z" fill="#00B4D8" fillOpacity="0.3" />
          <path d="M896 640C896 606.382 889.378 573.092 876.513 542.033C863.648 510.974 844.791 482.752 821.019 458.981C797.248 435.209 769.026 416.352 737.967 403.487C706.908 390.622 673.618 384 640 384C606.382 384 573.092 390.622 542.033 403.487C510.974 416.352 482.752 435.209 458.981 458.981C435.209 482.752 416.352 510.974 403.487 542.033C390.622 573.092 384 606.382 384 640L896 640Z" fill="#90E0EF" fillOpacity="0.4" />
          <path d="M768 640C768 623.191 764.689 606.546 758.257 591.017C751.824 575.487 742.396 561.376 730.51 549.49C718.624 537.604 704.513 528.176 688.983 521.743C673.454 515.311 656.809 512 640 512C623.191 512 606.546 515.311 591.017 521.743C575.487 528.176 561.376 537.604 549.49 549.49C537.604 561.376 528.176 575.487 521.743 591.017C515.311 606.546 512 623.191 512 640L768 640Z" fill="#CAF0F8" fillOpacity="0.5" />
        </svg>
      </div>
    </div>
  )
}
