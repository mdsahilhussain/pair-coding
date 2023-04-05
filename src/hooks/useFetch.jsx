import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { PostContext } from "../context/PostContext";

function useFetch(url) {
  const {
    selectedLanguage,
    code,
    setOutputDetails,
    setErrorDetails,
    setLoading,
  } = useContext(PostContext);

  const encodedParams = new URLSearchParams();
  encodedParams.append("LanguageChoice", selectedLanguage?._id || "7");
  encodedParams.append("Program", code);
  //   encodedParams.append("Input", "1");

  const fetchOutput = async () => {
    setLoading(true);
    const options = {
      method: "POST",
      url: url,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "26ad58219amsh0b8ecc7acafeebfp1d1f56jsn760492f21d10",
        "X-RapidAPI-Host": "code-compiler.p.rapidapi.com",
      },
      data: encodedParams,
    };
    try {
      const response = await axios.request(options);
      setLoading(false);
      if (response.data?.Errors) {
        setErrorDetails(response.data?.Errors);
        setOutputDetails(null);
      }
      if (response.data?.Result) {
        setOutputDetails(response.data?.Result);
        setErrorDetails(null);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return { fetchOutput };
}
export default useFetch;
