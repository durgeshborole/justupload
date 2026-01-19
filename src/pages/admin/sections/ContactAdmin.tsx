import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export const ContactAdmin = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContact = async () => {
      const { data } = await supabase
        .from("contact_info")
        .select("*")
        .single();

      if (data) {
        setEmail(data.email || "");
        setPhone(data.phone || "");
        setAddress(data.address || "");
      }
      setLoading(false);
    };

    loadContact();
  }, []);

  const saveContact = async () => {
    await supabase.from("contact_info").upsert({
      id: "00000000-0000-0000-0000-000000000001",
      email,
      phone,
      address,
    });

    alert("Contact information updated");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Contact Information</h3>

      <input
        className="w-full mb-3 p-2 border rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full mb-3 p-2 border rounded"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <textarea
        className="w-full mb-4 p-2 border rounded"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button
        onClick={saveContact}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
};