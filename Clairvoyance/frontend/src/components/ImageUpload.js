import { useState } from 'react';

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('en'); // en, hi, bn
  const [audioUrl, setAudioUrl] = useState(null);

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
    formData.append("lang", language); // ✅ send lang to backend

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/caption-image", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Caption API Response:", data); // ✅ debug
      setCaption(data.caption || "No caption returned.");

      // Generate audio
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
      setCaption("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-xl mx-auto border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-4">
        Upload an Image
      </h2>

      {/* Language Selector */}
      <div className="mb-4">
        <label htmlFor="language" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          Select Language:
        </label>
        <select
          id="language"
          value={language}
          onChange={handleLanguageChange}
          className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="bn">Bengali</option>
        </select>
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full mb-4 text-sm text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
      />

      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="Preview"
          className="w-full h-auto mb-4 rounded border border-gray-300 dark:border-gray-600"
        />
      )}

      <button
        onClick={handleUpload}
        disabled={loading}
        className={`w-full py-2 px-4 text-white font-semibold rounded-md transition ${
          loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {loading ? 'Generating Caption...' : 'Generate Caption'}
      </button>

      {caption && (
        <div className="mt-6 text-center text-lg text-gray-800 dark:text-gray-100 font-medium">
          <p className="text-sm text-gray-500 dark:text-gray-400">Caption:</p>
          “{caption}”
        </div>
      )}

      {audioUrl && (
        <div className="mt-4 text-center">
          <button
            onClick={() => new Audio(audioUrl).play()}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition"
          >
            🔊 Play Caption
          </button>
        </div>
      )}
    </div>
  );
}
