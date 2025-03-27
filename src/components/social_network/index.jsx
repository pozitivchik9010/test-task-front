import google from "../../svg/social/google.svg";
import telegram from "../../svg/social/telegram.svg";
import apple from "../../svg/social/apple.svg";
import discord from "../../svg/social/discord.svg";
import facebook from "../../svg/social/facebook.svg";
import "./style.scss";
const socialBlock = () => {
  const images = [
    { id: 1, src: google, alt: "Google", href: "https://www.google.com/" },
    {
      id: 2,
      src: telegram,
      alt: "Telegram",
      href: "https://www.telegram.org/",
    },
    { id: 3, src: apple, alt: "Apple", href: "https://www.apple.com/" },
    { id: 4, src: discord, alt: "Discord", href: "https://www.discord.com/" },
    {
      id: 5,
      src: facebook,
      alt: "Facebook",
      href: "https://www.facebook.com/",
    },
  ];

  return (
    <div className=" grid gap--small">
      Use social networks
      <div className="social__cont">
        {images.map((image) => (
          <a href={image.href}>
            <img key={image.id} src={image.src} alt={image.alt} />
          </a>
        ))}
      </div>
    </div>
  );
};
export default socialBlock;
