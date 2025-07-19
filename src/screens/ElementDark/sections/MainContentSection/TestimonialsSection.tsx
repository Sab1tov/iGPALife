import { useCallback, useEffect, useState } from 'react'
import { Avatar } from '../../../../components/ui/avatar'
import { Card, CardContent } from '../../../../components/ui/card'

// Types
interface Testimonial {
	quote: string
	initials: string
	name: string
	role: string
}

interface TestimonialCardProps {
	testimonial: Testimonial
	isDark: boolean
}

const testimonials = [
	{
		quote:
			'iGPALife revolutionized how we manage our events. The room booking feature is a lifesaver, and our members love how easy it is to see all upcoming activities.',
		initials: 'SL',
		name: 'Sarah L.',
		role: 'President, Tech Club',
	},
	{
		quote:
			"Finally, a single place to track all my campus activities! I've discovered so many interesting clubs and events I wouldn't have known about otherwise.",
		initials: 'DC',
		name: 'David Chen',
		role: 'Student',
	},
	{
		quote:
			'As an administrator, I appreciate the oversight and streamlined approval process. It has made managing student organizations much more efficient and transparent.',
		initials: 'EC',
		name: 'Dr. Emily Carter',
		role: 'Faculty Advisor',
	},
]

// Testimonial Card Component
const TestimonialCard = ({ testimonial, isDark }: TestimonialCardProps) => (
	<Card className='w-full bg-white/60 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.3)] backdrop-blur-[10px] hover:bg-white/80 dark:hover:bg-white/8 hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] dark:hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-[1.01] group'>
		<CardContent className='flex flex-col justify-between p-6 md:p-8 h-full min-h-[300px]'>
			{/* Quote Section */}
			<div className='flex flex-col gap-4 md:gap-6 pb-4 md:pb-6'>
				<div className='w-12 h-12 flex justify-center items-center group-hover:scale-105 transition-transform duration-200'>
					<img
						className='w-12 h-12 object-contain'
						alt='Quote icon'
						src={
							isDark
								? '/assets/icons/dark-mode/quote-svg.svg'
								: '/assets/icons/light-mode/quote-svg.svg'
						}
						loading='lazy'
					/>
				</div>
				<blockquote className="font-normal italic font-['Poppins',sans-serif] text-sm md:text-base text-foreground dark:text-white leading-5 md:leading-6 max-w-full">
					"{testimonial.quote}"
				</blockquote>
			</div>

			{/* Author Section */}
			<div className='flex items-center'>
				<div className='flex-shrink-0 mr-4'>
					<Avatar className='w-10 h-10 md:w-12 md:h-12 bg-accent dark:bg-[#00BCD4] text-white dark:text-[#121212] flex items-center justify-center group-hover:scale-105 transition-transform duration-200'>
						<span className="font-normal font-['Poppins',sans-serif] text-lg md:text-xl text-center leading-5 w-full h-full flex items-center justify-center">
							{testimonial.initials}
						</span>
					</Avatar>
				</div>
				<div className='flex flex-col'>
					<h3 className="font-bold font-['Poppins',sans-serif] text-lg md:text-xl text-foreground dark:text-white leading-6 md:leading-8">
						{testimonial.name}
					</h3>
					<p className="font-normal font-['Poppins',sans-serif] text-sm md:text-base text-muted-foreground dark:text-[#B0BEC5] leading-5 md:leading-6">
						{testimonial.role}
					</p>
				</div>
			</div>
		</CardContent>
	</Card>
)

const TestimonialsSection = () => {
	const [isDark, setIsDark] = useState(false)

	const checkDarkMode = useCallback(() => {
		setIsDark(document.documentElement.classList.contains('dark'))
	}, [])

	useEffect(() => {
		checkDarkMode()

		const observer = new MutationObserver(checkDarkMode)
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class'],
		})

		return () => observer.disconnect()
	}, [checkDarkMode])

	return (
		<section className='w-full bg-background dark:bg-[#1E1E1E] py-12 md:py-16 lg:py-20'>
			<div className='flex flex-col max-w-[1200px] mx-auto items-center gap-8 md:gap-12 px-4 md:px-6'>
				{/* Header */}
				<div className='text-center'>
					<h2 className="font-bold font-['Poppins',sans-serif] text-2xl md:text-3xl lg:text-[34px] text-center text-foreground dark:text-white leading-8 md:leading-[42px]">
						What Our Users Say
					</h2>
				</div>

				{/* Testimonials Grid */}
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full'>
					{testimonials.map((testimonial, index) => (
						<TestimonialCard
							key={`testimonial-${index}`}
							testimonial={testimonial}
							isDark={isDark}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default TestimonialsSection
