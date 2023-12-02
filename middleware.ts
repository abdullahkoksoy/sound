import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Retrieve Supabase URL and key from environment variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Check if Supabase URL and key are provided
  if (!supabaseUrl || !supabaseKey) {
    const errorMessage = 'Supabase URL and/or key not provided';
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  try {
    // Create Supabase client using createMiddlewareClient
    const supabase = createMiddlewareClient({ req, res });

    // Use the supabase client as needed
    await supabase.auth.getSession();

    return res;
  } catch (error) {
    console.error('Error in Supabase middleware:', error);
    throw error; // Rethrow the error to propagate it further
  }
}