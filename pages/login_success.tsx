import { NextPage } from 'next';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      // 로그인되지 않은 상태라면 로그인 화면으로 이동
      router.push('/');
    }
  }, [status, router]);

  const handleLogout = async () => {
    await signOut();
    router.push('/');
  };

  if (!session) {
    // 세션 데이터가 아직 로딩 중인 경우 로딩 상태를 표시하거나, 다른 대체 컨텐츠를 반환할 수 있습니다.
    return <div>Loading...</div>;
  }

  return (
    <div className="homeContainer">
      <h1 className="welcomeMessage">환영합니다, {session.user?.name}님!</h1>
      <button className="logoutButton" onClick={handleLogout}>
        로그아웃
      </button>

      <style jsx>{`
        .homeContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }

        .welcomeMessage {
          font-size: 24px;
          margin-bottom: 16px;
        }

        .logoutButton {
          padding: 8px 16px;
          background-color: #f0f0f0;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
        }

        .logoutButton:hover {
          background-color: #e0e0e0;
        }
      `}</style>
    </div>
  );
};

export default Home;
