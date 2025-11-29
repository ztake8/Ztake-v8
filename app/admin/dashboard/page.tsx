"use client"

import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { User, MessageSquare, Search, RefreshCw, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function AdminDashboard() {
    const [selectedUser, setSelectedUser] = useState<any>(null)
    const router = useRouter()

    // Fetch Users
    const { data: usersData, mutate: refreshUsers } = useSWR('/api/admin/users', fetcher)

    // Fetch Messages for Selected User
    const { data: messagesData, mutate: refreshMessages } = useSWR(
        selectedUser ? `/api/chat/history?userUuid=${selectedUser.user_uuid}` : null,
        fetcher,
        { refreshInterval: 3000 } // Poll every 3s for active chat
    )

    const handleLogout = async () => {
        // In a real app, call an API to clear cookie. For now, just redirect.
        // We can clear cookie by setting it to expire.
        document.cookie = 'admin_session=; Max-Age=0; path=/;'
        router.push('/admin/login')
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-200 flex">
            {/* Sidebar / User List */}
            <div className="w-80 border-r border-zinc-800 flex flex-col">
                <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
                    <h1 className="font-bold text-white flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                            <span className="text-xs font-bold text-white">Z</span>
                        </div>
                        Admin
                    </h1>
                    <button onClick={handleLogout} className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors">
                        <LogOut className="w-4 h-4" />
                    </button>
                </div>

                <div className="p-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-500" />
                        <input
                            placeholder="Search users..."
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {usersData?.users?.map((user: any) => (
                        <button
                            key={user.id}
                            onClick={() => setSelectedUser(user)}
                            className={cn(
                                "w-full p-4 flex items-start gap-3 hover:bg-zinc-900/50 transition-colors border-b border-zinc-900 text-left",
                                selectedUser?.id === user.id ? "bg-zinc-900 border-l-2 border-l-primary" : "border-l-2 border-l-transparent"
                            )}
                        >
                            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                                <User className="w-5 h-5 text-zinc-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-medium text-zinc-200 truncate">User #{user.id}</span>
                                    <span className="text-[10px] text-zinc-600">
                                        {new Date(user.created_at).toLocaleDateString()}
                                    </span>
                                </div>
                                <p className="text-xs text-zinc-500 truncate font-mono">
                                    {user.user_uuid.substring(0, 8)}...
                                </p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col bg-zinc-950">
                {selectedUser ? (
                    <>
                        {/* Chat Header */}
                        <div className="p-4 border-b border-zinc-800 bg-zinc-900/30 flex items-center justify-between backdrop-blur-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <User className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h2 className="font-bold text-white">User #{selectedUser.id}</h2>
                                    <p className="text-xs text-zinc-500 font-mono">{selectedUser.user_uuid}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => refreshMessages()} className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 transition-colors">
                                    <RefreshCw className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {messagesData?.messages?.map((msg: any) => (
                                <div
                                    key={msg.id}
                                    className={cn(
                                        "flex",
                                        msg.direction === 'admin_to_user' ? "justify-end" : "justify-start"
                                    )}
                                >
                                    <div className={cn(
                                        "max-w-xl p-4 rounded-2xl text-sm leading-relaxed",
                                        msg.direction === 'admin_to_user'
                                            ? "bg-primary text-white rounded-br-sm"
                                            : "bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-tl-sm"
                                    )}>
                                        {msg.text}
                                        <div className={cn(
                                            "text-[10px] mt-2 flex items-center gap-1 justify-end",
                                            msg.direction === 'admin_to_user' ? "text-white/70" : "text-zinc-500"
                                        )}>
                                            <span>{new Date(msg.sent_at).toLocaleString()}</span>
                                            {/* Only show ticks on ADMIN'S OWN messages (sent by admin) */}
                                            {msg.direction === 'admin_to_user' && (
                                                <span className="flex items-center ml-1">
                                                    {msg.read_at ? (
                                                        // Double green ticks - Read by user
                                                        <svg className="w-3.5 h-3.5 text-green-400" viewBox="0 0 16 16" fill="currentColor">
                                                            <path d="M13.854 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L6.5 9.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                            <path d="M15.854 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-.5-.5.708-.708.146.147 6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                        </svg>
                                                    ) : msg.delivered_at ? (
                                                        // Double grey ticks - Delivered but not read
                                                        <svg className="w-3.5 h-3.5 text-white/50" viewBox="0 0 16 16" fill="currentColor">
                                                            <path d="M13.854 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L6.5 9.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                            <path d="M15.854 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-.5-.5.708-.708.146.147 6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                        </svg>
                                                    ) : (
                                                        // Single grey tick - Sent
                                                        <svg className="w-3 h-3 text-white/50" viewBox="0 0 16 16" fill="currentColor">
                                                            <path d="M13.854 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L6.5 9.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                        </svg>
                                                    )}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Reply Input */}
                        <div className="p-4 bg-zinc-900 border-t border-zinc-800">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const form = e.target as HTMLFormElement;
                                    const input = form.elements.namedItem('message') as HTMLInputElement;
                                    const message = input.value;
                                    if (message.trim()) {
                                        // Optimistic update
                                        const tempMsg = {
                                            id: Date.now(),
                                            direction: 'admin_to_user',
                                            text: message,
                                            sent_at: new Date().toISOString()
                                        };
                                        refreshMessages({ ...messagesData, messages: [...(messagesData?.messages || []), tempMsg] }, false);

                                        // Send API request
                                        fetch('/api/admin/reply', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify({ message, userUuid: selectedUser.user_uuid })
                                        }).then(() => {
                                            input.value = '';
                                            refreshMessages();
                                        });
                                    }
                                }}
                                className="flex gap-2"
                            >
                                <input
                                    name="message"
                                    placeholder="Type a reply..."
                                    className="flex-1 bg-zinc-800 border-zinc-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 text-white"
                                    autoComplete="off"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-zinc-500">
                        <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mb-4 border border-zinc-800">
                            <MessageSquare className="w-8 h-8 opacity-50" />
                        </div>
                        <p>Select a user to view chat history</p>
                    </div>
                )}
            </div>
        </div>
    )
}
