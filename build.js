const fs = require('fs');
const path = require('path');

// Read environment variables
const SUPABASE_URL = process.env.SUPABASE_URL || 'YOUR_SUPABASE_URL_HERE';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY_HERE';
const TEAM_PASSWORD = process.env.TEAM_PASSWORD || 'YOUR_TEAM_PASSWORD_HERE';

// Create the config.js content
const configContent = `// Configuration file for Knowledge Graph
// This file is generated during build process with environment variables

window.CONFIG = {
  // Supabase Configuration
  SUPABASE_URL: '${SUPABASE_URL}',
  SUPABASE_ANON_KEY: '${SUPABASE_ANON_KEY}',
  
  // Authentication Configuration
  TEAM_PASSWORD: '${TEAM_PASSWORD}'
};`;

// Write the config.js file
fs.writeFileSync(path.join(__dirname, 'config.js'), configContent);

console.log('✅ Config.js generated with environment variables');
