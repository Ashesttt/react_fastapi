import React from "react";
import axios from "axios";
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import WxBotWebhook from "./ui/WxBotWebhook";
import WeChatter from "./ui/WeChatter";

function App() {
    const [data, setData] = React.useState();//React.useState()是一个hook，用来在函数组件中添加state状态
    const url = "http://127.0.0.1:8000";

    const GetData = () => {
        axios.get(url).then((res) => {//这里是什么意思：用axios发送一个get请求，然后用then来处理返回的数据
            setData(res.data);
        });
    };

    // return (
    //     <div>
    //         <div>我把处理写在这里</div>
    //         {data ? <div>{data.Hello}</div> : <button onClick={GetData}>获取数据</button>}
    //         <ConfigWeb/>
    //         <div className="min-h-screen bg-gray-100">
    //             {/* Your hhh.html content goes here */}
    //             {/* ... */}
    //         </div>
    //     </div>
    // );


    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <nav className="bg-white shadow">
                    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="-ml-2 mr-2 flex items-center md:hidden">
                                    <button
                                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition">
                                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M4 6h16M4 12h16m-7 6h7"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex-shrink-0 flex items-center">
                                    <img className="block lg:hidden h-8 w-auto" src="https://placehold.co/32x32"
                                         alt="Workflow logo"/>
                                    <img className="hidden lg:block h-8 w-auto" src="https://placehold.co/32x32"
                                         alt="Workflow logo"/>
                                </div>
                                <div className="hidden md:ml-6 md:flex md:space-x-8">
                                    <Link to="/WeChatter"
                                          className="border-b-2 border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:border-indigo-700 transition">
                                        WeChatter
                                    </Link>
                                    <Link to="/Wx-Bot-Webhook"
                                          className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition">
                                        Wx-Bot-Webhook
                                    </Link>
                                    <a href="Admin"
                                       className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition">
                                        Admin
                                    </a>
                                    <a href="Bot"
                                       className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition">
                                        Bot
                                    </a>
                                    <a href="Chat"
                                       className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition">
                                        Chat
                                    </a>
                                    <a href="Copilot-GPT4"
                                       className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition">
                                        Copilot-GPT4
                                    </a>
                                    <a href="GitHub-Webhook"
                                       className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition">
                                        GitHub-Webhook
                                    </a>
                                    <a href="Message-Forwarding"
                                       className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition">
                                        Message-Forwarding
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <button
                                        className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition">
                                        <span>Search</span>
                                    </button>
                                </div>
                                <div className="ml-3 relative">
                                    <div>
                                        <button
                                            className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid transition">
                                            <img className="h-8 w-8 rounded-full" src="https://placehold.co/32x32"
                                                 alt="User avatar"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold leading-tight text-gray-900">
                            WeChat Robot 配置
                        </h1>
                    </div>
                </header>

                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <div className="px-4 py-6 sm:px-0">
                            <Routes>
                                <Route path="/WeChatter" element={<WeChatter />} />
                                <Route path="/Wx-Bot-Webhook" element={<WxBotWebhook />} />
                            </Routes>
                            {/*/!* WeChatter 配置 *!/*/}
                            {/*<div className="border-4 border-dashed border-gray-200 rounded-lg mb-6">*/}
                            {/*    <div className="flex flex-col items-center justify-center h-full">*/}
                            {/*        <div className="text-center">*/}
                            {/*            <h3 className="mb-4 text-lg leading-6 font-medium text-gray-900">*/}
                            {/*                WeChatter*/}
                            {/*            </h3>*/}
                            {/*            <p className="mb-4 text-sm leading-5 text-gray-500">*/}
                            {/*                在此处输入您的 WeChatter 信息。*/}
                            {/*            </p>*/}
                            {/*            <input type="text"*/}
                            {/*                   className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"*/}
                            {/*                   placeholder="请输入"/>*/}
                            {/*            <button*/}
                            {/*                className="mt-4 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md">*/}
                            {/*                保存*/}
                            {/*            </button>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*/!* Wx-Bot-Webhook 配置 *!/*/}
                            {/*<div className="border-4 border-dashed border-gray-200 rounded-lg mb-6">*/}
                            {/*    <div className="flex flex-col items-center justify-center h-full">*/}
                            {/*        <div className="text-center">*/}
                            {/*            <h3 className="mb-4 text-lg leading-6 font-medium text-gray-900">*/}
                            {/*                Wx-Bot-Webhook*/}
                            {/*            </h3>*/}
                            {/*            <p className="mb-4 text-sm leading-5 text-gray-500">*/}
                            {/*                在此处输入您的 Wx-Bot-Webhook 信息。*/}
                            {/*            </p>*/}
                            {/*            <input type="text"*/}
                            {/*                   className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"*/}
                            {/*                   placeholder="请输入"/>*/}
                            {/*            <button*/}
                            {/*                className="mt-4 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md">*/}
                            {/*                保存*/}
                            {/*            </button>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*/!* Admin 配置 *!/*/}
                            {/*<div className="border-4 border-dashed border-gray-200 rounded-lg mb-6">*/}
                            {/*    <div className="flex flex-col items-center justify-center h-full">*/}
                            {/*        <div className="text-center">*/}
                            {/*            <h3 className="mb-4 text-lg leading-6 font-medium text-gray-900">*/}
                            {/*                Admin*/}
                            {/*            </h3>*/}
                            {/*            <p className="mb-4 text-sm leading-5 text-gray-500">*/}
                            {/*                在此处输入您的 Admin 信息。*/}
                            {/*            </p>*/}
                            {/*            <input type="text"*/}
                            {/*                   className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"*/}
                            {/*                   placeholder="请输入"/>*/}
                            {/*            <button*/}
                            {/*                className="mt-4 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md">*/}
                            {/*                保存*/}
                            {/*            </button>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/* Add other configuration sections here */}
                            {/* Example: */}
                            {/* <div className="border-4 border-dashed border-gray-200 rounded-lg mb-6">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-center">
                  <h3 className="mb-4 text-lg leading-6 font-medium text-gray-900">
                    Your Configuration Title
                  </h3>
                  <p className="mb-4 text-sm leading-5 text-gray-500">
                    Your configuration description.
                  </p>
                  <input type="text"
                    className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    placeholder="Your input placeholder" />
                  <button
                    className="mt-4 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md">
                    Save
                  </button>
                </div>
              </div>
            </div> */}
                            {/* Add other configuration sections as per your requirement */}
                        </div>
                    </div>

                </main>

            </div>
        </Router>
    );

}

export default App;
