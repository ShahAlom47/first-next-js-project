import { NextResponse } from 'next/server';

export const GET = async () => {
  const response = NextResponse.json({ message: 'Cookie has been set' });
  response.cookies.set('theme', 'dark', { path: '/' });

  return response;
}