const fs = require('fs');

const configJs = `const CONFIG = {
    SUPABASE_URL: "${process.env.SUPABASE_URL || 'https://oswxhbcqcvtlkvqegmvv.supabase.co'}",
    SUPABASE_ANON_KEY: "${process.env.SUPABASE_ANON_KEY || 'sb_publishable_peMqjUkPKw3XYwO1n5otOw_G82_9ioP'}"
};`;

fs.writeFileSync('config.js', configJs);
console.log('✅ config.js generated successfully!');