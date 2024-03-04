import { useLocalStorage } from "@/hooks";

export const Notes = () => {
  const [note, setNote] = useLocalStorage<string>("notes", "");

  return (
    <div className="w-full h-full bg-background p-4 text-black">
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="h-full w-full text-black p-4 text-primary bg-background"
      />
    </div>
  );
};
