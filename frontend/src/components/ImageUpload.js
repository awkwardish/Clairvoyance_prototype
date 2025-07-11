import { useState } from 'react';

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setCaption('');
    }
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image.");

    const formData = new FormData();
    formData.append("file", image);

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/caption-image", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setCaption(data.caption || "No caption returned.");
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

      <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-4">
        Select an image from your device. It will be processed by our AI to generate a description.
      </p>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full mb-4 text-sm
          text-gray-800 dark:text-gray-300
          bg-gray-100 dark:bg-gray-700
          border border-gray-300 dark:border-gray-600
          rounded-md file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0 file:text-sm
          file:bg-blue-600 file:text-white hover:file:bg-blue-700
          cursor-pointer"
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
    </div>
  );
}


