import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      // 이미 로그인된 상태라면 login_success.tsx 파일로 이동
      router.push('/login_success');
    }
  }, [session, router]);

  return (
    <div className="loginContainer">
      <h1 className="loginTitle">로그인</h1>
      <div className="buttonContainer">
        <button className="loginButton" onClick={() => signIn('kakao')}>
          Kakao로 로그인
        </button>
        <button className="loginButton" onClick={() => signIn('naver')}>
          Naver로 로그인
        </button>
        <button className="loginButton" onClick={() => signIn('github')}>
          Github로 로그인
        </button>
      </div>

      <style jsx>{`
        .loginContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }

        .loginTitle {
          font-size: 24px;
          margin-bottom: 20px;
        }

        .buttonContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .loginButton {
          width: 250px; /* 원하는 버튼 가로 크기 설정 */
          height: 80px; /* 원하는 버튼 세로 크기 설정 */
          /* 다른 스타일 속성들을 추가로 설정할 수 있습니다 */
        }
      `}</style>
    </div>
  );
}
