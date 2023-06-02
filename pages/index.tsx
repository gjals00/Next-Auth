// import { signIn, useSession, signOut } from 'next-auth/react';

// export default function Home() {
//   const { data: session } = useSession();

//   if (session) {
//     return (
//       <>
//         {session.user?.name} hello
//         <button onClick={() => signOut()}>logout</button>
//       </>
//     );
//   }
//   return (
//     <>
//       <button className="loginButton" onClick={() => signIn("kakao")}>
//         <img src="/kakao_login.png" alt="kakao login" className="loginImage" />
//       </button>
//       <br></br>
//       <button className="loginButton" onClick={() => signIn("naver")}>
//         <img src="/naver_login.png" alt="naver login" className="loginImage" />
//       </button>

//       <style jsx>{`
//         .loginButton {
//           width: 250px; /* 원하는 버튼 가로 크기 설정 */
//           height: 80px; /* 원하는 버튼 세로 크기 설정 */
//           /* 다른 스타일 속성들을 추가로 설정할 수 있습니다 */
//         }

//         .loginImage {
//           width: 100%; /* 이미지 가로 크기를 버튼에 맞추기 위해 100%로 설정 */
//           height: 100%; /* 이미지 세로 크기를 버튼에 맞추기 위해 100%로 설정 */
//           object-fit: contain; /* 이미지를 비율 유지하며 버튼에 맞추기 위해 contain으로 설정 */
//         }
//       `}</style>
//     </>
//   );
// }

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
      <button className="loginButton" onClick={() => signIn('kakao')}>
        Kakao로 로그인
      </button>

      <br></br>
      
      <button className="loginButton" onClick={() => signIn('naver')}>
        Naver로 로그인
      </button>

      <br></br>

      <button className="loginButton" onClick={() => signIn('github')}>
        Github로 로그인
      </button>

      <style jsx>{`
        .loginButton {
          width: 250px; /* 원하는 버튼 가로 크기 설정 */
          height: 80px; /* 원하는 버튼 세로 크기 설정 */
          /* 다른 스타일 속성들을 추가로 설정할 수 있습니다 */
        }

        .loginImage {
          width: 100%; /* 이미지 가로 크기를 버튼에 맞추기 위해 100%로 설정 */
          height: 100%; /* 이미지 세로 크기를 버튼에 맞추기 위해 100%로 설정 */
          object-fit: contain; /* 이미지를 비율 유지하며 버튼에 맞추기 위해 contain으로 설정 */
        }
      `}</style>
    </div>
  );
}


