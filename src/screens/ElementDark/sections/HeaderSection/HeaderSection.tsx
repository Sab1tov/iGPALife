import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '../../../../components/ui/button'

// Types
interface NavItem {
	label: string
	className: string
	href: string
}

export const HeaderSection = (): JSX.Element => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		if (isDark) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [isDark])

	const navItems: NavItem[] = [
		{ label: 'HOME', className: 'px-[11.47px]', href: '#hero' },
		{ label: 'ABOUT', className: 'px-2', href: '#platform' },
		{ label: 'CONTACT', className: 'pl-2 pr-6', href: '#footer' },
	]

	return (
		<header className='flex flex-col w-full items-start bg-transparent dark:bg-black'>
			<div className='flex min-h-16 items-center px-4 md:px-6 lg:px-8 py-[13.75px] relative self-stretch w-full'>
				{/* Logo/Brand Name */}
				<div className='flex flex-col items-start relative flex-1 grow'>
					<h1 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-[#212121] dark:text-white text-lg md:text-xl lg:text-2xl tracking-[0] leading-8">
						iGPALife
					</h1>
				</div>
				{/* Dark mode toggle */}
				<button
					className='ml-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
					aria-label='Toggle dark mode'
					onClick={() => setIsDark(d => !d)}
				>
					{isDark ? (
						<Sun className='w-5 h-5 text-[#212121] dark:text-white' />
					) : (
						<Moon className='w-5 h-5 text-[#212121] dark:text-white' />
					)}
				</button>
				{/* Navigation and Login Button - Hidden on mobile, visible on tablet+ */}
				<nav className='hidden md:inline-flex items-start gap-0'>
					{navItems.map((item, index) => (
						<a
							key={index}
							href={item.href}
							className={`${item.className} py-1.5 rounded inline-flex min-w-12 lg:min-w-16 items-center justify-center relative cursor-pointer hover:text-[#1976D2] dark:text-white dark:hover:text-[#00BCD4] transition-colors`}
						>
							<div
								className={`relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-xs lg:text-sm text-center tracking-[0] leading-[24.5px] whitespace-nowrap`}
							>
								{item.label}
							</div>
						</a>
					))}
					<Button className="px-3 lg:px-4 py-1.5 bg-[#1976d2] dark:bg-[#00BCD4] rounded-[20px] overflow-hidden shadow-[0px_1px_5px_rgba(0,0,0,0.12),0px_2px_2px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] min-w-12 lg:min-w-16 h-auto [font-family:'Poppins',Helvetica] font-semibold text-white dark:text-[rgba(0,0,0,0.87)] text-xs lg:text-sm dark:hover:bg-[#FF4081] transition-colors">
						LOGIN
					</Button>
				</nav>
				{/* Mobile Menu Button - Visible on mobile only */}
				<button
					className='md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label='Toggle mobile menu'
				>
					<svg
						className='w-6 h-6 text-[#212121] dark:text-white'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</button>
			</div>
			{/* Mobile Menu - Visible when open */}
			{isMobileMenuOpen && (
				<div className='md:hidden fixed inset-0 bg-white dark:bg-black z-50 flex items-center justify-center'>
					<button
						className='absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
						onClick={() => setIsMobileMenuOpen(false)}
						aria-label='Close mobile menu'
					>
						<svg
							className='w-6 h-6 text-[#212121] dark:text-white'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>
					<nav className='flex flex-col gap-8 items-center'>
						{navItems.map((item, index) => (
							<a
								key={index}
								href={item.href}
								className={`[font-family:'Poppins',Helvetica] font-semibold text-xl py-2 cursor-pointer hover:text-[#1976D2] dark:text-white dark:hover:text-[#00BCD4] transition-colors`}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{item.label}
							</a>
						))}
						<Button className="mt-4 px-6 py-3 bg-[#1976d2] dark:bg-[#00BCD4] rounded-[20px] overflow-hidden shadow-[0px_1px_5px_rgba(0,0,0,0.12),0px_2px_2px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] h-auto [font-family:'Poppins',Helvetica] font-semibold text-white dark:text-[rgba(0,0,0,0.87)] text-lg dark:hover:bg-[#FF4081] transition-colors">
							LOGIN
						</Button>
					</nav>
				</div>
			)}
		</header>
	)
}
