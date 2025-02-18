import Image from 'next/image';
import PlayButton from '@/components/textToSpeechBtn';

interface BlogTemplateProps {
  title: string;
  stats: string;
  author: string;
  description: string;
  imageUrl: string;
  imageCaption: string;
  adText: string;
}

const BlogTemplate = ({
  title,
  stats,
  author,
  description,
  imageUrl,
  imageCaption,
  adText,
}: BlogTemplateProps) => {
  return (
    <div className="page-wrap">
      <span className="blog-title">Blog Template</span>
      <div className="textbox">
        <PlayButton/>
        <p className="blog-title" style={{ color: '#3388BB'}}>
          {title}
          <span style={{ color: '#77BBDD' }}>!</span>
          <span style={{ color: '#FF8899' }}>!</span>
          <span style={{ color: '#77DD77' }}>!</span>
          <span style={{ color: '#FFDD88' }}>!</span>
          <span style={{ color: '#7777AA' }}>!</span>
        </p>
        <p className="blog-stats" style={{ textTransform: "none", textShadow: "none" }}>{stats}</p>
        <p className="blog-author" style={{ textTransform: "none", textShadow: "none" }}>{author}</p>
        <p className="blog-description" style={{ textTransform: "none", textShadow: "none" }}>{description}</p>
        <figure className="blog-figure" style={{ textTransform: "none", textShadow: "none" }}>
          <Image src={imageUrl} width={800} height={500} alt="Blog Image" className="blog-image"/>
          <figcaption className="blog-caption">{imageCaption}</figcaption>
        </figure>
        <p className="ad-text" style={{ textTransform: "none", textShadow: "none" }}>{adText}</p>
      </div>
    </div>
  );
};

export default BlogTemplate;