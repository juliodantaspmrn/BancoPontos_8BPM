const SUPABASE_URL = "https://sbdrryiqvtaxuwcccvwj.supabase.co";

const SUPABASE_ANON_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNiZHJyeWlxdnRheHV3Y2NjdndqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgyMzU5NjcsImV4cCI6MjA4MzgxMTk2N30.Swd8O3bZnAzJsbSea9606oOa0GhYYNU0U-pC_iYINCQ";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
