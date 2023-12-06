import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecentCard = (props) => {
  console.log("image",props.image.src)
  const CardStyle = {
    backgroundImage: props.image.src ,
    // backgroundImage: "linear-gradient(90deg,rgba(0,0,0,.9),rgba(0,0,0,0.9)), url(/assets/img/blog_post.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="lates-blog" style={CardStyle}>
      <Image
        src="/assets/img/profile_1.jpg"
        alt="cryptocrunchers"
        width={80}
        height={80}
        className="auther-image"
      ></Image>

      <h5 className="white">Lorem ipsum dolor sit amet cons </h5>

      <p className="white">
        <b>Michel Arm</b>
      </p>

      <div className="recent_bottom">
        <div>
          <ul>
            <li>2 min read</li>
            <li>2.3k views</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>shares 628</li>
          </ul>
        </div>
{/* 
        <div className="d-flex justify-content-end">
          <Link href="#" className="read_more">
            Read More
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default RecentCard;
