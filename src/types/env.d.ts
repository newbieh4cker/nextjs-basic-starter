// 환경 변수 타입 정의
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_APP_NAME: string
    NEXT_PUBLIC_APP_URL: string
  }
}
