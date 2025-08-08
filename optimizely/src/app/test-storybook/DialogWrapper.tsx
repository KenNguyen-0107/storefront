"use client";
import { Dialog } from "@/packages/niteco-ui/components/atoms/dialog";
import { useState } from "react";
import { CustomVideo } from "@/packages/niteco-ui/components/atoms/CustomVideo";
export default function DialogWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  return (
    <div>
      <div className="max-w-md">
        <CustomVideo
          videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          title="Default YouTube Video"
          loading="lazy"
          playOnPopup={true}
          autoplayAsBool={true}
        />
      </div>
      <button onClick={() => setIsOpen(true)}>Open Dialog</button>
      <br />
      <button onClick={() => setIsOpen2(true)}>Open Dialog 22</button>
      <Dialog
        isOpen={isOpen2}
        placement={"center"}
        size={"lg"}
        id="demo-dialog2"
        onClose={() => setIsOpen2(false)}
        dialogClasses={{
          dialog: {
            base: "bg-red",
          },
        }}
      >
        <div>Dialog 2</div>
      </Dialog>
      <Dialog
        isOpen={isOpen}
        placement={"center"}
        size={"lg"}
        id="demo-dialog"
        onClose={() => setIsOpen(false)}
        header={<div>HEADER</div>}
        footer={<div>FOOTER</div>}
      >
        <button onClick={() => setIsOpen(false)}>Cancel</button>
        <div className="space-y-4">
          <p>
            This dialog now features smooth animations powered by Framer Motion!
          </p>
          <p>
            Notice the staggered entrance animations for header, content, and
            footer.
          </p>
          <p>
            Try different placements and animation durations to see the effects.
          </p>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Test focus trap"
              className="w-full p-2 border rounded"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Focusable Button
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
