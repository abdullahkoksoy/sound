import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Retrieve Supabase URL and key from environment variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Check if Supabase URL and key are provided
  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase URL and/or key not provided');
    throw new Error('Supabase URL and/or key not provided');
  }

  try {
    // Set the Supabase URL and key as environment variables
    process.env.SUPABASE_URL = supabaseUrl;
    process.env.SUPABASE_KEY = supabaseKey;

    // Create Supabase client using createMiddlewareClient
    const supabase = createMiddlewareClient({ req, res });

    // Use the supabase client as needed
    const session = await supabase.auth.getSession();

    // If needed, handle the session or perform additional logic

    return res;
  } catch (error) {
    console.error('Error in Supabase middleware:', error);
    throw error; // Rethrow the error to propagate it further
  } finally {
    // Clean up environment variables if needed
    delete process.env.SUPABASE_URL;
    delete process.env.SUPABASE_KEY;
  }
}