import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const jobs = await prisma.job.findMany();
  return new Response(JSON.stringify(jobs), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req) {
  const body = await req.json();
  const job = await prisma.job.create({ data: body });
  return new Response(JSON.stringify(job), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
