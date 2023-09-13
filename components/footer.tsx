import {ThemeToggle} from "./theme-toggle";

const Footer = () => {
  return (
    <div className="w-full  border-t pt-6 text-sx justify-between  flex items-center border-neutral-200 dark:border-neutral-800">
      <div className="container flex items-center justify-between">
        <div className="text-neutral-500">All Rights Reserved</div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Footer;
