export const Footer = () => {
  return (
    <div className="w-screen h-[250px] flex items-center justify-center">
      <div className="flex flex-col h-full gap-5 text-sm">
        {/* socials */}
        <div className="flex items-center justify-start gap-5">
            <img src="/icons/facebook.png" alt="" width={22}/>
            <img src="/icons/instagram.png" alt="" width={22}/>
            <img src="/icons/twitter.png" alt="" width={22}/>
            <img src="/icons/youtube.png" alt="" width={28}/>
        </div>

        <div className="flex items-center justify-center gap-[180px]">
          {/* col 1 */}
          <div className="flex flex-col justify-center items-start gap-4">
            <button className="text-[#777777]">
              <span className="hover:underline">Audio Description</span>
            </button>
            <button className="text-[#777777]">
              <span className="hover:underline">Investor Relations</span>
            </button>
            <button className="text-[#777777]">
              <span className="hover:underline">Legal Notices</span>
            </button>
          </div>

          {/* col 2 */}
          <div className="flex flex-col justify-center items-start gap-4">
            <button className="text-[#777777]">
              <span className="hover:underline">Help Centre</span>
            </button>
            <button className="text-[#777777]">
              <span className="hover:underline">Jobs</span>
            </button>
            <button className="text-[#777777]">
              <span className="hover:underline">Cookie Preferences</span>
            </button>
          </div>

          {/* col 3 */}
          <div className="flex flex-col justify-center items-start gap-4">
            <button className="text-[#777777]">
              <span className="hover:underline">Gift Cards</span>
            </button>
            <button className="text-[#777777]">
              <span className="hover:underline">Terms of Use</span>
            </button>
            <button className="text-[#777777]">
              <span className="hover:underline">Corporate Information</span>
            </button>
          </div>

          {/* col 4 */}
          <div className="flex flex-col justify-center items-start gap-4">
            <button className="text-[#777777]">
              <span className="hover:underline">Media Centre</span>
            </button>
            <button className="text-[#777777]">
              <span className="hover:underline">Privacy</span>
            </button>
            <button className="text-[#777777]">
              <span className="hover:underline">Contact Us</span>
            </button>
          </div>
        </div>

        {/* service code */}
        <button className="max-w-max border-[1px] border-[#777777] p-2 ">
          <span className="text-[#777777] hover:text-gray-50">
            Service Code
          </span>
        </button>

        {/* copyright */}
        <div className="py-4">
          <span className="text-[#777777]">
            Netflix Clone by{" "}
            <a
              className="text-gray-100 hover:text-[#bebebe]"
              href="https://shreydev.vercel.app/"
            >
              shrey.dev
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
