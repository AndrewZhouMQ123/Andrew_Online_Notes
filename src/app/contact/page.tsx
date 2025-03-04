import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <Business />
      <Personal />
    </div>
  );
}

const Business = () => {
  return (
    <div className="page-wrap">
      <h1 className="blog-title glitter-title">For Business Inquiries</h1>
      <p>Business Email: mqzhou1008@gmail.com</p>
      <p>Phone Number: 778 522 0688</p>
    </div>
  );
};

const Personal = () => {
  return (
    <div className="page-wrap">
      <h1 className="blog-title glitter-title">For Personal Inquiries</h1>
      <p>Personal Email: lolserverhascrashed@gmail.com</p>
      <p>Follow Me on:</p>
      <ul>
        <li>
          <a
            href="https://x.com/KaojiOnline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/twitter-logo.png"
              alt="Twitter"
              width="60"
              height="60"
            />
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@andrewzhou4228"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/youtube-logo.png"
              alt="YouTube"
              width="60"
              height="60"
            />
            YouTube
          </a>
        </li>
        <li>
          <a href="weixin://" target="_blank" rel="noopener noreferrer">
            <Image
              src="/wechat-logo.svg"
              alt="YouTube"
              width="80"
              height="80"
            />
            WeChat ID: andrew_zmq20021008
          </a>
        </li>
      </ul>
    </div>
  );
};
