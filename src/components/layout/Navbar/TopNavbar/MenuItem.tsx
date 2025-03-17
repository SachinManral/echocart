import Link from "next/link";
import React from "react";
import {
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

type MenuItemProps = {
  label: string;
  url: string;
};

export const MenuItem = ({ label, url }: MenuItemProps) => {
  return (
    <NavigationMenuItem>
      <Link href={url} className="text-sm font-medium hover:text-black/60 transition-all px-3 py-2 block">
        {label}
      </Link>
    </NavigationMenuItem>
  );
};
