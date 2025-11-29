-- Add read receipt columns to messages table
ALTER TABLE tg_messages 
ADD COLUMN IF NOT EXISTS delivered_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
ADD COLUMN IF NOT EXISTS read_at timestamp with time zone;

-- Create index for efficient read status queries
CREATE INDEX IF NOT EXISTS idx_tg_messages_read_at ON tg_messages(read_at);
