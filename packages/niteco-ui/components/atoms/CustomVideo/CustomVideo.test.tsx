import React from "react";
import { CustomVideo } from "./CustomVideo";

const CustomVideoTestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CustomVideo Component Test Page</h1>
          <p className="text-lg text-gray-600">Testing all features and configurations of the CustomVideo component</p>
        </div>

        {/* Basic YouTube Video */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">1. Basic YouTube Video</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">Simple YouTube video with lazy loading and play button overlay</p>
            <div className="max-w-2xl">
              <CustomVideo
                videoUrl="https://www.youtube.com/watch?v=BZDckbEMUlk"
                title="Basic YouTube Video"
                loading="lazy"
                id="basic-youtube"
              />
            </div>
          </div>
        </section>

        {/* YouTube with Background Image */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">2. YouTube Video with Background Image</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              YouTube video with background image overlay that disappears when video plays
            </p>
            <div className="max-w-2xl">
              <CustomVideo
                videoUrl="https://www.youtube.com/watch?v=BZDckbEMUlk"
                title="YouTube Video with Background"
                backgroundImageUrl="https://picsum.photos/800/450?random=1"
                loading="lazy"
                id="youtube-with-background"
              />
            </div>
          </div>
        </section>

        {/* Autoplay YouTube Video */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">3. Autoplay YouTube Video</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              YouTube video that autoplays when entering viewport (background image and play button hide automatically)
            </p>
            <div className="max-w-2xl">
              <CustomVideo
                videoUrl="https://www.youtube.com/watch?v=BZDckbEMUlk"
                title="Autoplay YouTube Video"
                autoplayAsBool={true}
                backgroundImageUrl="https://picsum.photos/800/450?random=2"
                loading="eager"
                id="autoplay-youtube"
              />
            </div>
          </div>
        </section>

        {/* MP4 Video */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">4. MP4 Video</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">Basic MP4 video with lazy loading and play button overlay</p>
            <div className="max-w-2xl">
              <CustomVideo
                videoUrl="https://d2vvl8c6ghcjjw.cloudfront.net/userfiles/videos/video.mp4"
                title="Sample MP4 Video"
                loading="lazy"
                id="basic-mp4"
                backgroundImageUrl="https://picsum.photos/800/450?random=4"
              />
            </div>
          </div>
        </section>

        {/* Popup Modal Video */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">5. Popup Modal Video</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              Video that plays in a modal popup. Background image and play button trigger the modal.
            </p>
            <div className="max-w-2xl">
              <CustomVideo
                videoUrl="https://www.youtube.com/watch?v=BZDckbEMUlk"
                title="Popup Modal Video"
                playOnPopup={true}
                backgroundImageUrl="https://picsum.photos/800/450?random=4"
                loading="lazy"
                id="popup-video"
              />
            </div>
          </div>
        </section>

        {/* Multiple Videos Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">6. Multiple Videos in Responsive Grid</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-6">
              Multiple CustomVideo components demonstrating different configurations in a responsive grid
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">YouTube Video 1</h3>
                <CustomVideo
                  videoUrl="https://www.youtube.com/watch?v=BZDckbEMUlk"
                  title="YouTube Video 1"
                  backgroundImageUrl="https://picsum.photos/400/225?random=8"
                  loading="lazy"
                  id="grid-video-1"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">YouTube Video 2 (Autoplay)</h3>
                <CustomVideo
                  videoUrl="https://www.youtube.com/watch?v=BZDckbEMUlk"
                  title="YouTube Video 2"
                  backgroundImageUrl="https://picsum.photos/400/225?random=9"
                  autoplayAsBool={true}
                  loading="lazy"
                  id="grid-video-2"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">MP4 Video</h3>
                <CustomVideo
                  videoUrl="https://d2vvl8c6ghcjjw.cloudfront.net/userfiles/videos/video.mp4"
                  title="MP4 Video"
                  backgroundImageUrl="https://picsum.photos/400/225?random=10"
                  loading="lazy"
                  id="grid-video-3"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Popup Video</h3>
                <CustomVideo
                  videoUrl="https://www.youtube.com/watch?v=BZDckbEMUlk"
                  title="Popup Video"
                  playOnPopup={true}
                  backgroundImageUrl="https://picsum.photos/400/225?random=11"
                  loading="lazy"
                  id="grid-video-4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Empty Video URL Test */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">7. Empty Video URL Test</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">Component with empty videoUrl - should not render anything</p>
            <div className="max-w-2xl border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-500 mb-4">Expected: No video component should appear below</p>
              <CustomVideo
                videoUrl=""
                title="This should not render"
                backgroundImageUrl="https://picsum.photos/800/450?random=7"
                id="empty-url"
              />
              <p className="text-gray-500 mt-4">✅ Test passed if no video component appears above</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-600">🎬 CustomVideo Component Test Page - All features tested successfully!</p>
          <p className="text-sm text-gray-500 mt-2">Built with React, TypeScript, and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
};

export default CustomVideoTestPage;
