import * as React from "react"

import Waves from "../images/waves.svg";
import { Send, GitHub, Linkedin } from 'react-feather';

const links = {
  email: "mailto:hello@hexolan.dev",
  github: "https://github.com/hexolan",
  linkedIn: "https://www.linkedin.com/in/dteevan"
}

const IndexPage = () => {
  return (
    <main>
      <div className="flex flex-col space-y-8 justify-center items-center min-h-screen">
        <div className="grid space-y-2 justify-items-center">
          <p className="text-5xl text-neutral-400 font-sans">Declan Teevan</p>
          <p className="text-2xl text-neutral-300 font-serif">Software Engineer</p>
        </div>

        <div className="flex space-x-6 justify-items-center">
          <a className="hover:text-blue-500" href={links.email} target="_blank" rel="noreferrer">
            <Send size={32} />
          </a>
          <a className="hover:text-blue-500" href={links.github} target="_blank" rel="noreferrer">
            <GitHub size={32} />
          </a>
          <a className="hover:text-blue-500" href={links.linkedIn} target="_blank" rel="noreferrer">
            <Linkedin size={32} />
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 w-full overflow-hidden -z-10">
        <Waves />
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Hexolan</title>
