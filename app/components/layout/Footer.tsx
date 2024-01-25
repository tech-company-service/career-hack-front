import Link from 'next/link';
import React from 'react';

export const Footer: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <footer className="bg-gray-200 p-4">
      <div className="max-w-screen-lg mx-auto flex justify-between">
        <Link href="/terms" legacyBehavior>
          <a className="text-gray-700 hover:text-gray-900 text-sm">利用規約</a>
        </Link>
        <Link href="/privacy" legacyBehavior>
          <a className="text-gray-700 hover:text-gray-900 text-sm">Privacy Policy</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="text-gray-700 hover:text-gray-900 text-sm">会社概要</a>
        </Link>
      </div>
    </footer>
  );
};
