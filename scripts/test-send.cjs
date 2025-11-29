const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://filhifactnwfgparebub.supabase.co';
const supabaseKey = 'sb_secret_S-yUAUlFARHF0AGmMIfMWQ_XTeFKtBD';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testSend() {
    console.log('Testing Write Permissions...');
    const userUuid = 'test-uuid-' + Date.now();

    try {
        // 1. Create User
        console.log('Creating user:', userUuid);
        const { data: user, error: createError } = await supabase
            .from('tg_users')
            .insert({ user_uuid: userUuid })
            .select()
            .single();

        if (createError) {
            console.error('❌ Create User Failed:', createError);
            return;
        }
        console.log('✅ User Created:', user.id);

        // 2. Insert Message
        console.log('Inserting message...');
        const { error: msgError } = await supabase
            .from('tg_messages')
            .insert({
                user_id: user.id,
                direction: 'user_to_admin',
                text: 'Test message from script'
            });

        if (msgError) {
            console.error('❌ Insert Message Failed:', msgError);
            return;
        }
        console.log('✅ Message Inserted!');

    } catch (e) {
        console.error('❌ Unexpected Error:', e);
    }
}

testSend();
