import { Title, Wrapper, Label, Input } from '../../../styles/01-02-emotion';

export default function EmotionPage() {
  // 여기는 자바스크립트 쓰는 곳
  return (
    <Wrapper>
      <Title>로그인</Title>
      <Label>아이디</Label>
      <Input type="text" />
      <Label>비밀번호</Label>
      <Input type="password" />
    </Wrapper>
  );
}
