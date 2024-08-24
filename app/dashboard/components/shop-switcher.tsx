"use client";

import { useState, useEffect, FormEvent } from "react";
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
import UploadImg from "./UploadImg";
import { useToast } from "@/components/ui/use-toast";

interface Image {
  fileImage: string;
  fileName: string;
}
interface Shop {
  shopId: number;
  name: string;
  address: string;
  type: string;
  img: Image;
}

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface ShopSwitcherProps extends PopoverTriggerProps {}

export default function ShopSwitcher({ className }: ShopSwitcherProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [showNewTeamDialog, setShowNewTeamDialog] = useState(false);
  const [shops, setShops] = useState<Shop[]>([]);
  const [selectedShop, setSelectedShop] = useState<Shop>(shops[0]);
  // Form state
  const [selectedFile, setSelectedFile] = useState<Image | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/v1/shops", { cache: "force-cache" });
      const data = await response.json();
      setShops(data);
    } catch (error) {
      console.error("Failed to fetch shops:", error);
    }
  };

  fetchData();

  // SUBMIT NEW SHOP DATA TO DATABASE
  const handleAddShop = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      const response = await fetch("/api/v1/shops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: (form.elements.namedItem("name") as HTMLInputElement).value,
          address: (form.elements.namedItem("address") as HTMLInputElement)
            .value,
          type: (form.elements.namedItem("type") as HTMLInputElement).value,
          img: selectedFile,
        }),
      });

      if (response.ok) {
        fetchData();
        setShowNewTeamDialog(false);
        setOpen(false);
        setSelectedFile(null); // Reset selected file
        e.currentTarget.reset(); // Reset form fields
        toast({
          title: "Done",
          description: "Shop added successfully",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      }
    } catch (error) {
      console.error("An error occurred while adding shop:", error);
    }
  };

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
                src={selectedShop?.img?.fileImage || ""}
                alt={selectedShop?.img?.fileName || "Avatar"}
                className=""
              />
              {/* <AvatarFallback>All</AvatarFallback> */}
            </Avatar>

            <span className="capitalize">
              {selectedShop?.name || "Select a shop"}
            </span>
            <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 ">
          <Command>
            <CommandList>
              <CommandInput placeholder="Search shop..." />
              <CommandEmpty>No shop found.</CommandEmpty>
              {shops.map((shop: Shop) => (
                <Button
                  variant="ghost"
                  key={shop.shopId}
                  onClick={() => {
                    setSelectedShop(shop);
                    console.log("Clicked");
                  }}
                  className="text-sm w-full"
                >
                  <Avatar className="mr-2 h-5 w-5">
                    <AvatarImage
                      src={shop.img?.fileImage || ""}
                      alt={shop.img?.fileName || "Shop image"}
                      className=""
                    />
                    <AvatarFallback>O</AvatarFallback>
                  </Avatar>
                  <span className="capitalize">{shop.name}</span>
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedShop?.name === shop.name
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
                <DialogTrigger className="w-full">
                  <CommandItem
                    onClick={() => {
                      setOpen(true);
                      setShowNewTeamDialog(true);
                    }}
                  >
                    <PlusCircledIcon className="mr-2 h-5 w-5" />
                    <span>Create Shop</span>
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
          <DialogDescription>Add a new Shop to your otosum</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-2 pb-4">
          <form className="" action="" method="" onSubmit={handleAddShop}>
            <div className="flex justify-center items-center">
              <UploadImg
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name" className="capitalize">
                name
              </Label>
              <Input id="name" placeholder="Acme Inc." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address" className="capitalize">
                address
              </Label>
              <Input id="address" placeholder="123 Main St, Anytown, USA" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type" className="capitalize">
                type
              </Label>
              <Input id="type" placeholder="Restaurant" />
            </div>
            <DialogFooter className="py-5">
              <Button
                variant="outline"
                onClick={() => setShowNewTeamDialog(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Continue</Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
