import { signIn, useSession, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session.user?.name} hello
        <button onClick={() => signOut()}>logout</button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn("kakao")}>
        <img src="/kakao_login.png" alt='kakao login'/> 
      </button>
    </>
  );
}
