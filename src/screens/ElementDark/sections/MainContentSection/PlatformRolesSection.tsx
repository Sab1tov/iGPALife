import { useCallback, useEffect, useState } from 'react'
import { Card, CardContent } from '../../../../components/ui/card'

const PLATFORM_ROLES = [
	{
		id: 'student',
		title: 'Student',
		description:
			'Browse and enroll in events, manage your activities, and connect with clubs.',
		lightIcon:
			'/src/assets/icons/light-mode/main-content-icons/student-svg.svg',
		darkIcon: '/src/assets/icons/dark-mode/student-svg.svg',
	},
	{
		id: 'head-of-club',
		title: 'Head of Club',
		description:
			'Create and manage events for your club, reserve rooms, and engage with members.',
		lightIcon: '/src/assets/icons/light-mode/main-content-icons/head-svg.svg',
		darkIcon: '/src/assets/icons/dark-mode/head-svg.svg',
	},
	{
		id: 'admin',
		title: 'Admin',
		description:
			'Approve event and room reservation requests, manage clubs, and oversee platform activity.',
		lightIcon: '/src/assets/icons/light-mode/main-content-icons/admin-svg.svg',
		darkIcon: '/src/assets/icons/dark-mode/admin-svg.svg',
	},
]

const PlatformRolesSection = () => {
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
		<section
			id='platform'
			className='flex flex-col w-full items-center gap-8 md:gap-12 px-4 md:px-6 py-12 md:py-16 lg:py-20 bg-background dark:bg-black'
		>
			{/* Header */}
			<div className='text-center'>
				<h2 className="font-bold font-['Poppins',sans-serif] text-2xl md:text-3xl lg:text-[34px] text-foreground dark:text-foreground leading-8 md:leading-[42px] pt-4 md:pt-10 lg:pt-8">
					A Platform for Everyone
				</h2>
			</div>

			{/* Roles Grid */}
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1200px]'>
				{PLATFORM_ROLES.map(role => (
					<Card
						key={role.id}
						className='w-full bg-white/5 dark:bg-white/5 rounded-2xl border border-white/10 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_2px_1px_-1px_rgba(0,0,0,0.2)] backdrop-blur-[10px] backdrop-brightness-100 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg'
					>
						<CardContent className='flex flex-col items-center gap-4 p-4 lg:p-[33px]'>
							{/* Icon */}
							<div className='flex justify-center items-center w-full py-[7px]'>
								<div className='w-12 h-12 flex justify-center items-center'>
									<img
										className='w-12 h-12 object-contain transition-transform duration-300 hover:scale-110'
										alt={`${role.title} icon`}
										src={isDark ? role.darkIcon : role.lightIcon}
										loading='lazy'
									/>
								</div>
							</div>

							{/* Content */}
							<div className='flex flex-col items-center gap-2 md:gap-[8.38px] pt-3 md:pt-[15px] pb-4 md:pb-[24.01px] w-full'>
								<h3 className="font-bold font-['Poppins',sans-serif] text-xl md:text-2xl text-center text-black dark:text-white leading-7 md:leading-8 overflow-hidden text-ellipsis">
									{role.title}
								</h3>
								<p className="font-normal font-['Poppins',sans-serif] text-base text-center text-[#B0BEC5] leading-6 max-w-full">
									{role.description}
								</p>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	)
}

export default PlatformRolesSection
