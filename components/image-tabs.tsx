"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";

export default function ImageTabs() {
  const [activeTab, setActiveTab] = useState("organize"); // organize, hired, boards
  return (
    <section className="border-t py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/*Tabs */}
          <div className="flex gap-2 justify-center mb-8">
            <Button
              onClick={() => setActiveTab("organize")}
              className={`rounded-lg px-6 py-3 text-sm hover:bg-black font-medium transition-colors ${activeTab === "organize" ? "bg-primary hover:bg-primary" : "bg-black text-primary border-2 border-white"}`}
            >
              Organize applications
            </Button>
            <Button
              onClick={() => setActiveTab("hired")}
              className={`rounded-lg px-6 py-3 text-sm hover:bg-black font-medium transition-colors ${activeTab === "hired" ? "bg-primary hover:bg-primary" : "bg-black text-primary border-2 border-white"}`}
            >
              Get Hired
            </Button>
            <Button
              onClick={() => setActiveTab("boards")}
              className={`rounded-lg px-6 py-3 text-sm hover:bg-black font-medium transition-colors ${activeTab === "boards" ? "bg-primary hover:bg-primary" : "bg-black text-primary border-2 border-white"}`}
            >
              Manage Boards
            </Button>
          </div>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border-2 border-gray-100">
            {activeTab === "organize" && (
              <Image
                src="/site-images/0.jpg"
                alt="Organize Applications"
                width={1200}
                height={800}
              />
            )}

            {activeTab === "hired" && (
              <Image
                src="/site-images/1.jpg"
                alt="Get Hired"
                width={1200}
                height={800}
              />
            )}

            {activeTab === "boards" && (
              <Image
                src="/site-images/2.jpg"
                alt="Manage Boards"
                width={1200}
                height={800}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
