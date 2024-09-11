import React from "react";
import { createContext, useState } from "react";
export const circularcontextcreate = createContext();
//whatsnew images
import WhatsNewImage1 from "../../assets/Cicular-images/whats-new-images/what_s-new-_-botanical-bliss.jpg";
import WhatsNewImage2 from "../../assets/Cicular-images/whats-new-images/unstitched-what_s-new_adf1450e-e5a8-4898-b145-1fb4f8768a80.avif";
import WhatsNewImage3 from "../../assets/Cicular-images/whats-new-images/what_s-new-_-mommy-_-me.avif";
import WhatsNewImage4 from "../../assets/Cicular-images/whats-new-images/what_s-new-_-the-resort-edit.avif";
import WhatsNewImage5 from "../../assets/Cicular-images/whats-new-images/what_s-new-_-classic-chikankari.avif";
import WhatsNewImage6 from "../../assets/Cicular-images/whats-new-images/man-what_s-new.jpg";
import WhatsNewImage7 from "../../assets/Cicular-images/whats-new-images/fragrance-what_s-new.avif";
import WhatsNewImage8 from "../../assets/Cicular-images/whats-new-images/whats_new___home_d9857c45-a5ad-4e38-918d-e480d1306f26.avif";
//woman images
import WomanImage1 from "../../assets/Cicular-images/woman-images/unstitched_6d3e02bb-84a1-4f21-90e2-02be6f49ee1d.avif";
// import WomanImage1 from "../../assets/Collection-images/woman-images/ReadyToWear/2SDF24V220ST_3_3efe4b37-987c-45b0-9350-55dbaf246974.webp";
import WomanImage2 from "../../assets/Cicular-images/woman-images/RTW_710118f3-6404-4752-980c-6b8d1ac7a5ad.avif";
import WomanImage3 from "../../assets/Cicular-images/woman-images/WEST_d81b98e6-8d6e-489c-92fa-153aec423de4.avif";
import WomanImage4 from "../../assets/Cicular-images/woman-images/woman-sleepwear.avif";
import WomanImage5 from "../../assets/Cicular-images/woman-images/Abayas_8818d687-630c-41c8-9de2-caa901040011.avif";
//man images
import ManImage1 from "../../assets/Cicular-images/man-images/man___unstitched.avif";
import ManImage2 from "../../assets/Cicular-images/man-images/Men-stitched_8db9b0f1-9883-49ae-9123-43c6f72d1773.avif";

function CircularArrayProvider(props) {
  // console.log("CircularArrayProvider component rendered"); // Add this line
  let CircularFullData = {
    WhatsNew: [
      {
        img: WhatsNewImage1,
        title_html: (
          <span>
            Botanical Bliss <br /> Ready to Wear
          </span>
        ),
      },
      {
        img: WhatsNewImage2,
        title_html: (
          <span>
            Signature <br /> Unstitched
          </span>
        ),
      },
      {
        img: WhatsNewImage3,
        title_html: <span> Mommy &amp; Me</span>,
      },
      {
        img: WhatsNewImage4,
        title_html: (
          <span>
            The Resort Edit <br /> WEST
          </span>
        ),
      },
      {
        img: WhatsNewImage5,
        title_html: (
          <span>
            Chikankari <br /> Ready to Wear
          </span>
        ),
      },
      {
        img: WhatsNewImage6,
        title_html: (
          <span>
            Men's Stitched <br /> Summer New Arrivals
          </span>
        ),
      },
      {
        img: WhatsNewImage7,
        title_html: <span>Fragrances</span>,
      },
      { img: WhatsNewImage8, title_html: <span>Home</span> },
    ],
    Woman: [
      {
        img: WomanImage1,
        title_html: <span>Unstitched</span>,
        href_link: "/Collection/unstitched",
      },
      {
        img: WomanImage2,
        title_html: <span>Ready To Wear</span>,
        href_link: "/Collection/ready-to-wear",
      },
      {
        img: WomanImage3,
        title_html: <span> West</span>,
        href_link: "/Collection/west",
      },
      {
        img: WomanImage4,
        title_html: <span>Sleepwear</span>,
        href_link: "/Collection/sleepwear",
      },
      {
        img: WomanImage5,
        title_html: <span>Modest Wear</span>,
        href_link: "/Collection/modestwear",
      },
    ],
    Man: [
      {
        img: ManImage1,
        title_html: <span>Unstitched</span>,
      },
      {
        img: ManImage2,
        title_html: <span>Stitched</span>,
      },
    ],
    Kids: [
      {
        img: WhatsNewImage1,
        title_html: (
          <span>
            Botanical Bliss <br /> Ready to Wear
          </span>
        ),
      },
      {
        img: WhatsNewImage2,
        title_html: (
          <span>
            Signature <br /> Unstitched
          </span>
        ),
      },
      {
        img: WhatsNewImage3,
        title_html: <span> Mommy &amp; Me</span>,
      },
      {
        img: WhatsNewImage4,
        title_html: (
          <span>
            The Resort Edit <br /> WEST
          </span>
        ),
      },
      {
        img: WhatsNewImage5,
        title_html: (
          <span>
            Chikankari <br /> Ready to Wear
          </span>
        ),
      },
      {
        img: WhatsNewImage6,
        title_html: (
          <span>
            Men's Stitched <br /> Summer New Arrivals
          </span>
        ),
      },
      {
        img: WhatsNewImage7,
        title_html: <span>Fragrances</span>,
      },
      { img: WhatsNewImage8, title_html: <span>Home</span> },
    ],
    Beauty: [
      {
        img: WhatsNewImage1,
        title_html: (
          <span>
            Botanical Bliss <br /> Ready to Wear
          </span>
        ),
      },
      {
        img: WhatsNewImage2,
        title_html: (
          <span>
            Signature <br /> Unstitched
          </span>
        ),
      },
      {
        img: WhatsNewImage3,
        title_html: <span> Mommy &amp; Me</span>,
      },
      {
        img: WhatsNewImage4,
        title_html: (
          <span>
            The Resort Edit <br /> WEST
          </span>
        ),
      },
      {
        img: WhatsNewImage5,
        title_html: (
          <span>
            Chikankari <br /> Ready to Wear
          </span>
        ),
      },
      {
        img: WhatsNewImage6,
        title_html: (
          <span>
            Men's Stitched <br /> Summer New Arrivals
          </span>
        ),
      },
      {
        img: WhatsNewImage7,
        title_html: <span>Fragrances</span>,
      },
      { img: WhatsNewImage8, title_html: <span>Home</span> },
    ],
    Accessories: [
      {
        img: WhatsNewImage1,
        title_html: (
          <span>
            Botanical Bliss <br /> Ready to Wear
          </span>
        ),
      },
      {
        img: WhatsNewImage2,
        title_html: (
          <span>
            Signature <br /> Unstitched
          </span>
        ),
      },
      {
        img: WhatsNewImage3,
        title_html: <span> Mommy &amp; Me</span>,
      },
      {
        img: WhatsNewImage4,
        title_html: (
          <span>
            The Resort Edit <br /> WEST
          </span>
        ),
      },
      {
        img: WhatsNewImage5,
        title_html: (
          <span>
            Chikankari <br /> Ready to Wear
          </span>
        ),
      },
      {
        img: WhatsNewImage6,
        title_html: (
          <span>
            Men's Stitched <br /> Summer New Arrivals
          </span>
        ),
      },
      {
        img: WhatsNewImage7,
        title_html: <span>Fragrances</span>,
      },
      { img: WhatsNewImage8, title_html: <span>Home</span> },
    ],
    Home: [
      {
        img: WhatsNewImage1,
        title_html: (
          <span>
            Botanical Bliss <br /> Ready to Wear
          </span>
        ),
      },
      {
        img: WhatsNewImage2,
        title_html: (
          <span>
            Signature <br /> Unstitched
          </span>
        ),
      },
      {
        img: WhatsNewImage3,
        title_html: <span> Mommy &amp; Me</span>,
      },
      {
        img: WhatsNewImage4,
        title_html: (
          <span>
            The Resort Edit <br /> WEST
          </span>
        ),
      },
      {
        img: WhatsNewImage5,
        title_html: (
          <span>
            Chikankari <br /> Ready to Wear
          </span>
        ),
      },
      {
        img: WhatsNewImage6,
        title_html: (
          <span>
            Men's Stitched <br /> Summer New Arrivals
          </span>
        ),
      },
      {
        img: WhatsNewImage7,
        title_html: <span>Fragrances</span>,
      },
      { img: WhatsNewImage8, title_html: <span>Home</span> },
    ],
  };

  const [circularData, setCircularData] = useState(CircularFullData);
  // console.log("CircularData:", circularData); // Add this line

  return (
    <div>
      <circularcontextcreate.Provider value={{ circularData, setCircularData }}>
        {props.children}
      </circularcontextcreate.Provider>
    </div>
  );
}

export default CircularArrayProvider;
