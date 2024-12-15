'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react";
import CreatePostModal from "./CreatePostModal";

export default function CreatePostButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Create New Post</Button>
      <CreatePostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

