import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export const ServicesAdmin = () => {
  const [services, setServices] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const loadServices = async () => {
    const { data } = await supabase.from("services").select("*");
    setServices(data ?? []);
  };

  useEffect(() => {
  supabase.from("services").select("*").then(({ data }) => {
    setServices(data ?? []);
  });
}, []);

  const addService = async () => {
    await supabase.from("services").insert({ title, description });
    setTitle("");
    setDescription("");
    loadServices();
  };

  const deleteService = async (id: string) => {
    await supabase.from("services").delete().eq("id", id);
    loadServices();
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Services</h3>

      <input
        className="w-full mb-2 p-2 border rounded"
        placeholder="Service title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full mb-4 p-2 border rounded"
        placeholder="Service description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={addService}
        className="bg-black text-white px-4 py-2 rounded mb-6"
      >
        Add Service
      </button>

      <ul>
        {services.map((s) => (
          <li
            key={s.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{s.title}</span>
            <button
              onClick={() => deleteService(s.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
