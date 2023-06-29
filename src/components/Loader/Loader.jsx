import { SpinnerCircularFixed } from "spinners-react";
import { useTheme } from "../../index";

export const Loader = () => {
  const { isDarkTheme } = useTheme();
  return (
    <div className="flex items-center justify-center mt-20">
      <SpinnerCircularFixed
        size={50}
        thickness={180}
        speed={136}
        color="#0d9488"
        secondaryColor={
          isDarkTheme ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"
        }
      />
    </div>
  );
};
