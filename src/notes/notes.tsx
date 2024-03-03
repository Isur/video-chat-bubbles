import { useEffect, useState } from "react";

export const Notes = () => {
  const [note, setNote] = useState("");

  useEffect(() => {
    const noteStorage = localStorage.getItem("notes");
    if (noteStorage) setNote(noteStorage);
  }, []);

  const updateStorage = (e: string) => {
    setNote(e);
    localStorage.setItem("notes", e);
  };

  return (
    <div className="w-full h-full bg-background p-4 text-black">
      <textarea
        value={note}
        onChange={(e) => updateStorage(e.target.value)}
        className="h-full w-full text-black p-4 text-primary bg-background"
      />
    </div>
  );
};
