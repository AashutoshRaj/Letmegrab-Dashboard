import React, { useEffect } from "react";
import sideImage from "../../assets/Images/SliderImages/bgImg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../../assets/Components/Input";
import useToggle from "../../assets/CustomeHook/UseToggle";
import messages from "../../message";
import { toast } from "react-toastify";

const SignUp = () => {
  const [isShowPwd, setIsShowPwd] = useToggle(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (!userData) {
      localStorage.setItem("userData", "[]");
     
    }
  }, []);

  const onSubmit = (data) => {
    console.log("Registered data:", data);
    // if(data.password != data.confirmPassword){
    //     console.log("Password not match--")
    //     return
    // }

    // const checkData = JSON.parse(userDataInfo).find((item)=>{
    //    item.userName === data.userName
    // })

    // if(checkData){
    //     console.log("User  already exi ")
    //     return
    // }

    const userData = {
      userName: data.userName,
      email: data.email,
      password: data.password,
    };

    localStorage.setItem("userData", JSON.stringify([userData]));
    toast.success("Successfull created account")
     navigate("/login")
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4 h-[calc(100vh-82px)] overflow-auto sm:overflow-hidden">
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
         sm:bg-transparent bg-white w-full max-w-[90%] p-4 rounded-lg sm:static sm:translate-none"
        >
          <h2 className="text-2xl font-bold mb-5 text-center">
            {messages.signup}
          </h2>
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="mb-5">
                <Input
                  type="text"
                  name="userName"
                  placeholder="User name"
                  className="h-[55px] border-b-1 border-[var(--primary-color)] w-full outline-none px-3"
                  registerProps={register("userName", {
                    required: "This field is required",
                    message: "Enter a valid email address",
                  })}
                  errorMessage={errors.userName?.message}
                />
              </div>
              <div className="mb-5">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="h-[55px] border-b-1 border-[var(--primary-color)] w-full outline-none px-3"
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
                  className="h-[55px] border-b-1 border-[var(--primary-color)] w-full outline-none px-3"
                  registerProps={register("password", {
                    required: "Password is required",
                    message: "Set your strong Password",
                  })}
                  errorMessage={errors.password?.message}
                />
                <button
                  type="button"
                  // onClick={() => setIsShowPwd((prev) => !prev)}
                  onClick={setIsShowPwd}
                  className=" absolute top-3 right-3 cursor-pointer"
                >
                  {/* {isShowPwd ? <OpenEye /> : <EyeIcon />} */}
                  {isShowPwd ? (
                    <span style={{ color: "#000" }}>Hide</span>
                  ) : (
                    <span style={{ color: "#000" }}>Show</span>
                  )}
                </button>
              </div>
              <div className="mb-5">
                <Input
                  type={isShowPwd ? "text" : "password"}
                  name="confirm-password"
                  placeholder="Confirm password"
                  className="h-[55px] border-b-1 border-[var(--primary-color)] w-full outline-none px-3"
                  registerProps={register("confirm-password", {
                    required: "Password is not match",
                    message: "Set your strong dPassword",
                  })}
                  errorMessage={errors.password?.message}
                />
              </div>
              <div className="mt-5">
                <button className="mt-5 w-full text-center group text-[#1A202C] border border-[var(--primary-color)] px-4 py-2 rounded-md hover:bg-[var(--primary-color)] hover:text-white  cursor-pointer transition duration-300 flex items-center justify-center gap-[5]">
                  {messages.createAccountText}
                </button>

                <p className="text-center my-4">
                  Already have an count?{" "}
                  <Link
                    to="/login"
                    className="text-[var(--primary-color) underline underline-offset-8] hover:text-[var(--primary-color)]"
                  >
                    Login{" "}
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

export default SignUp;
