"use client";

import { useSession, signIn } from 'next-auth/react';
import React from 'react';

export default function Login() {
	const { data: session, status } = useSession();

	if (status === 'loading') {
		return <div>Loading...</div>;
	}

	if (status !== 'authenticated') {
		return (
      <div>
        <div>
          <p>あなたはログインしていません</p>
          <button onClick={() => signIn('google', {}, { prompt: 'login' })}>
            Googleでログイン
          </button>
        </div>
        <div>
          <button onClick={() => signIn('github', {}, { prompt: 'login' })}>
            GitHubでログイン
          </button>
        </div>
      </div>
		);
	}
	return null;
}
