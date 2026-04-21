const fs = require('fs');

const configJs = `const CONFIG = {
    SUPABASE_URL: "${process.env.SUPABASE_URL}",
    SUPABASE_ANON_KEY: "${process.env.SUPABASE_ANON_KEY}"
};`;

fs.writeFileSync('config.js', configJs);
console.log('✅ config.js generated successfully!');