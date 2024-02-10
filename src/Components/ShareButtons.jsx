import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import shareIcon from "../icons/shareIcon.svg"
import { useState } from "react";



export default function ShareButtons() {
  const [shareOpen, setShareOpen] =useState(false)

  function handleShareOnclick(){
    shareOpen ? setShareOpen(false) : setShareOpen(true)
  }

  return (
    <div id="socials" >
     
       {shareOpen ? <div id="all-icons-container">
        <EmailShareButton id="email-icon" className="icon-container" url={`${window.location.href}`}>
          <EmailIcon className="share-icons" round />
        </EmailShareButton>
        <FacebookShareButton id="facebook-icon" className="icon-container" url={`${window.location.href}`}>
          <FacebookIcon className="share-icons" round />
        </FacebookShareButton>
        <TwitterShareButton id="twitter-icon" className="icon-container" url={`${window.location.href}`}>
          <TwitterIcon className="share-icons" round />
        </TwitterShareButton>
        <WhatsappShareButton id="whatsapp-icon" className="icon-container" url={`${window.location.href}`}>
          <WhatsappIcon className="share-icons" round />
        </WhatsappShareButton>
      </div>: null
      }
      <p onClick={handleShareOnclick} id="share"><img src={shareIcon} alt="share icon" /></p>
    </div>
  );
}
