const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://filhifactnwfgparebub.supabase.co';
// The key provided by the user
const supabaseKey = 'sb_secret_S-yUAUlFARHF0AGmMIfMWQ_XTeFKtBD';

console.log('Testing Key:', supabaseKey);

try {
    const supabase = createClient(supabaseUrl, supabaseKey);

    async function test() {
        console.log('Attempting to fetch users...');
        const { data, error } = await supabase.from('tg_users').select('count', { count: 'exact', head: true });

        if (error) {
            console.error('❌ Connection Failed:', error.message);
            console.error('   Details:', error);
        } else {
            console.log('✅ Connection Successful!');
        }
    }

    test();
} catch (e) {
    console.error('❌ Client Initialization Failed:', e.message);
}
