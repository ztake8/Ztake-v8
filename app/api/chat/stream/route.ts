import { NextRequest } from 'next/server';
import { findAnswer } from '@/lib/ztake-knowledge';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();

    if (!question || typeof question !== 'string') {
      return new Response('Invalid question', { status: 400 });
    }

    // Get answer from knowledge base
    const answer = findAnswer(question);

    // Create a streaming response with typing effect
    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        // Simulate typing effect
        const words = answer.split(' ');

        for (let i = 0; i < words.length; i++) {
          const word = words[i] + (i < words.length - 1 ? ' ' : '');
          controller.enqueue(encoder.encode(word));

          // Add delay for typing effect (faster for longer responses)
          await new Promise(resolve => setTimeout(resolve, answer.length > 200 ? 20 : 40));
        }

        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('Chat stream error:', error);
    return new Response('Internal server error', { status: 500 });
  }
}
