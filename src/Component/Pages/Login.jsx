import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [inputUser, setInputUser] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [inputPwd, setInputPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const userRef = useRef();
  const pwdRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const taskUsers = useSelector((state) => state.task.users.userData.userInfo);
  console.log(taskUsers);
  // console.log(validation);

  useEffect(() => {
    taskUsers.map((user) =>
      user.userName === inputUser ? setValidUser(true) : setValidUser(false)
    );
  }, [inputUser]);

  useEffect(() => {
    taskUsers.map((user) =>
      user.userPassword === inputPwd ? setValidPwd(true) : setInputPwd(false)
    );
  }, [inputPwd]);

  // useEffect(() => {
  //   taskUsers.map((user) =>
  //     user.userName === inputUser && user.password === inputPwd
  //       ? setValidation(true)
  //       : setValidation(false)
  //   );
  // }, [inputUser, inputPwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/todos");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center h-screen font-pops">
      <div className="flex flex-col w-[90%] border-2 px-2 mt-24 h-[18rem]">
        <h2 className="mt-4">Get Login</h2>
        {/* Username */}
        <div
          className={
            validUser
              ? "flex flex-col border rounded-xl mt-4 px-2 py-[0.4rem] border-green-600"
              : "flex flex-col border rounded-xl mt-4 px-2 py-[0.4rem]"
          }>
          <label className="text-sm">Username:</label>
          <input
            className="outline-none"
            onChange={(e) => setInputUser(e.target.value)}
            ref={userRef}
            type="text"
          />
        </div>
        {/* Password */}
        <div
          className={
            validPwd
              ? "flex flex-col border rounded-xl mt-4 px-2 py-[0.4rem] border-green-600"
              : "flex flex-col border rounded-xl mt-4 px-2 py-[0.4rem]"
          }>
          <label className="text-sm">Password:</label>
          <input
            className="outline-none"
            onChange={(e) => setInputPwd(e.target.value)}
            ref={pwdRef}
            type="text"
          />
        </div>
        <button
          type="submit"
          className="mt-4 text-lg rounded-sm h-10  bg-red-600 text-white"
          disabled={!validPwd || !validUser}>
          Login
        </button>
      </div>
    </form>
  );
};
