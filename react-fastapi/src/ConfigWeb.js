import React from 'react';

function ConfigWeb() {
    return (
        <div className="flex flex-col h-screen">
            <header className="flex h-14 items-center border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                <a className="flex items-center gap-2 font-semibold" href="#" rel="ugc">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                        <path d="M12 3v6"></path>
                    </svg>
                    <span className="">WeChat Robot</span>
                </a>
                <div className="ml-auto flex gap-4">
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                        </svg>
                        <span className="sr-only">Toggle notifications</span>
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800" type="button" id="radix-:Radqfnnja:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                        <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" style={{ aspectRatio: '32/32', objectFit: 'cover' }} />
                        <span className="sr-only">Toggle user menu</span>
                    </button>
                </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                <div className="flex items-center">
                    <h1 className="font-semibold text-lg md:text-2xl">WeChat Robot 配置</h1>
                </div>
                <div className="border shadow-sm rounded-lg">
                    <div dir="ltr" data-orientation="horizontal" className="w-full">
                        <div role="tablist" aria-orientation="horizontal" className="h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground flex flex-wrap gap-2" tabIndex="0" data-orientation="horizontal" style={{ outline: 'none' }}>
                            <button type="button" role="tab" aria-selected="true" aria-controls="radix-:R6lqfnnja:-content-wechatter" data-state="active" id="radix-:R6lqfnnja:-trigger-wechatter" className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow" tabIndex="-1" data-orientation="horizontal" data-radix-collection-item="">
                                WeChatter
                            </button>
                            <button type="button" role="tab" aria-selected="false" aria-controls="radix-:R6lqfnnja:-content-wx-bot-webhook" data-state="inactive" id="radix-:R6lqfnnja:-trigger-wx-bot-webhook" className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow" tabIndex="-1" data-orientation="horizontal" data-radix-collection-item="">
                                Wx-Bot-Webhook
                            </button>
                            <button type="button" role="tab" aria-selected="false" aria-controls="radix-:R6lqfnnja:-content-admin" data-state="inactive" id="radix-:R6lqfnnja:-trigger-admin" className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow" tabIndex="-1" data-orientation="horizontal" data-radix-collection-item="">
                                Admin
                            </button>
                            <button type="button" role="tab" aria-selected="false" aria-controls="radix-:R6lqfnnja:-content-bot" data-state="inactive" id="radix-:R6lqfnnja:-trigger-bot" className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow" tabIndex="-1" data-orientation="horizontal" data-radix-collection-item="">
                                Bot
                            </button>
                            <button type="button" role="tab" aria-selected="false" aria-controls="radix-:R6lqfnnja:-content-chat" data-state="inactive" id="radix-:R6lqfnnja:-trigger-chat" className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow" tabIndex="-1" data-orientation="horizontal" data-radix-collection-item="">
                                Chat
                            </button>
                            <button type="button" role="tab" aria-selected="false" aria-controls="radix-:R6lqfnnja:-content-copilot-gpt4" data-state="inactive" id="radix-:R6lqfnnja:-trigger-copilot-gpt4" className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow" tabIndex="-1" data-orientation="horizontal" data-radix-collection-item="">
                                Copilot-GPT4
                            </button>
                            <button type="button" role="tab" aria-selected="false" aria-controls="radix-:R6lqfnnja:-content-github-webhook" data-state="inactive" id="radix-:R6lqfnnja:-trigger-github-webhook" className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow" tabIndex="-1" data-orientation="horizontal" data-radix-collection-item="">
                                GitHub-Webhook
                            </button>
                            <button type="button" role="tab" aria-selected="false" aria-controls="radix-:R6lqfnnja:-content-message-forwarding" data-state="inactive" id="radix-:R6lqfnnja:-trigger-message-forwarding" className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow" tabIndex="-1" data-orientation="horizontal" data-radix-collection-item="">
                                Message-Forwarding
                            </button>
                        </div>
                        <div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:R6lqfnnja:-trigger-wechatter" id="radix-:R6lqfnnja:-content-wechatter" tabIndex="0" className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" style={{ animationDuration: '0s' }}>
                            <div className="grid gap-4 py-4">
                                <div>
                                    <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold">WeChatter</label>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        在此处输入您的 WeChatter 信息。
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="wechatter-port">端口</label>
                                        <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="wechatter-port" placeholder="400" required="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ConfigWeb;
