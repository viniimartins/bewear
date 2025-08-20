"use client";

import { ShoppingBasketIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

export function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <ShoppingBasketIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <VisuallyHidden>
          <SheetTitle />
        </VisuallyHidden>
      </SheetContent>
    </Sheet>
  );
};