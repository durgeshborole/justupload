import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export const AboutAdmin = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAbout = async () => {
      const { data } = await supabase
        .from("about")
        .select("*")
        .single();

      if (data) {
        setContent(data.content || "");
      }
      setLoading(false);
    };

    loadAbout();
  }, []);

  const saveAbout = async () => {
    await supabase.from("about").upsert({
      id: "00000000-0000-0000-0000-000000000001",
      content,
    });

    alert("About section updated");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-bold mb-4">About Section</h3>

      <textarea
        className="w-full h-40 p-3 border rounded mb-4"
        placeholder="About content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={saveAbout}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
};
