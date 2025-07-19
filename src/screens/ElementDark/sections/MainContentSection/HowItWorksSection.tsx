import { Card, CardContent } from '../../../../components/ui/card'

const howItWorks = [
	{
		number: '01',
		title: 'Find Your Club',
		description:
			'Discover and join university clubs that match your interests.',
	},
	{
		number: '02',
		title: 'Enroll in Events',
		description:
			'Easily sign up for events, workshops, and activities hosted by clubs.',
	},
	{
		number: '03',
		title: 'Track Your Activities',
		description:
			'Keep a record of all your social and extracurricular activities in one place.',
	},
]

const HowItWorksSection = () => (
	<section className='flex flex-col w-full items-center gap-8 md:gap-12 px-4 md:px-6 py-12 md:py-16 lg:py-20 bg-background dark:bg-black'>
		{/* Header */}
		<div className='text-center'>
			<h2 className="font-bold font-['Poppins',sans-serif] text-2xl md:text-3xl lg:text-[34px] text-center text-foreground dark:text-foreground leading-8 md:leading-[42px]">
				How It Works
			</h2>
		</div>

		{/* Steps Grid */}
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1200px]'>
			{howItWorks.map((step, index) => (
				<Card
					key={`step-${index}`}
					className='w-full bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(255,255,255,0.05)] rounded-2xl border border-solid border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.1)] backdrop-blur-[10px] hover:bg-[rgba(255,255,255,0.8)] dark:hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 hover:shadow-lg'
				>
					<CardContent className='flex flex-col items-center p-6 lg:p-[33px] h-full relative min-h-[280px]'>
						{/* Number Badge */}
						<div className='flex w-14 h-14 items-center justify-center absolute top-6 md:top-[33px] left-1/2 -translate-x-1/2 bg-[#1976D2] dark:bg-[#00BCD4] rounded-[28px] shadow-md hover:scale-105 transition-transform duration-200'>
							<span className="font-bold font-['Poppins',sans-serif] text-white text-xl text-center leading-5">
								{step.number}
							</span>
						</div>

						{/* Content */}
						<div className='w-full items-center flex flex-col mt-20 md:mt-[105px] space-y-3'>
							<h3 className="font-bold font-['Poppins',sans-serif] text-lg md:text-xl text-center text-[#212121] dark:text-white leading-7 md:leading-8">
								{step.title}
							</h3>
							<p className="font-normal font-['Poppins',sans-serif] text-base text-center text-[#757575] dark:text-[#B0BEC5] leading-6 max-w-full">
								{step.description}
							</p>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	</section>
)
export default HowItWorksSection
