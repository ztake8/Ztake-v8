# Production Setup Guide

## 1. Database Setup (Supabase)
1.  Go to your [Supabase Dashboard](https://supabase.com/dashboard/project/filhifactnwfgparebub).
2.  Open the **SQL Editor**.
3.  Run the contents of `supabase/schema.sql`.
    *   *This creates the necessary tables for the chat system.*

## 2. Vercel Configuration
You must add these Environment Variables to your Vercel Project Settings:

| Variable | Value |
| :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | `https://filhifactnwfgparebub.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | *(Copy from .env.local)* |
| `TELEGRAM_BOT_TOKEN` | `8536785535:AAFp7tzzg8Q4zledywiHga_cZGOEA2Ot408` |
| `ADMIN_CHAT_ID` | `8241020985` |
| `ADMIN_PASSWORD` | `Zt@ke@2027` |

## 3. Telegram Webhook
After deploying to Vercel, run this command to connect your bot:
*(Replace `your-domain.vercel.app` with your actual Vercel domain)*

```bash
curl "https://api.telegram.org/bot8536785535:AAFp7tzzg8Q4zledywiHga_cZGOEA2Ot408/setWebhook?url=https://your-domain.vercel.app/api/webhook/telegram"
```

## 4. Admin Dashboard
- **URL**: `/admin/login`
- **Password**: `Zt@ke@2027`

## 5. Local Development
I have created `.env.local` for you.
**Restart your dev server** (`npm run dev`) to load the new credentials.
The chat should now work locally!
