import { Editor } from "./components/Editor";

export function App() {
  return (
    <div className="min-h-screen text-zinc-900 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 p-8">
      <div className="bg-white w-[1100px] mx-auto rounded-xl min-h-[700px] shadow-lg border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 bg-zinc-300 rounded-full group-hover:bg-red-500 " />
            <button className="w-3 h-3 bg-zinc-300 rounded-full group-hover:bg-yellow-500 " />
            <button className="w-3 h-3 bg-zinc-300 rounded-full group-hover:bg-green-500 " />
          </div>
        </aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  );
}
