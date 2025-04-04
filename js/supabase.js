// Supabase client configuration
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.38.4/+esm'

// Supabase URL and anon key (replace with your actual credentials)
const supabaseUrl = 'https://your-supabase-url.supabase.co'
const supabaseKey = 'your-supabase-anon-key'

// Create a Supabase client
const supabase = createClient(supabaseUrl, supabaseKey)

// Export for use in other files
export { supabase } 