import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState(null);

  // 1. Spring Boot 서버에서 Kakao 로그인 URL 가져오기
  const handleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:9000/auth/kakao", {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("Response data:", response.data); // 확인
      window.location.href = response.data;
    } catch (error) {
      console.error("Error fetching Kakao login URL", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Kakao 로그인 테스트</h1>

      {/* Kakao 로그인 버튼 */}
      <button onClick={handleLogin} style={{ padding: "10px 20px", backgroundColor: "#FEE500", border: "none", borderRadius: "5px", fontSize: "16px", cursor: "pointer" }}>
        카카오 로그인
      </button>
    </div>
  );
};

export default Login;
