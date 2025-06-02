'use client';

import { useState } from 'react';

export default function FilePathPage() {
    const [url, setUrl] = useState('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf');

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.split('/').pop() || 'downloaded-file';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-white p-6">
            <h1 className="text-xl font-bold mb-4">File Path Downloader</h1>
            <label className="block text-sm mb-2">Dropbox/Public File URL</label>
            <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <button
                onClick={handleDownload}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Download File
            </button>
        </div>
    );
}
