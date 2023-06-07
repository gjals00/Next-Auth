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
          <img src="/kakao_login.png" alt="Kakao 로그인" className="loginImage" />
        </button>
        <button className="loginButton" onClick={() => signIn('naver')}>
          <img src="/naver_login.png" alt="Naver 로그인" className="loginImage" />
        </button>
        <button className="loginButton" onClick={() => signIn('github')}>
          <img src="/github_login.png" alt="GitHub 로그인" className="loginImage" />
        </button>
        <button className="loginButton" onClick={() => signIn('google')}>
          <img src="/google_login.png" alt="Google 로그인" className="loginImage" />
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
          width: auto; /* 자동으로 이미지 사이즈에 맞춤 */
          height: auto; /* 자동으로 이미지 사이즈에 맞춤 */
          padding: 0; /* 패딩 제거 */
          border: none; /* 버튼 테두리 제거 */
          background-color: transparent; /* 배경색 제거 */
          cursor: pointer; /* 커서 스타일 변경 */
          /* 다른 스타일 속성들을 추가로 설정할 수 있습니다 */
        }

        .loginButton:hover {
          /* 마우스 오버 시 적용할 스타일 */
          /* 예시: 배경색과 텍스트 색상 변경 */
          background-color: #f0f0f0;
          color: #333333;
        }

        .loginImage {
          width: 180px; /* 원하는 이미지 가로 크기 설정 */
          height: 50px; /* 원하는 이미지 세로 크기 설정 */
          /* 다른 스타일 속성들을 추가로 설정할 수 있습니다 */
        }
      `}</style>
    </div>
  );
}
