import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>This is my Landing Page</p>
      <p>Will have animations soon.</p>
      <p>Some symbols</p>
      <Image src="/globe.svg" height={300} width={300} alt="globe"/>
      <Image src="/vercel.svg" height={300} width={300} alt="vercel"/>
      <Image src="/window.svg" height={300} width={300} alt="window"/>
    </div>
  );
}
