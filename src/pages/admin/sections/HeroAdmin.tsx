import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export const HeroAdmin = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  useEffect(() => {
    supabase.from("hero").select("*").single()
      .then(({ data }) => {
        if (data) {
          setTitle(data.title);
          setSubtitle(data.subtitle);
        }
      });
  }, []);

  const save = async () => {
    await supabase.from("hero").upsert({
      id: "00000000-0000-0000-0000-000000000001",
      title,
      subtitle,
    });
    alert("Hero updated");
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Hero Section</h3>

      <input
        className="w-full mb-3 p-2 border rounded"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />

      <textarea
        className="w-full mb-4 p-2 border rounded"
        value={subtitle}
        onChange={e => setSubtitle(e.target.value)}
        placeholder="Subtitle"
      />

      <button
        onClick={save}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
};
