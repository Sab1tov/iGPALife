import HeroSection from './HeroSection'
import HowItWorksSection from './HowItWorksSection'
import MeetTheTeamSection from './MeetTheTeamSection'
import PlatformRolesSection from './PlatformRolesSection'
import TestimonialsSection from './TestimonialsSection'

export const MainContentSection = (): JSX.Element => {
	return (
		<section className='w-full'>
			<HeroSection />
			<PlatformRolesSection />
			<HowItWorksSection />
			<MeetTheTeamSection />
			<TestimonialsSection />
		</section>
	)
}
