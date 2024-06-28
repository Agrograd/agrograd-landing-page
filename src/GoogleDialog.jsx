import { Info } from "lucide-react";
import { loginWithGoogle } from "./firebase/functions";
import { useState } from "react";
import DoneGIF from "./assets/nice.gif";
export default function GoogleDialog({ dialogState }) {
  const [loginedUser, setLoginedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const googleLogin = async () => {
    setIsLoading(true);
    loginWithGoogle(setLoginedUser);
  };
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen backdrop-blur-lg bg-black/80 flex justify-center items-center z-20"
      onClick={(e) => dialogState(false)}
    >
      <div
        className="min-w-[400px] w-[80%] lg:w-[40%] 2xl:w-[600px] bg-white rounded-xl border-[1px] border-green-500 flex flex-col justify-center items-center min-h-[300px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-[70%] border-y-[0.5px] border-gray-400 w-full flex flex-col justify-center items-center space-y-3">
          {loginedUser ? (
            <>
              <img src={DoneGIF} alt="done" className="w-[200px]" />
              <span className="font-bold text-sm italic">
                Thanks for joinning, now you will be redirected to our community
              </span>
              <span className="mb-3">
                if not able to?{" "}
                <a
                  href="https://chat.whatsapp.com/Lcc5yEFSAcRAQjcMtwcU5X"
                  className="text-green-500"
                >
                  Click here
                </a>
              </span>
            </>
          ) : (
            <>
              <button
                className="w-[300px] p-3 border-[1.5px] rounded-lg border-black shadow-lg flex justify-center items-center space-x-3 hover:shadow-xl hover:border-green-500 hover:shadow-green-100 focus:shadow hover:scale-105 transition duration-200"
                onClick={googleLogin}
              >
                <img
                  src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                  alt="google"
                  className="w-[30px]"
                />
                <span className="font-bold xl:text-lg">Login with Google</span>
              </button>
              <div className="text-sm italic flex justify-center items-center space-x-2">
                <Info />
                <span>login to get to know you better</span>
              </div>
            </>
          )}
        </div>
        {isLoading && (
          <div className="animate-spin w-5 h-5 border-t-2 border-b-2 border-green-500 rounded-full" />
        )}
      </div>
    </div>
  );
}
