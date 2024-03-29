import Image from 'next/image'
import React from 'react'

const FooterLinks = [
  {label: 'Visit our Github page', name: 'Github', href: 'https://github.com/Jagadesh-Ronanki/'},
  {label: 'Visit our Blog', name: 'Blog', href: '/blog'},
  {label: 'Visit our LinkedIn page', name: 'Linkedin', href: 'https://www.linkedin.com/in/jagadesh-ronanki/'},
  {label: 'Visit our X page', name: 'X', href: 'https://twitter.com/JrNet_'}
]

const Footer = () => {
  return (
    <footer className='p-[30px] md:p-12 border-t-[0.1px] border-t-stone-700 '>
      <section className='flex flex-row justify-between pb-36 md:pb-8 '>
        <Image 
          alt="logo"
          src="/jr.svg"
          height={100}
          width={100}
          draggable={false}
        />
        <div className="grid grid-row gap-4 text-stone-400 text-end">
          <a rel="noreferrer" aria-label="Visit our X page" href="https://github.com/threesigmaxyz" className="font-light" target="_blank">Github</a>
          <a rel="noreferrer" aria-label="Visit our LinkedIn page" href="https://www.linkedin.com/company/threesigmaxyz/" className="font-light" target="_blank">Blog</a>
          <a rel="noreferrer" aria-label="Visit our LinkedIn page" href="https://www.linkedin.com/company/threesigmaxyz/" className="font-light" target="_blank">LinkedIn</a>
          <a rel="noreferrer" aria-label="Visit our X page" href="https://twitter.com/threesigmaxyz" className="font-light" target="_blank">X</a>
        </div>
      </section>
      <span className="font-light text-stone-400">
        © 2024 JrNet - portfolio / All rights reserved /&nbsp;
        <a rel="noreferrer" aria-label="Go to the privacy policy page" className="font-light" target="_blank" href="/privacy-policy">
          Privacy Policy
        </a>
      </span>
    </footer>
  )
}

export default Footer