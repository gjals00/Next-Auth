import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import styles from '@/styles/login.module.css';

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

    <div className={styles.loginContainer}>
      <div className={styles.buttonContainer}>
        <h1>Login</h1>
        <button className={styles.loginButton} onClick={() => signIn('kakao')}>
          <img src="/kakao_login.png" alt="Kakao 로그인" className={styles.loginImage} />
        </button>
        <button className={styles.loginButton} onClick={() => signIn('naver')}>
          <img src="/naver_login.png" alt="Naver 로그인" className={styles.loginImage} />
        </button>
        <button className={styles.loginButton} onClick={() => signIn('github')}>
          <img src="/github_login.png" alt="GitHub 로그인" className={styles.loginImage} />
        </button>
        <button className={styles.loginButton} onClick={() => signIn('google')}>
          <img src="/google_login.png" alt="Google 로그인" className={styles.loginImage} />
        </button>
      </div>
    </div>
  );
}
