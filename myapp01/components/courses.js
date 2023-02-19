import React from 'react'

const Courses = () => {
  return (

    //   <section id="latest-courses" class="">
    <div class="container mx-auto px-2 py-16">
      <h2 class="text-3xl font-bold mb-10">Latest Courses</h2>

      <div class="flex gap-6">

        <div class="w-1/3 shadow-lg rounded-lg overflow-hidden">
          <img class="w-full" src="images/javascript-course-image.png"/>
          <div class="px-4 py-6">
            <h4 class="font-bold mb-2">Learn Basic Java From Experts</h4>
            <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac tempus elementum ultricies nulla lorem non.</p>
            <a href="#" class="bg-red-600 inline-block px-4 py-2 text-sm text-white">Take a Course</a>
          </div>
        </div>

        <div class="w-1/3 shadow-lg rounded-lg overflow-hidden">
          <img class="w-full" src="images/php-course-image.png"/>
          <div class="px-4 py-6">
            <h4 class="font-bold mb-2">Learn Basic PHP to Develope Websites</h4>
            <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac tempus elementum ultricies nulla lorem non.</p>
            <a href="#" class="bg-red-600 inline-block px-4 py-2 text-sm text-white">Take a Course</a>
          </div>
        </div>

        <div class="w-1/3 shadow-lg rounded-lg overflow-hidden">
          <img class="w-full" src="images/block-chain-course-image.png"/>
          <div class="px-4 py-6">
            <h4 class="font-bold mb-2">Learn Block Chain Technology for the Future</h4>
            <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac tempus elementum ultricies nulla lorem non.</p>
            <a href="#" class="bg-red-600 inline-block px-4 py-2 text-sm text-white">Take a Course</a>
          </div>
        </div>


      </div>
    </div>

//   </section>

  )
}

export default Courses