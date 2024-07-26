"use client";

import * as React from "react";
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Shop {
  label: string;
  value: string;
}

const shops: Shop[] = [
  {
    label: "all",
    value: "all",
  },
  {
    label: "saver resort",
    value: "saver",
  },
  {
    label: "dhaka resort",
    value: "dhaka",
  },
  {
    label: "singair resort",
    value: "singair",
  },
  {
    label: "manikganj resort",
    value: "manikganj",
  },
  {
    label: "dhalla resort",
    value: "dhalla",
  },
  {
    label: "khaserchar resort",
    value: "khaserchar",
  },
];

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface TeamSwitcherProps extends PopoverTriggerProps {}

export default function TeamSwitcher({ className }: TeamSwitcherProps) {
  const [open, setOpen] = React.useState(false);
  const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false);
  const [selectedShop, setSelectedShop] = React.useState<Shop>(shops[0]);

  return (
    <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select a Shop"
            className={cn("w-[200px] justify-between", className)}
          >
            <Avatar className="mr-2 h-5 w-5">
              <AvatarImage
                // src={`https://avatar.vercel.sh/${selectedShop.value}.png`}
                alt={selectedShop.label}
                className="grayscale"
              />
              <AvatarFallback>{selectedShop.label}</AvatarFallback>
            </Avatar>
            <span className="capitalize">{selectedShop.label}</span>
            <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 ">
          <Command>
            <CommandList>
              <CommandInput placeholder="Search team..." />
              <CommandEmpty>No team found.</CommandEmpty>
              {shops.map((shop) => (
                <Button
                  variant="ghost"
                  key={shop.value}
                  onClick={() => {
                    setSelectedShop(shop);
                    setOpen(false);
                  }}
                  className="text-sm w-full"
                >
                  <Avatar className="mr-2 h-5 w-5">
                    <AvatarImage
                      // src={`https://avatar.vercel.sh/${shop.value}.png`}
                      alt={shop.label}
                      className="grayscale"
                    />
                    <AvatarFallback>{shop.label}</AvatarFallback>
                  </Avatar>
                  <span className="capitalize">{shop.label}</span>
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedShop.value === shop.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </Button>
              ))}
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(true);
                      setShowNewTeamDialog(true);
                    }}
                  >
                    <PlusCircledIcon className="mr-2 h-5 w-5" />
                    Create Shop
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Shop</DialogTitle>
          <DialogDescription>Add a new Shop</DialogDescription>
        </DialogHeader>
        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Label htmlFor="name">Shop name</Label>
              <Input id="name" placeholder="Acme Inc." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="plan">Subscription plan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">
                    <span className="font-medium">Free</span> -{" "}
                    <span className="text-muted-foreground">
                      Trial for two weeks
                    </span>
                  </SelectItem>
                  <SelectItem value="pro">
                    <span className="font-medium">Pro</span> -{" "}
                    <span className="text-muted-foreground">
                      $9/month per user
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowNewTeamDialog(true)}>
            Cancel
          </Button>
          <Button type="submit">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
