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
import { Dialog } from "@/components/ui/dialog";

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

interface Month {
  label: string;
  value: string;
}

const months: Month[] = [
  {
    label: "january",
    value: "january",
  },
  {
    label: "february",
    value: "february",
  },
  {
    label: "march",
    value: "march",
  },
  {
    label: "april",
    value: "april",
  },
  {
    label: "may",
    value: "may",
  },
  {
    label: "june",
    value: "june",
  },
  {
    label: "july",
    value: "july",
  },
  {
    label: "august",
    value: "august",
  },
  {
    label: "september",
    value: "september",
  },
  {
    label: "october",
    value: "october",
  },
  {
    label: "november",
    value: "november",
  },
  {
    label: "december",
    value: "december",
  },
];

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface MonthPikerProps extends PopoverTriggerProps {}

export default function MonthPiker({ className }: MonthPikerProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedMonth, setSelectedMonth] = React.useState<Month>(months[0]);

  return (
    <Dialog>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select a Shop"
            className={cn("w-[200px] justify-between", className)}
          >
            <span className="capitalize">{selectedMonth.label}</span>
            <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 ">
          <Command>
            <CommandList>
              {months.map((month) => (
                <Button
                  variant="ghost"
                  key={month.value}
                  onClick={() => {
                    setSelectedMonth(month);
                    setOpen(false);
                  }}
                  className="text-sm w-full"
                >
                  <span className="capitalize">{month.label}</span>
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedMonth.value === month.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </Button>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </Dialog>
  );
}
