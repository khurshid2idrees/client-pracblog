import React, { useEffect } from "react";
import { userContext } from "../App";
import { useContext} from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = useContext(userContext);
  const navigate = useNavigate();

  if (!user.name) {
    return navigate("/login");
  }
  return  children ;
}
