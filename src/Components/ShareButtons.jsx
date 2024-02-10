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

export default function ShareButtons() {
  return (
    <div id="socials">
        <p id="share">Share</p>
      <EmailShareButton url={`${window.location.href}`}>
        <EmailIcon className="share-icons" round />
      </EmailShareButton>
      <FacebookShareButton url={`${window.location.href}`}>
        <FacebookIcon className="share-icons" round />
      </FacebookShareButton>
      <TwitterShareButton url={`${window.location.href}`}>
        <TwitterIcon className="share-icons" round />
      </TwitterShareButton>
      <WhatsappShareButton url={`${window.location.href}`}>
        <WhatsappIcon className="share-icons" round />
      </WhatsappShareButton>
    </div>
  );
}
