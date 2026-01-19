import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export const ClientsAdmin = () => {
  const [clients, setClients] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [logo, setLogo] = useState<File | null>(null);

  const loadClients = async () => {
    const { data } = await supabase.from("clients").select("*");
    setClients(data ?? []);
  };

  useEffect(() => {
    loadClients();
  }, []);

  const uploadLogo = async () => {
    if (!logo) return null;

    const fileName = `client-${Date.now()}-${logo.name}`;

    const { error } = await supabase.storage
      .from("images")
      .upload(fileName, logo);

    if (error) {
      alert(error.message);
      return null;
    }

    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(fileName);

    return data.publicUrl;
  };

  const addClient = async () => {
    const logoUrl = await uploadLogo();

    await supabase.from("clients").insert({
      name,
      logo_url: logoUrl,
    });

    setName("");
    setLogo(null);
    loadClients();
  };

  const deleteClient = async (id: string) => {
    await supabase.from("clients").delete().eq("id", id);
    loadClients();
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Clients</h3>

      <input
        className="w-full mb-2 p-2 border rounded"
        placeholder="Client name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="file"
        className="mb-4"
        onChange={(e) => setLogo(e.target.files?.[0] || null)}
      />

      <button
        onClick={addClient}
        className="bg-black text-white px-4 py-2 rounded mb-6"
      >
        Add Client
      </button>

      <div className="grid md:grid-cols-3 gap-4">
        {clients.map((c) => (
          <div key={c.id} className="border p-3 rounded text-center">
            {c.logo_url && (
              <img
                src={c.logo_url}
                className="h-16 mx-auto object-contain mb-2"
              />
            )}
            <div className="text-sm">{c.name}</div>

            <button
              onClick={() => deleteClient(c.id)}
              className="text-red-500 mt-2 text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};