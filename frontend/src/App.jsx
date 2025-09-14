import {ScrollTrigger ,SplitText} from "gsap/all"
import gsap from 'gsap'
import React from 'react'

gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      hello 
    </div>
  )
}

export default App
