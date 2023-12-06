import Image from "next/image";
import React from "react";
import image from "../../public/assets/img/blog_post.jpg";
import image2 from "../../public/assets/img/blog_post_1.jpg";

import RecentCard from "./RecentCard";

const Recent = () => {
  return (
    <>
      <section className="banner-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="crypto-image">
                <Image
                  src="/assets/img/crypto.jpg"
                  alt="cryptocrunchers"
                  className="img-fluid"
                  width={800}
                  height={600}
                />
              </div>
            </div>

            <div className="col-lg-4">
              <h1 className="heading-one white mb-5">Recent Blogs</h1>
              <RecentCard image={image} />
              <RecentCard image={image} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recent;
