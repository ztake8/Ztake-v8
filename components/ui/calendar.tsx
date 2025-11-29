"use client"

import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { DayPicker, useDayPicker } from "react-day-picker"
import { format } from "date-fns"
import type { CalendarProps } from "./calendar.props" // Assuming CalendarProps is defined in a separate file

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  ({ className, classNames, showOutsideDays = true, numberOfMonths, mode = "single", ...props }, ref) => {
    return (
      <DayPicker
        ref={ref}
        mode={mode}
        numberOfMonths={numberOfMonths}
        showOutsideDays={showOutsideDays}
        className={cn(
          "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
          className,
        )}
        classNames={{
          months: "flex flex-col sm:flex-row gap-4",
          month: "flex flex-col gap-4",
          month_caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-sm font-medium",
          nav: "flex items-center gap-1",
          button_previous: cn(
            buttonVariants({ variant: "outline" }),
            "absolute left-1 size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          ),
          button_next: cn(
            buttonVariants({ variant: "outline" }),
            "absolute right-1 size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          ),
          month_grid: "w-full border-collapse",
          weekdays: "flex",
          weekday: "size-8 aria-disabled:opacity-50 p-0 select-none",
          week: "flex w-full mt-2",
          day: cn("size-8 aria-disabled:opacity-50 p-0 select-none", "group/day relative"),
          day_button: cn("flex items-center justify-center h-8 w-full px-2", buttonVariants({ variant: "ghost" })),
          range_start: "day-range-start",
          range_end: "day-range-end",
          selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          today: "bg-accent text-accent-foreground",
          outside:
            "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
          disabled: "text-muted-foreground opacity-50",
          range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
          hidden: "invisible",
          ...classNames,
        }}
        components={{
          Chevron: ({ orientation }) => {
            const Icon = orientation === "left" ? ChevronLeftIcon : ChevronRightIcon
            return <Icon className="h-4 w-4" />
          },
          Weekday: ({ weekday, ...props }) => (
            <div {...props} className="select-none w-8">
              {format(weekday, "EEE", { locale: props.locale })}
            </div>
          ),
          DayButton: ({ day, modifiers, ...props }) => {
            const buttonRef = React.useRef<HTMLButtonElement>(null)
            const { activeModifiers } = useDayPicker()

            React.useEffect(() => {
              if (activeModifiers.focused) {
                buttonRef.current?.focus()
              }
            }, [activeModifiers.focused])

            return (
              <button
                {...props}
                ref={buttonRef}
                type="button"
                className={cn(
                  "relative flex h-8 w-8 items-center justify-center p-0 font-normal",
                  "hover:bg-accent hover:text-accent-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  "disabled:pointer-events-none disabled:opacity-50",
                  "aria-selected:opacity-100",
                  props.className,
                )}
              />
            )
          },
          Day: ({ day, modifiers, ...props }) => {
            const { selected, today, disabled, range_middle, range_start, range_end } = modifiers
            const buttonRef = React.useRef<HTMLButtonElement>(null)

            return (
              <div {...props} className={cn("group/day relative", props.className)}>
                <div className="flex size-8 items-center justify-center text-center">{format(day.date, "d")}</div>
              </div>
            )
          },
          DayDate: ({ day, modifiers, ...props }) => {
            const { selected, today, disabled, range_middle, range_start, range_end, outside } = modifiers

            return (
              <time
                {...props}
                dateTime={format(day.date, "yyyy-MM-dd")}
                className={cn(
                  "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-8 flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
                  props.className,
                )}
              >
                {format(day.date, "d")}
              </time>
            )
          },
        }}
        {...props}
      />
    )
  },
)

export { Calendar }
