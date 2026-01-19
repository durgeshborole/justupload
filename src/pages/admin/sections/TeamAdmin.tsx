import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export const TeamAdmin = () => {
  const [team, setTeam] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const loadTeam = async () => {
    const { data } = await supabase.from("team").select("*");
    setTeam(data ?? []);
  };

  useEffect(() => {
    loadTeam();
  }, []);

  const uploadImage = async () => {
    if (!image) return null;

    const fileName = `team-${Date.now()}-${image.name}`;

    const { error } = await supabase.storage
      .from("images")
      .upload(fileName, image);

    if (error) {
      alert(error.message);
      return null;
    }

    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(fileName);

    return data.publicUrl;
  };

  const addMember = async () => {
    const imageUrl = await uploadImage();

    await supabase.from("team").insert({
      name,
      role,
      image_url: imageUrl,
    });

    setName("");
    setRole("");
    setImage(null);
    loadTeam();
  };

  const deleteMember = async (id: string) => {
    await supabase.from("team").delete().eq("id", id);
    loadTeam();
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Team</h3>

      <input
        className="w-full mb-2 p-2 border rounded"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full mb-2 p-2 border rounded"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <input
        type="file"
        className="mb-4"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />

      <button
        onClick={addMember}
        className="bg-black text-white px-4 py-2 rounded mb-6"
      >
        Add Member
      </button>

      <div className="grid md:grid-cols-2 gap-4">
        {team.map((t) => (
          <div key={t.id} className="border p-3 rounded">
            {t.image_url && (
              <img
                src={t.image_url}
                className="h-24 w-24 object-cover rounded-full mb-2"
              />
            )}
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm text-gray-600">{t.role}</div>

            <button
              onClick={() => deleteMember(t.id)}
              className="text-red-500 mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
