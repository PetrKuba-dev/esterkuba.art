import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // 'success', 'error', or null
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    try {
      const response = await fetch("/api/send-email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Chyba při odesílání:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-20">
      <motion.h2
        className="text-3xl text-black font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Kontaktujte mě
      </motion.h2>

      <form
        onSubmit={handleSubmit}
        className="sm:px-10 md:px-20"
      >
        <div className="flex gap-5 md:flex-row flex-col md:gap-10">
          <div className="flex-1 flex flex-col justify-between gap-y-5 md:gap-y-0
          import { Camera } from 'lucide-react';">
            <div>
              <label className="block text-gray-600 text-md mb-1">Jméno</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full text-sm text-gray-800 py-2 border-b border-gray-300 transition focus:outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-md mb-1">E-mail</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full text-sm text-gray-800 py-2 border-b border-gray-300 transition focus:outline-none focus:border-gray-500"
              />
            </div>
          </div>

          <div className="flex-2">
            <div>
              <label className="block text-gray-600 text-md mb-1">Zpráva</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full text-sm text-gray-800 py-2 border-b border-gray-300 transition focus:outline-none focus:border-gray-500 resize-none"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-10">
          <motion.button
            type="submit"
            disabled={isSending}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 disabled:opacity-50 cursor-pointer"
          >
            {isSending ? "Odesílání..." : "Odeslat zprávu"}
          </motion.button>
        </div>

        {status === "success" && (
          <p className="text-green-600 mt-2">Zpráva byla úspěšně odeslána ✅</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-2">Něco se pokazilo při odesílání 😢</p>
        )}
      </form>
    </section>
  );
}