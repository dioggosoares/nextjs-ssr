// pages/_middleware.ts
import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  //return new Response('Hello, world!')

  //return NextResponse.next();
  return NextResponse.redirect('http://localhost:3000/');
}