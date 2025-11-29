-- Add email column to tg_users table
ALTER TABLE tg_users ADD COLUMN IF NOT EXISTS email text;

-- Add index for email lookups
CREATE INDEX IF NOT EXISTS idx_tg_users_email ON tg_users(email);
