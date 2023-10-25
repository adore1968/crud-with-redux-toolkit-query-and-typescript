import { toast } from "react-toastify";

const showAlert = (text: string, type: string) => {
  if (type === "success") toast.success(text);
  else if (type === "error") toast.error(text);
};

export default showAlert;
