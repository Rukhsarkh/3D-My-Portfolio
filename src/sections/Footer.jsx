const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2 sm:text-lg">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
            <a href="https://github.com/Rukh-Khan" target="_blank">
                <div className="social-icon">
                 <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 sm:w-2/3 sm:h-2/3" />
                </div>
            </a>

            <a href="https://x.com/?lang=en" target="_blank">
                <div className="social-icon">
                    <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2 sm:w-2/3 sm:h-2/3" />
                </div>
            </a>
          
           <a href="https://www.linkedin.com/" target="_blank">
            <div className="social-icon">
                <img src="/assets/link.svg" alt="linkedin" className="w-1/2 h-1/2 sm:w-2/3 sm:h-2/3 invert brightness-0" />
            </div>
           </a>
        </div>
        <p className="text-white-500 text-lg">© 2024 Rukhsar Khan. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;