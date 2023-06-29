'use client';

import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default async function Login() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('クリック');
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
    router.push('/');
  };

  const redirectUrl = useMemo(() => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/admin`;
    }
    return '';
  }, []);

  // const onSignUp = useCallback(() => {
  //   supabase.auth.signUp({
  //     provider: 'github',
  //   });
  //   router.push('/');
  // }, [redirectUrl, supabase.auth]);

  const onLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: 'github',
    });
    router.push('/login');
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div className="flex-1 flex flex-col w-full max-w-sm justify-center gap-2">
      <button
        onClick={() => onLogin()}
        className="bg-green-700 rounded px-4 py-2 text-neutral-200 mb-6">
        Github Sign Up
      </button>
      <button
        onClick={() => signOut()}
        className="bg-green-700 rounded px-4 py-2 text-neutral-200 mb-6">
        Sign out
      </button>
    </div>
  );
}
