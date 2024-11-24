"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { createDocument } from "@/lib/actions/room.actions";
import { useRouter } from "next/navigation";

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {

    const router = useRouter()

  const addDocumentHandler = async () => {
    try {
        const room = await createDocument({userId, email});

        if(room) router.push(`/documents/${room.id}`);
    } catch (err) {
        console.error(`Couldn't push to documents: ${err}`);
    }
  };

  return (
    <Button
      type="submit"
      className="bg-black flex gap-1 shadow-md rounded-full"
      onClick={addDocumentHandler}
    >
        <Image
            src='/assets/icons/add.svg'
            width={24}
            height={24}
            alt="add"
        />
      <p className="hidden sm:block text-white font-semibold">
        Start a blank document
      </p>
    </Button>
  );
};

export default AddDocumentBtn;
