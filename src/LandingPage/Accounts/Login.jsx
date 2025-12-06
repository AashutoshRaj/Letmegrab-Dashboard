import React from "react";
import sideImage from "../../assets/Images/SliderImages/bgImg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../../assets/Components/Input";
import useToggle from "../../assets/CustomeHook/UseToggle";
import messages from "../../message";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [isShowPwd, setIsShowPwd] = useToggle(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const getData = localStorage.getItem("userData");
    if (!getData) {
      console.log("not founded");
      return;
    }
    console.log("asdfasdfasdfsdf", getData);

    const conditionMatch = JSON.parse(getData).filter((item) => {
      return item.email === data.email && item.password === data.password;
    });

    if (conditionMatch.length > 0) {
      localStorage.setItem("auth", "true");
      // const nameGet = localStorage.setItem("username", userName);
      // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>", )
      navigate("/product-table");
      toast.success("Successfully Login")
    } else {
      toast.error("User not found")
     
    }
    console.log(" sdfasdfasdfas ", conditionMatch);
  };
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4 h-[calc(100vh-82px)] overflow-auto sm:overflow-hidden relative">
        <div className="w-full">
          <img
            src={sideImage}
            alt=""
            className="w-full h-screen object-cover"
          />
        </div>
        <div
          className="flex flex-col justify-center px-5 w-full sm:max-w-[500px] m-auto 
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
         sm:bg-transparent bg-white w-full max-w-[90%] p-4 rounded-lg sm:static sm:translate-none
  "
        >
          <h2 className="text-2xl font-bold mb-5 text-center">
            {messages.login}
          </h2>
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="h-[55px] border-b-1 border-gray-300 w-full outline-none px-3"
                  registerProps={register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  errorMessage={errors.email?.message}
                />
              </div>
              <div className="mb-5 relative">
                <Input
                  type={isShowPwd ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="h-[55px] border-b-1 border-gray-300 w-full outline-none px-3"
                  registerProps={register("password", {
                    required: "Password is required",
                    message: "Set your strong Password",
                  })}
                  errorMessage={errors.password?.message}
                />
                <button
                  type="button"
                  onClick={setIsShowPwd}
                  className=" absolute top-3 right-3 cursor-pointer"
                >
                  {isShowPwd ? (
                    <span style={{ color: "#000" }}>Hide</span>
                  ) : (
                    <span style={{ color: "#000" }}>Show</span>
                  )}
                </button>
              </div>
              <div className="mt-5">
                <button className="w-full text-center group text-[#1A202C] border border-[var(--primary-color)] px-4 py-2 rounded-md hover:bg-[var(--primary-color)] hover:text-white  cursor-pointer transition duration-300 flex items-center justify-center gap-[5]">
                  {messages.loginText}
                </button>

                <p className="text-center my-4">
                  Don’t have an acount?{" "}
                  <Link
                    to="/signup"
                    className="text-[var(--primary-color) underline underline-offset-8] hover:text-[var(--primary-color)]"
                  >
                    Sign up
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
