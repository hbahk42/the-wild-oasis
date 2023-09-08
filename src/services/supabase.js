import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://gptgngxsqvruzvoybkki.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwdGduZ3hzcXZydXp2b3lia2tpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzNzMwNDAsImV4cCI6MjAwODk0OTA0MH0.efU7lVO1NRU-j9jrGHWVnLusK4oNhr3-ZkYUn8tC2SA"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;