import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!error) navigate("/admin/dashboard");
    else alert(error.message);
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password"
        onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
};
