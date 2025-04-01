import Image from "next/image";
import PlayButton from "@/components/textToSpeechBtn";

interface BlogTemplateProps {
  title: string;
  subtitle: string;
  stats: string;
  author: string;
  description: string;
  imageUrl?: string;
  imageCaption?: string;
  adText?: string;
}

const BlogTemplate = ({
  title,
  subtitle,
  stats,
  author,
  description,
  imageUrl,
  imageCaption,
  adText,
}: BlogTemplateProps) => {
  const blogText = `${title}\n${subtitle}\n${stats}\n${author}\n${description}`;
  return (
    <div className="page-wrap">
      {title && <h1 className="blog-title glitter-title">{title}</h1>}
      <PlayButton text={blogText} />
      <div className="textbox">
        <h1
          className={title ? "blog-subtitle" : "blog-title"}
          style={{ color: "#3388BB" }}
        >
          {subtitle}
        </h1>
        {stats && (
          <p
            className="blog-stats"
            style={{ textTransform: "none", textShadow: "none" }}
          >
            {stats}
          </p>
        )}
        <p
          className="blog-author"
          style={{ textTransform: "none", textShadow: "none" }}
        >
          {author}
        </p>
        <p
          className="blog-description"
          style={{ textTransform: "none", textShadow: "none" }}
        >
          {description}
        </p>
        {imageUrl && (
          <figure
            className="blog-figure"
            style={{ textTransform: "none", textShadow: "none" }}
          >
            <Image
              src={imageUrl}
              width={800}
              height={500}
              alt="Blog Image"
              className="blog-image"
            />
            {imageCaption && (
              <figcaption className="blog-caption">{imageCaption}</figcaption>
            )}
          </figure>
        )}
        {adText && (
          <p
            className="ad-text"
            style={{ textTransform: "none", textShadow: "none" }}
          >
            {adText}
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogTemplate;
