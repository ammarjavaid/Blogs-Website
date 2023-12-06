import MiniCard from "@/components/MiniCard";
import Navbar from "@/components/Navbar";
import Recent from "@/components/Recent";
import BeAware from "@/components/beAware/BeAware";
import Counter from "@/components/counter/Counter";
import CryptoCrushers from "@/components/cryptoCruchers/CryptoCrushers";
import Footer from "@/components/footer/Footer";
import Services from "@/components/services/Services";
import WhyUs from "@/components/why_us/WhyUs";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../app/blogs/blogs.scss";
import MYChart from "@/components/charts/MYChart";

import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

import Link from "next/link";
import Button from "@/common/Button";

export default function Home() {
  return (
    // <main>
    //   <section className="banner ">
    //     <Navbar />
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-lg-10 mx-auto">
    //           <h1 className="banner-heading-one">
    //             Crypto<span>Crunchers</span>
    //           </h1>
    //           <h1 className="banner-heading-two">
    //             Unlocking the Secrets of Cryptocurrency
    //           </h1>

    //           <div className="text-center mt-5">
    //             <button className="button">
    //               <div className="btn-cont">
    //                 <div className="btn-left">
    //                   <div className="btn-content btn-content-large">
    //                     Who We Are
    //                   </div>
    //                 </div>
    //                 <div className="btn-right">
    //                   <div className="btn-content">
    //                     <AiOutlineArrowRight className="icon" />
    //                   </div>
    //                 </div>
    //               </div>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="latest_cards">
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-lg-3 col-md-4">
    //             <MiniCard />
    //           </div>
    //           <div className="col-lg-3 col-md-4">
    //             <MiniCard />
    //           </div>
    //           <div className="col-lg-3 col-md-4">
    //             <MiniCard />
    //           </div>
    //           <div className="col-lg-3 col-md-4">
    //             <MiniCard />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <Recent />
    //   <CryptoCrushers />
    //   <WhyUs />
    //   <Services />
    //   <Counter />
    //   <BeAware />
    //   <Footer />
    // </main>
    <>
      <Navbar />
      <div className="hero-section">
        <div className="container hero-section-main">
          <div className="row hero-section-content">
            <div className="col-md-6">
              <h1> Blogs </h1>
              <p> Home / Blogs </p>
            </div>
            <div className="col-md-6 hero-section-img">
              <div className="img">
                <img
                  src="assets/img/hero-2.png"
                  alt=""
                  className="zoom-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------- */}

      <div className="container">
        <div className="row mt-5 mb-5 blogs-page">
          <div className="col-md-8">
            <div className="img">
              <img src="assets/img/blog-feature-img-1.jpg" alt="" />
            </div>
            <div className="blogs-content">
              <p className="date">
                August 20, 2018 by <span>Alice Bradley</span>
              </p>

              <h1> Trust in Your Intuitions </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi.
              </p>
            </div>

            <div className="beginning_of_crypto">
              <p className="beginning">
                Crypto Crushers is the beginning of something great: a currency
                without a government, something necessary and imperative.
              </p>
            </div>

            <p style={{ color: "#888", textAlign: "justify" }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore.
            </p>

            <div className="blog-content-images">
              <div className="img">
                <img src="assets/img/blog-single-img-2.jpg" alt="" />
              </div>
              <div className="img">
                <img src="assets/img/blog-single-img-1.jpg" alt="" />
              </div>
            </div>

            <div className="transaction_fee">
              <h1> Transaction fees </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi.
              </p>
            </div>

            {/* <MYChart /> */}

            <div className="blockchain">
              <div className="block-chain-left">
                <p> Blockchain, ICO, Ritecoin </p>
              </div>
              <div className="block-chain-right">
                <p>
                  Share article:
                  <span>
                    <FaFacebookF className="icon-fb" />
                    <FaXTwitter className="icon-tw" />
                    <FaLinkedinIn className="icon-linkedin" />
                  </span>
                </p>
              </div>
            </div>

            <div className="transaction_client_box">
              <div className="row align-items-center">
                <div className="col-sm-3">
                  <div className="img">
                    <img src="assets/img/blog-author-img.png" alt="" />
                  </div>
                </div>
                <div className="col-sm-9">
                  <h2> Alice Bradley </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque
                  </p>
                </div>
              </div>
            </div>

            <div className="related-posts">
              <h1> Related Posts </h1>
              <div className="row">
                <div className="col-md-4 h-100">
                  <div className="img">
                    <img src="assets/img/blog-4-img-7.jpg" alt="" />
                  </div>
                  <h4> Smart Investing </h4>
                  <p> August 20, 2018by Alice Bradley </p>
                </div>
                <div className="col-md-4 h-100">
                  <div className="img">
                    <img src="assets/img/blog-4-img-10.jpg" alt="" />
                  </div>

                  <h4> The affirmative solutions. </h4>
                  <p> August 20, 2018by Alice Bradley </p>
                </div>
                <div className="col-md-4 h-100">
                  <div className="img">
                    <img src="assets/img/blog-4-img-5.jpg" alt="" />
                  </div>
                  <h4> What is Crypto? </h4>
                  <p> August 20, 2018by Alice Bradley </p>
                </div>
              </div>
            </div>

            <div className="comments">
              <h1> Comments </h1>
              <div className="row mt-5">
                <div className="col-sm-2">
                  <div className="img">
                    <img src="assets/img/team-img-7.png" alt="" />
                  </div>
                </div>
                <div className="col-sm-10">
                  <h4>Hannah Martinez</h4>
                  <p> August 1, 2018 </p>
                  <div className="comment">
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                </div>
              </div>
              <hr />

              <div className="row mt-5">
                <div className="col-sm-2"></div>
                <div className="col-sm-10">
                  <div className="row">
                    <div className="col-sm-2">
                      <div className="img">
                        <img src="assets/img/team-img-7.png" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-10">
                      <h4>Judith Bell</h4>
                      <p> August 1, 2018 </p>
                      <div className="comment">
                        <p>
                          In enim justo, rhoncus ut, imperdiet a, venenatis
                          vitae, justo. Nullam dictum felis eu pede mollis
                          pretium. nteger tincidunt. Cras dapibus vivamus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <div className="row mt-5">
                <div className="col-sm-2">
                  <div className="img">
                    <img
                      src="assets/img/user.png"
                      alt=""
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                </div>
                <div className="col-sm-10">
                  <h4>Austin George</h4>
                  <p> August 1, 2018 </p>
                  <div className="comment">
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                </div>
              </div>
              <hr />
            </div>

            <div className="post_a_comment">
              <h1> Post a Comment </h1>
              <div className="row mt-4">
                <div className="col-md-12 mb-3">
                  <textarea rows={4} cols={5} placeholder="Comment"></textarea>
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" placeholder="Name *" />
                </div>
                <div className="col-md-6">
                  <input type="email" placeholder="Email *" />
                </div>
              </div>
              {/* <Button> Submit </Button> */}
              <button className="submit"> Submit </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="img">
              <img src="assets/img/blog-sidebar-img.jpg" alt="" />
            </div>

            <div className="latest_posts">
              <h3> Latest posts </h3>
              <div className="latest_posts_content">
                <div className="latest_posts_content_left">
                  <img src="assets/img/blog-4-img-10.jpg" alt="" />
                </div>
                <div className="latest_posts_content_right">
                  <h5> Blockchain Leaders </h5>
                  <p> August 2, 2018 </p>
                </div>
              </div>
              <div className="latest_posts_content">
                <div className="latest_posts_content_left">
                  <img src="assets/img/blog-4-img-7.jpg" alt="" />
                </div>
                <div className="latest_posts_content_right">
                  <h5> Crypto Banking </h5>
                  <p> August 2, 2018 </p>
                </div>
              </div>
              <div className="latest_posts_content">
                <div className="latest_posts_content_left">
                  <img src="assets/img/blog-single-img-2.jpg" alt="" />
                </div>
                <div className="latest_posts_content_right">
                  <h5> Check Your Balance </h5>
                  <p> August 2, 2018 </p>
                </div>
              </div>
            </div>

            <div className="updates">
              <h3> Subscribe For Updates </h3>
              <p>
                Lorem ipsum dolor sit amet, consec tetuer adipis cing elit.
                Aenean commo modo ligula
              </p>
              <div className="input">
                <input type="email" placeholder="Your Email..." />
                <FaEnvelope className="envelope" />
              </div>
            </div>

            <div className="live_cryptoCrushers">
              <h3> Live Cryptocurrency </h3>

              <div className="row mb-2">
                <div className="col-sm-4">
                  <p style={{ fontWeight: "600" }}> Bitcoin BTC </p>
                </div>
                <div className="col-sm-4">
                  <p> $37138.345622442 </p>
                </div>
                <div className="col-sm-4">
                  <p> -1.61% </p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-4">
                  <p style={{ fontWeight: "600" }}> Ethereum ETH </p>
                </div>
                <div className="col-sm-4">
                  <p> $2029.0602688581 </p>
                </div>
                <div className="col-sm-4">
                  <p> -2.84% </p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-4">
                  <p style={{ fontWeight: "600" }}> Tether USDT </p>
                </div>
                <div className="col-sm-4">
                  <p> $1.0012517471973 </p>
                </div>
                <div className="col-sm-4">
                  <p> 0.01% </p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-4">
                  <p style={{ fontWeight: "600" }}> BNB BNB </p>
                </div>
                <div className="col-sm-4">
                  <p> $226.06745646468 </p>
                </div>
                <div className="col-sm-4">
                  <p> -3.38% </p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-4">
                  <p style={{ fontWeight: "600" }}> XRP XRP </p>
                </div>
                <div className="col-sm-4">
                  <p> $0.60445661666697 </p>
                </div>
                <div className="col-sm-4">
                  <p> -4.22% </p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-4">
                  <p style={{ fontWeight: "600" }}> USDC USDC </p>
                </div>
                <div className="col-sm-4">
                  <p> $1.001239505396 </p>
                </div>
                <div className="col-sm-4">
                  <p> 0.09% </p>
                </div>
              </div>

              <div className="search_bar">
                <input type="text" placeholder="Search" />
                <IoSearchOutline className="search" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

{
  /* <button className="button">
                  <div className="btn-cont">
                    <div className="btn-left">
                      <div className="btn-content btn-content-large">
                        Who We Are
                      </div>
                      <Image
                        src="/assets/img/btn-right-large.svg"
                        alt="thnkrai"
                        className="right-svg"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="btn-right">
                      <Image
                        src="/assets/img/btn-left-large.svg"
                        alt="thnkrai"
                        className="left-svg"
                        width={100}
                        height={100}
                      />
                      <div className="btn-content">
                        <AiOutlineArrowRight className="icon" />
                      </div>
                    </div>
                  </div>
                </button> */
}
