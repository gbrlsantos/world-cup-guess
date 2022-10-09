import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const create = async ctx => {
	const [ type, token ] = ctx.headers.authorization.split(' ');
	
	const data = jwt.verify(token, process.env.JWT_SECRET);

	if (!ctx.request.body.homeTeamScore && !ctx.request.body.awayTeamScore) {
		 ctx.status = 400;
		 return;
	}

	const userId = data.sub;
	const { gameId } = ctx.request.body;
	const homeTeamScore = parseInt(ctx.request.body.homeTeamScore);
	const awayTeamScore = parseInt(ctx.request.body.awayTeamScore);
	
	try {
		const [guess] = await prisma.guess.findMany({
			where: { userId, gameId }
		})

		ctx.body = guess
			? await prisma.guess.update({
				where: {
					id: guess.id
				},
				data: {
					homeTeamScore,
					awayTeamScore
				}
			})
			: await prisma.guess.create({
				data: {
					userId,
					gameId,
					homeTeamScore,
					awayTeamScore
				}
			})

		ctx.status = 200;

	} catch (error) {
		console.log(error)
		ctx.body = error;
		ctx.status = 500;
	}
}

