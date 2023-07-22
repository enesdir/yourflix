import { trpc } from '@/lib/trpc'

export const useGetUserShows = (username: string | null) => {
	const { data: shows = [], ...rest } = trpc.shows.getShowsByUser.useQuery(
		{
			username: username || '',
		},
		{ enabled: Boolean(username) }
	)

	return { shows, ...rest }
}
