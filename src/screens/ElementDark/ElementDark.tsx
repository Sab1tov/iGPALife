import { FooterSection } from './sections/FooterSection'
import { HeaderSection } from './sections/HeaderSection'
import { MainContentSection } from './sections/MainContentSection/MainContentSection'

export const ElementDark = (): JSX.Element => {
	return (
		<div className='flex flex-col w-full items-start bg-background dark:bg-background'>
			<HeaderSection />
			<MainContentSection />
			<FooterSection />
		</div>
	)
}
