
"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export function ImageSlider() {

    const CarouselImages = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdiiDP6OuguaOcjhOKIsfMQ8GhyDOSQNFolg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIS4j3sGLTGnTSwXoh24PjsQ2qudt7qaxjRw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7gYiUYqwdVn-J97haBuQEfRkJHwcpbgrn5Q&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXM4vjnHytN4moGqPGdIeleHQo81WJnnGWQQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYGD0HvzFteI_G2Vep1iK7vBvwTLCklcF9_A&s'
    ]


  return (
    <Carousel className="w-full min-h-96 bg-yellow-400"
    plugins={[
        Autoplay({
            delay: 3000,
          }),
      ]}
    >
      <CarouselContent>
        {CarouselImages.map((data, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex h-full items-center justify-center p-6 bg-pink-600">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <img src={data} className="text-4xl h-full min-h-96 font-semibold"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
