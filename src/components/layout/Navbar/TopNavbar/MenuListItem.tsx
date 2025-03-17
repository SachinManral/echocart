import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type MenuListItemProps = {
  title: string;
  href: string;
  description?: string;
};

export const MenuListItem = ({
  title,
  href,
  description,
}: MenuListItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        {description && (
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        )}
      </Link>
    </li>
  );
};