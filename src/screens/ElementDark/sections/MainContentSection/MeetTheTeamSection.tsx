import { Avatar } from '../../../../components/ui/avatar'
import { Card, CardContent } from '../../../../components/ui/card'

// Types
interface TeamMember {
	initial: string
	name: string
	role: string
}

interface TeamMemberCardProps {
	member: TeamMember
	size?: 'small' | 'default'
}

const teamMembers = [
	{
		initial: 'M',
		name: 'Monti',
		role: 'Project Manager',
	},
	{
		initial: 'B',
		name: 'Beimbet',
		role: 'UI/UX Designer',
	},
	{
		initial: 'A',
		name: 'Archy',
		role: 'Lead Frontend Developer',
	},
	{
		initial: 'Y',
		name: 'Yasin',
		role: 'Frontend Developer',
	},
	{
		initial: 'N',
		name: 'Nurdaulet',
		role: 'Backend Developer',
	},
]

// Team Member Card Component
const TeamMemberCard = ({ member, size = 'default' }: TeamMemberCardProps) => {
	const sizeClasses = {
		small: {
			avatar: 'w-16 h-16 text-2xl',
			card: 'p-4',
			content: 'pt-2 pb-3 px-2',
			name: 'text-lg leading-6',
			role: 'text-xs leading-4',
		},
		default: {
			avatar: 'w-20 h-20 text-[32px]',
			card: 'p-[25px]',
			content: 'pt-4 pb-6 px-4',
			name: 'text-xl leading-8',
			role: 'text-sm md:text-base leading-5 md:leading-6',
		},
	} as const

	const classes = sizeClasses[size]

	return (
		<Card className='w-full bg-white/60 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.3)] backdrop-blur-[10px] hover:bg-white/80 dark:hover:bg-white/8 hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] dark:hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-[1.02] group'>
			<CardContent
				className={`flex flex-col items-center gap-4 ${classes.card}`}
			>
				<Avatar
					className={`${classes.avatar} bg-[#f50057] dark:bg-[#FF4081] text-white dark:text-[#121212] font-normal font-['Poppins',sans-serif] flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}
				>
					<span className='w-full h-full flex items-center justify-center'>
						{member.initial}
					</span>
				</Avatar>
				<div className={`flex flex-col items-center ${classes.content} w-full`}>
					<h3
						className={`font-bold font-['Poppins',sans-serif] ${classes.name} text-center text-[#212121] dark:text-white`}
					>
						{member.name}
					</h3>
					<p
						className={`font-normal font-['Poppins',sans-serif] ${classes.role} text-center text-[#757575] dark:text-[#B0BEC5] max-w-full mt-1`}
					>
						{member.role}
					</p>
				</div>
			</CardContent>
		</Card>
	)
}

const MeetTheTeamSection = () => (
	<section className='flex flex-col w-full items-center gap-8 md:gap-12 px-4 md:px-6 py-12 md:py-16 lg:py-20 bg-background dark:bg-black'>
		{/* Header */}
		<div className='text-center'>
			<h2 className="font-bold font-['Poppins',sans-serif] text-2xl md:text-3xl lg:text-[34px] text-center text-foreground dark:text-foreground leading-8 md:leading-[42px]">
				Meet the Team
			</h2>
		</div>

		{/* Mobile Layout - Single Column */}
		<div className='md:hidden w-full max-w-[400px] space-y-6'>
			{teamMembers.map((member, index) => (
				<TeamMemberCard
					key={`member-mobile-${index}`}
					member={member}
					size='small'
				/>
			))}
		</div>

		{/* Tablet Layout - 2 Columns */}
		<div className='hidden md:block lg:hidden w-full max-w-[800px]'>
			<div className='grid grid-cols-2 gap-6'>
				{teamMembers.slice(0, -1).map((member, index) => (
					<TeamMemberCard key={`member-tablet-${index}`} member={member} />
				))}
			</div>

			{/* Center last card if odd number */}
			{teamMembers.length % 2 === 1 && (
				<div className='flex justify-center mt-6'>
					<div className='w-1/2 max-w-[400px]'>
						<TeamMemberCard member={teamMembers[teamMembers.length - 1]} />
					</div>
				</div>
			)}
		</div>

		{/* Desktop Layout - 5 Columns */}
		<div className='hidden lg:grid lg:grid-cols-5 gap-8 w-full max-w-[1200px]'>
			{teamMembers.map((member, index) => (
				<TeamMemberCard key={`member-desktop-${index}`} member={member} />
			))}
		</div>
	</section>
)

export default MeetTheTeamSection
