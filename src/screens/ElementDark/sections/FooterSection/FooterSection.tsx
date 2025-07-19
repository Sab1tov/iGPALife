import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react'

// Types
interface Link {
	name: string
	href: string
	isExternal?: boolean
}

interface SocialLink {
	icon: JSX.Element
	href: string
	label: string
}

export const FooterSection = (): JSX.Element => {
	// Constants
	const CURRENT_YEAR = new Date().getFullYear()
	const COMPANY_NAME = 'iGPALife'

	// Common styles
	const headingStyles =
		"font-bold text-lg md:text-xl text-foreground dark:text-white font-['Poppins',Helvetica] leading-7 md:leading-8"
	const textStyles =
		"font-normal text-sm md:text-base text-muted-foreground dark:text-[#B0BEC5] font-['Poppins',Helvetica] leading-6 md:leading-7"
	const linkStyles =
		"font-normal text-sm md:text-base text-muted-foreground dark:text-[#B0BEC5] font-['Poppins',Helvetica] leading-5 md:leading-6 underline hover:text-accent dark:hover:text-[#00BCD4] transition-colors duration-200"

	// Footer navigation links
	const navigationLinks: Link[] = [
		{ name: 'Home', href: '#hero' },
		{ name: 'About', href: '#platform' },
		{ name: 'Contact', href: '#footer' },
	]

	// Social media links with accessibility labels
	const socialMediaLinks: SocialLink[] = [
		{
			icon: <FacebookIcon size={20} />,
			href: 'https://facebook.com/igpalife',
			label: 'Follow us on Facebook',
		},
		{
			icon: <TwitterIcon size={20} />,
			href: 'https://twitter.com/igpalife',
			label: 'Follow us on Twitter',
		},
		{
			icon: <InstagramIcon size={20} />,
			href: 'https://instagram.com/igpalife',
			label: 'Follow us on Instagram',
		},
	]

	// Helper function to handle link props
	const getLinkProps = (link: Link | SocialLink) => {
		const isExternal =
			'isExternal' in link ? link.isExternal : link.href.startsWith('http')
		return isExternal
			? {
					target: '_blank',
					rel: 'noopener noreferrer',
			  }
			: {}
	}

	return (
		<footer
			id='footer'
			className='w-full bg-background dark:bg-black border-t border-border dark:border-[rgba(255,255,255,0.1)] py-8 md:py-12'
			role='contentinfo'
		>
			<div className='container mx-auto px-4 md:px-6 max-w-[1200px]'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10'>
					{/* Brand Section */}
					<section className='flex flex-col gap-2 text-center md:text-left'>
						<h3 className={headingStyles}>{COMPANY_NAME}</h3>
						<p className={textStyles}>
							Enhancing university life through better
							<br />
							event management.
						</p>
					</section>

					{/* Navigation Links Section */}
					<section className='flex flex-col gap-2 text-center md:text-left'>
						<h3 className={headingStyles}>Quick Links</h3>
						<nav className='flex flex-col gap-1 items-center md:items-start'>
							{navigationLinks.map((link, index) => (
								<a
									key={`nav-${index}`}
									href={link.href}
									className={linkStyles}
									{...getLinkProps(link)}
								>
									{link.name}
								</a>
							))}
						</nav>
					</section>

					{/* Social Media Section */}
					<section className='flex flex-col gap-2 text-center md:text-left'>
						<h3 className={headingStyles}>Follow Us</h3>
						<div className='flex gap-2 justify-center md:justify-start'>
							{socialMediaLinks.map((social, index) => (
								<a
									key={`social-${index}`}
									href={social.href}
									className='inline-flex items-center justify-center p-2 rounded-[20px] 
										hover:bg-accent/10 dark:hover:bg-accent/10 
										text-muted-foreground dark:text-white 
										hover:text-accent dark:hover:text-[#00BCD4] 
										transition-colors duration-200'
									aria-label={social.label}
									{...getLinkProps(social)}
								>
									{social.icon}
								</a>
							))}
						</div>
					</section>
				</div>

				{/* Copyright Section */}
				<div className='mt-6 md:mt-10 text-center border-t border-border/50 dark:border-[rgba(255,255,255,0.05)] pt-6'>
					<p className="font-normal text-xs md:text-sm text-muted-foreground dark:text-[#B0BEC5] font-['Poppins',Helvetica] leading-4 md:leading-5">
						© {CURRENT_YEAR} {COMPANY_NAME}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}
