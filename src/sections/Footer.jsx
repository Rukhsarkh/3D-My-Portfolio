const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2 sm:text-lg">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/Rukhsarkh" target="_blank">
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2 sm:w-2/3 sm:h-2/3"
            />
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/rukhsar-khan-69b56a333/"
          target="_blank"
        >
          <div className="social-icon">
            <img
              src="/assets/link.svg"
              alt="linkedin"
              className="w-1/2 h-1/2 sm:w-2/3 sm:h-2/3 invert brightness-0"
            />
          </div>
        </a>
      </div>
      <p className="text-white-500 text-lg">
        © {currentYear} Rukhsar Khan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
