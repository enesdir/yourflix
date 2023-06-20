import type { Prisma } from '@prisma/client'
import crypto from 'node:crypto'

export const createUserSelect = ({ followerId }: { followerId?: string } = {}) =>
	({
		id: true,
		name: true,
		email: true,
		username: true,
		password: true,
		image: true,
		biography: true,
		_count: { select: { show: true, follower: true, following: true } },
		...(followerId && { follower: { where: { followerId } } }),
	} satisfies Prisma.UserSelect)

export const generateUsername = ({ email }: { email: string }) =>
	`${email.split('@')[0]}-${crypto.randomBytes(3).toString('hex')}`
