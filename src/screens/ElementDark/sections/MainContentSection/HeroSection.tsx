import { Button } from '../../../../components/ui/button'

const HeroSection = () => {
	const handleGetStarted = () => {
		// Add navigation logic here
		console.log('Get Started clicked')
	}

	const handleLearnMore = () => {
		// Add navigation logic here
		console.log('Learn More clicked')
	}

	return (
		<section
			id='hero'
			className='relative w-full flex flex-col items-center justify-center min-h-screen py-20 md:py-32 lg:py-40 overflow-hidden'
		>
			{/* Background with gradient overlay */}
			<div className='absolute inset-0 bg-background dark:bg-black' />
			<div
				className='absolute inset-0 opacity-60 pointer-events-none'
				style={{
					background: `
            radial-gradient(80% 80% at 10% 20%, rgba(255, 64, 129, 0.2) 0%, transparent 60%),
            radial-gradient(80% 80% at 80% 90%, rgba(0, 188, 212, 0.2) 0%, transparent 60%)
          `,
				}}
			/>

			{/* Main content */}
			<div className='relative z-10 flex flex-col max-w-4xl mx-auto items-center gap-8 px-4 md:px-6 text-center'>
				{/* Main heading */}
				<h1 className="font-bold font-['Poppins',sans-serif] text-4xl md:text-6xl lg:text-7xl text-foreground dark:text-white leading-tight tracking-tight">
					Welcome to{' '}
					<span className='bg-gradient-to-r from-[#ff4081] to-[#00bcd4] bg-clip-text text-transparent'>
						iGPALife
					</span>
				</h1>

				{/* Subtitle */}
				<p className="font-medium font-['Poppins',sans-serif] text-lg md:text-xl lg:text-2xl text-muted-foreground dark:text-slate-300 leading-relaxed max-w-3xl">
					The all-in-one platform for university clubs and students to manage
					events and track social activities with ease.
				</p>

				{/* CTA Buttons */}
				<div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full sm:w-auto'>
					<Button
						onClick={handleGetStarted}
						size='lg'
						className="bg-gradient-to-r from-[#ff4081] to-[#e91e63] hover:from-[#e91e63] hover:to-[#ad1457] text-white rounded-full px-8 py-4 font-medium font-['Poppins',sans-serif] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-w-[140px]"
					>
						Get Started
					</Button>
					<Button
						onClick={handleLearnMore}
						variant='outline'
						size='lg'
						className="border-2 border-[#00bcd4] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-white dark:text-[#00bcd4] dark:border-[#00bcd4] dark:hover:bg-[#00bcd4] dark:hover:text-black rounded-full px-8 py-4 font-medium font-['Poppins',sans-serif] transition-all duration-300 w-full sm:w-auto min-w-[140px]"
					>
						Learn More
					</Button>
				</div>

				{/* Optional: Feature highlights */}
				<div className='flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground dark:text-slate-400'>
					<div className='flex items-center gap-2'>
						<div className='w-2 h-2 bg-[#ff4081] rounded-full'></div>
						<span>Event Management</span>
					</div>
					<div className='flex items-center gap-2'>
						<div className='w-2 h-2 bg-[#00bcd4] rounded-full'></div>
						<span>Social Tracking</span>
					</div>
					<div className='flex items-center gap-2'>
						<div className='w-2 h-2 bg-[#4caf50] rounded-full'></div>
						<span>Club Management</span>
					</div>
				</div>
			</div>

			{/* Optional: Scroll indicator */}
			<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
				<div className='w-6 h-10 border-2 border-muted-foreground dark:border-slate-400 rounded-full flex justify-center'>
					<div className='w-1 h-3 bg-muted-foreground dark:bg-slate-400 rounded-full mt-2 animate-pulse'></div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
