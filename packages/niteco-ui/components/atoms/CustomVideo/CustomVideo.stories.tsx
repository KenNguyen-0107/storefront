import type { Meta, StoryObj } from "@storybook/react";
import { CustomVideo } from "./CustomVideo";

const meta: Meta<typeof CustomVideo> = {
  title: "Atoms/CustomVideo",
  component: CustomVideo,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile CustomVideo component built with Tailwind CSS that supports YouTube, Vimeo, and MP4 videos with autoplay, lazy loading, background image overlay, play button, popup modal, and IntersectionObserver for performance optimization. Fully responsive with mobile-first design and accessibility features.",
      },
    },
  },
  argTypes: {
    videoUrl: {
      control: "text",
      description:
        "Video URL (YouTube, Vimeo, or MP4). Component won't render if empty.",
      table: {
        type: { summary: "string" },
      },
    },
    title: {
      control: "text",
      description: "Video title for accessibility and iframe/video tag",
      table: {
        type: { summary: "string" },
      },
    },
    autoplayAsBool: {
      control: "boolean",
      description:
        "Whether to autoplay video when it enters viewport (only works for non-popup videos)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    id: {
      control: "text",
      description: "Optional ID for the video container",
      table: {
        type: { summary: "string" },
      },
    },
    loading: {
      control: { type: "select" },
      options: ["lazy", "eager"],
      description: "Loading strategy for the video content",
      table: {
        type: { summary: "lazy | eager" },
        defaultValue: { summary: "lazy" },
      },
    },
    backgroundImageUrl: {
      control: "text",
      description:
        "Background image URL to overlay on video before playing (will auto-generate from YouTube if not provided)",
      table: {
        type: { summary: "string" },
      },
    },
    playOnPopup: {
      control: "boolean",
      description: "Whether to play video in a modal popup instead of inline",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CustomVideo>;

// Container style to ensure proper height in Storybook
const containerStyle = {
  width: "600px",
};

// ========================================
// BASIC EXAMPLES
// ========================================

export const Default: Story = {
  render: () => (
    <div style={containerStyle} className="aspect-video">
      <CustomVideo
        videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        title="Default YouTube Video"
        loading="lazy"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Basic YouTube video with default settings - lazy loading and auto-generated thumbnail from YouTube.",
      },
    },
  },
};

export const BasicMP4: Story = {
  render: () => (
    <div style={containerStyle} className="aspect-video">
      <CustomVideo
        videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        title="Basic MP4 Video"
        loading="lazy"
        backgroundImageUrl="https://picsum.photos/800/450?random=3"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Basic MP4 video with lazy loading and explicit background image (MP4 videos need explicit background images).",
      },
    },
  },
};

export const BasicVimeo: Story = {
  render: () => (
    <div style={containerStyle} className="aspect-video">
      <CustomVideo
        videoUrl="https://vimeo.com/524933864"
        title="Basic Vimeo Video"
        loading="lazy"
        backgroundImageUrl="https://picsum.photos/800/450?random=4"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Basic Vimeo video with lazy loading and explicit background image.",
      },
    },
  },
};

// ========================================
// AUTO THUMBNAIL EXAMPLES
// ========================================

export const YouTubeAutoThumbnail: Story = {
  render: () => (
    <div style={containerStyle} className="aspect-video">
      <CustomVideo
        videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        title="YouTube Video with Auto Thumbnail"
        loading="lazy"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "YouTube video that automatically uses the video's thumbnail as the background image.",
      },
    },
  },
};

export const MultipleFormats: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div style={containerStyle} className="aspect-video">
        <h3 className="text-lg font-medium mb-2">YouTube Format</h3>
        <CustomVideo
          videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          title="YouTube Standard Format"
        />
      </div>
      <div style={containerStyle} className="aspect-video">
        <h3 className="text-lg font-medium mb-2">YouTube Short Format</h3>
        <CustomVideo
          videoUrl="https://youtu.be/dQw4w9WgXcQ"
          title="YouTube Short Format"
        />
      </div>
      <div style={containerStyle} className="aspect-video">
        <h3 className="text-lg font-medium mb-2">Vimeo Format</h3>
        <CustomVideo
          videoUrl="https://vimeo.com/524933864"
          title="Vimeo Format"
          backgroundImageUrl="https://picsum.photos/800/450?random=8"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstration of different video URL formats supported by the component.",
      },
    },
  },
};

// ========================================
// POPUP MODAL EXAMPLES
// ========================================

export const PopupModal: Story = {
  render: () => (
    <div style={containerStyle} className="aspect-video">
      <CustomVideo
        videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        title="Popup Modal Video"
        playOnPopup={true}
        loading="lazy"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Video that plays in a modal popup. Auto-generated thumbnail and play button trigger the modal overlay.",
      },
    },
  },
};

export const VimeoPopupModal: Story = {
  render: () => (
    <div style={containerStyle} className="aspect-video">
      <CustomVideo
        videoUrl="https://vimeo.com/524933864"
        title="Vimeo Popup Modal Video"
        playOnPopup={true}
        backgroundImageUrl="https://picsum.photos/800/450?random=6"
        loading="lazy"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Vimeo video that plays in a modal popup. Background image and play button trigger the modal overlay.",
      },
    },
  },
};

// ========================================
// AUTOPLAY EXAMPLES
// ========================================

export const AutoplayVideo: Story = {
  render: () => (
    <div style={containerStyle} className="aspect-video">
      <CustomVideo
        videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        title="Autoplay YouTube Video"
        autoplayAsBool={true}
        loading="eager"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "YouTube video that automatically plays when it comes into view.",
      },
    },
  },
};

export const AutoplayVimeo: Story = {
  render: () => (
    <div style={containerStyle} className="aspect-video">
      <CustomVideo
        videoUrl="https://vimeo.com/524933864"
        title="Autoplay Vimeo Video"
        autoplayAsBool={true}
        backgroundImageUrl="https://picsum.photos/800/450?random=7"
        loading="eager"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Vimeo video that automatically plays when it comes into view.",
      },
    },
  },
};

// ========================================
// RESPONSIVE EXAMPLES
// ========================================

export const ResponsiveLayout: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div style={{ minHeight: "250px" }}>
        <h3 className="text-lg font-medium mb-2">Video 1</h3>
        <CustomVideo
          videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          title="Responsive Video 1"
        />
      </div>
      <div style={{ minHeight: "250px" }}>
        <h3 className="text-lg font-medium mb-2">Video 2</h3>
        <CustomVideo
          videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          title="Responsive Video 2"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstration of responsive layout with multiple videos in a grid.",
      },
    },
  },
};
