// WxBotWebhook.js
import React from 'react';

function WeChatter() {
    return (
        <div className="border-4 border-dashed border-gray-200 rounded-lg mb-6">
            <div className="flex flex-col items-center justify-center h-full">
                <div className="text-center">
                    <h3 className="mb-4 text-lg leading-6 font-medium text-gray-900">
                        WeChatter
                    </h3>
                    <p className="mb-4 text-sm leading-5 text-gray-500">
                        在此处输入您的 WeChatter 信息。
                    </p>
                    <input type="text"
                           className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                           placeholder="请输入"/>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md">
                        保存
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WeChatter;
