import { createClient } from '@supabase/supabase-js';

// Replace these values with your actual Supabase Project URL and Anon Key
const supabaseUrl = 'https://szawewixxmwbhwzvkdcl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6YXdld2l4eG13Ymh3enZrZGNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1MTUxNDEsImV4cCI6MjA5NzA5MTE0MX0.DC0yiiK2rAQd1ftJ37UzotLH0rqylZHrI1dsXwunUGc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);