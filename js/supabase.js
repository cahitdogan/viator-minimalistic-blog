import supabaseConfig from './supabase.config.js'
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.38.4/+esm'

// Create a Supabase client
const supabase = createClient(supabaseConfig.url, supabaseConfig.key)

// Export for use in other files
export default supabase;