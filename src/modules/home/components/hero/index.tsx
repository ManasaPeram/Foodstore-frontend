import { Heading } from "@medusajs/ui"
import Image from "next/image"
import Mango from './Fruit.jpg'

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle overflow-hidden">
      {/* Background images of mangoes */}
      <div className="absolute inset-0 z-0">
        <Image
          src={Mango} // Add your mango image to public/images folder
          alt="Mango fruits background"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Overlay to make text more readable */}
      </div>
      
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal mb-2"
          >
            MangoCart – Fresh Trends, Fresh Deals!
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Where Freshness Meets Fashion!
          </Heading>
        </div>
      </div>
    </div>
  )
}

export default Hero
