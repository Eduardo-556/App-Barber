"use client";
import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Search() {
  return (
    <div className="flex items-center gap-2">
      <Input />
      <Button variant="default">
        <SearchIcon size={20} />
      </Button>
    </div>
  );
}
