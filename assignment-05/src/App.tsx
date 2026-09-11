import { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Nav } from "./component/nav";
import { Banner } from "./component/banner";
import { Skill } from "./component/technology";
import Footer from "./component/footer";
import type { ITechnology } from "./type";

function App() {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [selectedItems, setSelectedItems] = useState<ITechnology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch JSON Data with useEffect
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching technologies:", err);
        setLoading(false);
      });
  }, []);

  // Add Item to Stack
  const handleAddToStack = (tech: ITechnology) => {
    const exists = selectedItems.some((item) => item.id === tech.id);

    if (exists) {
      toast.warning(`⚠️ ${tech.name} is already in your stack!`, {
        position: "bottom-right",
        autoClose: 3000,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    setSelectedItems((prev) => [...prev, tech]);
    toast.success(`🚀 ${tech.name} added to stack!`, {
      position: "bottom-right",
      autoClose: 3000,
      theme: "colored",
      transition: Bounce,
    });
  };

  // Remove Single Item
  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = selectedItems.find((item) => item.id === id);
    setSelectedItems((prev) => prev.filter((item) => item.id !== id));

    if (itemToRemove) {
      toast.info(`🗑️ ${itemToRemove.name} removed from stack`, {
        position: "bottom-right",
        autoClose: 3000,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  // Remove All Items
  const handleRemoveAll = () => {
    setSelectedItems([]);
    toast.error("🧹 All technologies removed from stack!", {
      position: "bottom-right",
      autoClose: 3000,
      theme: "colored",
      transition: Bounce,
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <Nav />
      <Banner />
      <Skill
        technologies={technologies}
        selectedItems={selectedItems}
        onAddToStack={handleAddToStack}
        onRemoveFromStack={handleRemoveFromStack}
        onRemoveAll={handleRemoveAll}
        loading={loading}
      />
      <Footer />
      <ToastContainer aria-label="Notifications" />
    </div>
  );
}

export default App;