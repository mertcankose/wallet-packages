import toast from "react-hot-toast";
let autoCloseTime = 1400;

export const errorMessage = (text: string) => {
  toast.error(text, {
    duration: autoCloseTime,
    position: "top-center",
  });
};

export const successMessage = (text: string) => {
  toast.success(text, {
    duration: autoCloseTime,
    position: "top-center",
  });
};
