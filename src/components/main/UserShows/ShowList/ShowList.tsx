import Link from 'next/link'
import type { Show } from '@/server/modules/shows/showsSchemas'
import { EmptyShowsAlert } from './EmptyShowsAlert'
import { SingleShow } from './SingleShow/SingleShow'

type ShowListProps = Readonly<{
	shows: Show[]
}>

export const ShowList = ({ shows }: ShowListProps) => {
	if (shows.length === 0) {
		return <EmptyShowsAlert />
	}

	return (
		<ol className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
			{shows.map((show) => (
				<Link key={show.id} href={`/${show.author.username}?show=${show.id}`}>
					<SingleShow show={show} />
				</Link>
			))}
		</ol>
	)
}
