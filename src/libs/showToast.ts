import { toast } from "react-toastify";

const showToast = (text: string, type: string) => {
  if (type === "success") toast.success(text);
  else if (type === "error") toast.error(text);
};

export default showToast;
