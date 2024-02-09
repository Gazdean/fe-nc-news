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
        <p>Share</p>
      <EmailShareButton url={`${window.location.href}`}>
        <EmailIcon size={20} round />
      </EmailShareButton>
      <FacebookShareButton url={`${window.location.href}`}>
        <FacebookIcon size={20} round />
      </FacebookShareButton>
      <TwitterShareButton url={`${window.location.href}`}>
        <TwitterIcon size={20} round />
      </TwitterShareButton>
      <WhatsappShareButton url={`${window.location.href}`}>
        <WhatsappIcon size={20} round />
      </WhatsappShareButton>
    </div>
  );
}
