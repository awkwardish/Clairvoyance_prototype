import { useState, useEffect } from 'react';

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('en');
  const [audioUrl, setAudioUrl] = useState(null);

  useEffect(() => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  }, [audioUrl]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setCaption('');
      setAudioUrl(null);
    }
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image.");

    const formData = new FormData();
    formData.append("file", image);
    formData.append("lang", language);

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/caption-image", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setCaption(data.caption || "No caption returned.");

      const audioRes = await fetch("http://localhost:8000/speak-caption", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: data.caption, lang: language }),
      });

      const audioBlob = await audioRes.blob();
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
    } catch (err) {
      console.error(err);
      setCaption("Something went wrong...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-white mb-3">
        Upload an Image :
      </h2>
      <p className="text-center text-gray-600 font-style: italic dark:text-gray-300 mb-6">
        "📚 Reading may not be for everyone, but hearing is..."
      </p>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        
        {/* Preview Section */}
        <div className="w-full h-64 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-md">
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="max-h-full max-w-full object-contain rounded"
            />
          ) : (
            <p className="text-gray-500 dark:text-gray-300 text-lg">😵‍💫 No preview available</p>
          )}
        </div>

        {/* Controls */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Select Language 🌐
          </label>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
          </select>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer file:mr-4 file:py-3 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition-colors"
          />

          <button
            onClick={handleUpload}
            disabled={loading || !image}
            className={`w-full mt-2 py-3 px-4 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 ${
              loading || !image
                ? "bg-gray-400 cursor-not-allowed dark:bg-gray-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "🚀 Generating..." : "🔎 Generate Caption"}
          </button>
        </div>
      </div>

      {/* Caption Result */}
      {caption && (
        <div className="mt-8">
          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-inner text-center">
            <p className="text-lg text-gray-800 dark:text-gray-100 font-medium italic">“{caption}”</p>
          </div>
        </div>
      )}

      {/* Audio Player */}
      {audioUrl && (
        <div className="mt-4 text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-2">Listen or Download:</p>
          <audio controls src={audioUrl} className="mx-auto" />
        </div>
      )}
    </div>
  );
}
