
import { FC } from "react";

const DownloadApp: FC = () => {
  return (
    <div className="px-16 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-purple-100 to-white p-8 rounded-lg shadow-lg">
        <div className="text-left md:w-2/3">
          <h2 className="text-xl font-bold mb-2">
            Download the TALLleaders App now!
          </h2>
          <p className="mb-4">
            Connecting vetted, high-impact causes with kind donors from across
            the globe. Let’s spread & amplify kindness together!
          </p>
        </div>
        <div className="flex md:w-1/3 justify-end space-x-4">
          <a href="#" className="inline-block">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-36"
            />
          </a>
          <a href="#" className="inline-block">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="w-36"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
