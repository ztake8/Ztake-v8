const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://filhifactnwfgparebub.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpbGhpZmFjdG53ZmdwYXJlYnViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0MzIwNDYsImV4cCI6MjA4MDAwODA0Nn0.vraK_msg0M6YI1cKpbWYWyV3r3d0hC9TCmdtacXfL4I';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
    console.log('Testing Supabase Connection...');

    try {
        // 1. Test Connection
        const { data, error } = await supabase.from('tg_users').select('count', { count: 'exact', head: true });

        if (error) {
            console.error('❌ Connection Failed:', error.message);
            if (error.code === '42P01') {
                console.error('   -> REASON: Table "tg_users" does not exist. You need to run the SQL schema!');
            }
        } else {
            console.log('✅ Connection Successful!');
            console.log('✅ Table "tg_users" exists.');
        }

        // 2. Test Messages Table
        const { error: msgError } = await supabase.from('tg_messages').select('count', { count: 'exact', head: true });
        if (msgError) {
            console.error('❌ Table "tg_messages" check failed:', msgError.message);
        } else {
            console.log('✅ Table "tg_messages" exists.');
        }

    } catch (e) {
        console.error('Unexpected error:', e);
    }
}

testConnection();
