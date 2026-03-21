"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Menubar } from "./Menubar";
import TextAlign from "@tiptap/extension-text-align";
import { ControllerRenderProps } from "react-hook-form";

export function RichTextEditor({
  field,
}: {
  field: ControllerRenderProps<
    {
      title: string;
      description: string;
      fileKey: string;
      price: number;
      duration: number;
      level: "Begginer" | "Intermediate" | "Advanced";
      category:
        | "Development"
        | "Business"
        | "Finance"
        | "It & Software"
        | "Design"
        | "Marketing"
        | "Health & Fitness"
        | "Music"
        | "Teaching & Academics";
      smallDescription: string;
      slug: string;
      status: "Draft" | "Published" | "Archived";
    },
    "description"
  >;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    immediatelyRender: false,

    editorProps: {
      attributes: {
        class:
          "min-h-[300px] p-4 focus:outline-none prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert !w-full",
      },
    },

    onUpdate: ({ editor }) => {
      field.onChange(JSON.stringify(editor.getJSON()));
    },
    content: field.value ? JSON.parse(field.value) : "<p>Hello World</p>",
  });

  return (
    <div className="w-full border border-input rounded-lg overflow-hidden dark:bg-accent">
      <Menubar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
