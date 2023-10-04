"use client";
import Image from "next/image";
import bg from "bg.svg";
import "./page.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [shareData, setShareData] = useState("");
  const [password, setPassword] = useState("");

  const signUpUser = () => {
    // store user data in local storage
    localStorage.setItem("name", name);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("shareData", shareData);
    localStorage.setItem("password", password);

    // redirect to onboard page
    router.push("/onboard");
  };

  return (
    <main className="App">
      <div className="Welcome-Banner">
        <Image src="/bg.svg" className="App-logo" alt="logo" />
        <p className="welcome-text">
          Discover new things on <br /> Superapp
        </p>
      </div>
      <div className="App-Body">
        <h1 className="App-title">Superapp</h1>
        <p className="App-subtitle">Create your new account</p>
        <form className="App-form">
          <input
            type="text"
            className="inputText"
            required
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="inputText"
            required
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            className="inputText"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="inputText"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="share-check">
            <input
              type="checkbox"
              required
              value={shareData}
              onChange={(e) => setShareData(e.target.value)}
            />
            <p>Share my registration data with Superapp</p>
          </div>
          <button className="btn" onClick={signUpUser}>
            Sign up
          </button>
          <p className="tos-text">
            By clicking on Signup, you agree to Superapp{" "}
            <a href="https://www.google.com">Terms and conditions of use</a>
          </p>
          <p className="tos-text">
            To learn more how Superapp collects, uses, shares and protects your
            personal data please head Superapp{" "}
            <a href="https://www.google.com">Privacy Policy</a>
          </p>
        </form>
      </div>
    </main>
  );
}
