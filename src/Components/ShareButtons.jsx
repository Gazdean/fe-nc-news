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
        <EmailIcon size={32} round />
      </EmailShareButton>
      <FacebookShareButton url={`${window.location.href}`}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={`${window.location.href}`}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton url={`${window.location.href}`}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
}
