import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export const ProjectsAdmin = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const loadProjects = async () => {
    const { data } = await supabase.from("projects").select("*");
    setProjects(data ?? []);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const uploadImage = async () => {
    if (!image) return null;

    const fileName = `${Date.now()}-${image.name}`;

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

  const addProject = async () => {
    const imageUrl = await uploadImage();

    await supabase.from("projects").insert({
      title,
      description,
      image_url: imageUrl,
    });

    setTitle("");
    setDescription("");
    setImage(null);
    loadProjects();
  };

  const deleteProject = async (id: string) => {
    await supabase.from("projects").delete().eq("id", id);
    loadProjects();
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Projects</h3>

      <input
        className="w-full mb-2 p-2 border rounded"
        placeholder="Project title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full mb-2 p-2 border rounded"
        placeholder="Project description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="file"
        className="mb-4"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />

      <button
        onClick={addProject}
        className="bg-black text-white px-4 py-2 rounded mb-6"
      >
        Add Project
      </button>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p.id} className="border p-3 rounded">
            <h4 className="font-semibold">{p.title}</h4>
            {p.image_url && (
              <img
                src={p.image_url}
                className="h-32 object-cover my-2 rounded"
              />
            )}
            <button
              onClick={() => deleteProject(p.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};