'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default async function Content() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const { data } = await supabase.auth.getSession();

  console.log(data.session?.user);
  if (!data.session?.user || data.session.user.id != '') {
    router.push('/');
  }

  return (
    <div className="flex-1 flex flex-col w-full max-w-sm justify-center gap-2 text-center text-neutral-400">
      {!data.session?.user || data.session.user.id === '' ? (
        <div>Main Content</div>
      ) : (
        <div>Not Content</div>
      )}
    </div>
  );
}
