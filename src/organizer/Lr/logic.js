import axiosInstance from "../../ax";
import { opendil } from "./login";

async function handleRegisterSubmit(phone) {
  try {
    const response = await axiosInstance.post("registerphone/", {
      phone_number: phone,
    });
    console.log(response.data["code"]);
    if (response.data["data"]["code"] === 200) {
      opendil("otp");
    } else {
    }
    console.log(response.data);
  } catch (error) {
    throw error;
  }
}

async function handleOtpSubmit(sotp) {
  try {
    const response = await axiosInstance.post("verifyotp/", {
      otp: sotp,
    });
    console.log(response);
    if (response.data["data"]["code"] === 200) {
    } else {
    }
    console.log(response.data);
  } catch (error) {
    throw error;
  }
}

export { handleRegisterSubmit, handleOtpSubmit };
