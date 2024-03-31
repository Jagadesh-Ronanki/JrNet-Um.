import Image from 'next/image'
import Link from 'next/link'

const FooterLinks = [
  {label: 'Github', name: 'Github', href: 'https://github.com/Jagadesh-Ronanki/'},
  {label: 'Blog', name: 'Blog', href: '/blog'},
  {label: 'LinkedIn', name: 'Linkedin', href: 'https://www.linkedin.com/in/jagadesh-ronanki/'},
  {label: 'X', name: 'X', href: 'https://twitter.com/JrNet_'}
]

const Footer = () => {
  return (
    <footer className='p-[30px] md:p-12 border-t-[0.1px] border-t-stone-700 '>
      <section className='flex flex-row justify-between pb-36 md:pb-8 '>
        <Image 
          alt="logo"
          src="/images/JrNet.svg"
          height={100}
          width={100}
          className='scale-150 -z-10 -translate-y-14'
          draggable={false}
        />
        <div className="grid grid-row gap-4 text-stone-400 text-end">
          {FooterLinks.map((link, index) => (
            <Link 
              key={index}
              rel="noreferrer"
              aria-label={`Visit my ${link.name} page`}
              href={link.href}
              className="font-light hover:text-white/90 transition-colors ease-in-out"
              target={link.href == "/blog" ? "" : "_blank"}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
      <span className="font-light text-stone-400">
        © 2024 JrNet - portfolio / All rights reserved /&nbsp;
        <Link 
          rel="noreferrer"
          aria-label="Go to the privacy policy page"
          className="font-light hover:text-white/90 transition-colors ease-in-out"
          target="_blank"
          href="/privacy-policy"
        >
          Privacy Policy
        </Link>
      </span>
    </footer>
  )
}

export default Footer
