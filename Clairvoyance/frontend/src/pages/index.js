import ImageUpload from '../components/ImageUpload';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 sm:py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Clairvoyance ✨
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            Your AI-powered image-to-speech companion. Upload an image, and our AI will describe it to you in your selected language.
          </p>
        </div>

        <div className="mt-10 md:mt-12 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <div className="max-w-7xl mx-auto">
            <ImageUpload />
          </div>
        </div>
      </div>
    </div>
  );
}



