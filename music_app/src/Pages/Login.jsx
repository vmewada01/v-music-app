import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthReducer/action";
import { useLocation, useNavigate } from "react-router-dom";
import { GET_LOGIN_SUCCESS } from "../Redux/AuthReducer/actionType";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";
  //console.log(comingFrom)
  const auth = useSelector((store) => store.AuthReducer.isAuth);
  console.log(auth)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password })).then((r) => {
        // console.log(r)
        if (r.type === GET_LOGIN_SUCCESS) {
          alert("login_success");
          //   /music/:id
          navigate(comingFrom);
        }
      });
    }
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Heading>Login Form</Heading>
        <br />
        <Box>
          <label>Email: </label>
          <Input
            width="md"
            type="email"
            placeholder="enter email here..!!"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>

        <Box>
          <label>Password: </label>
          <Input
            width="md"
            type="password"
            placeholder="enter password here..!!"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box>
          <Button type="submit">Login</Button>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
