"use client";
import * as React from "react";
import { useState, useEffect, useMemo, useRef } from "react";
import { IAccordionProps } from "./Accordion.type";
import { cn } from "../../../utils/utils";
import Icon from "../Icon";
import { ACCORDION_STYLES } from "./_default-classes";

const Accordion = React.forwardRef<HTMLDivElement, IAccordionProps>(
  (
    {
      items,
      className,
      allowMultiple = false,
      defaultOpenItems = [],
      onItemToggle,
      variant = "default",
      accordionStyles,
      ...props
    },
    ref,
  ) => {
    if (accordionStyles) {
      Object.assign(ACCORDION_STYLES, accordionStyles);
    }

    const [openItems, setOpenItems] = useState<Set<string>>(
      () => new Set(defaultOpenItems),
    );
    const previousDefaultOpenItems = useRef<string[]>(defaultOpenItems);

    const accordionItems = useMemo(() => {
      return items.map((item) => ({
        ...item,
        isOpen: openItems.has(item.id),
      }));
    }, [items, openItems]);

    useEffect(() => {
      // Only update if the defaultOpenItems actually changed (deep comparison)
      const hasChanged =
        defaultOpenItems.length !== previousDefaultOpenItems.current.length ||
        defaultOpenItems.some(
          (item, index) => item !== previousDefaultOpenItems.current[index],
        );

      if (hasChanged) {
        setOpenItems(new Set(defaultOpenItems));
        previousDefaultOpenItems.current = defaultOpenItems;
      }
    }, [defaultOpenItems]);

    const toggleItem = (itemId: string) => {
      setOpenItems((prev) => {
        const newSet = new Set(prev);
        const isCurrentlyOpen = newSet.has(itemId);

        if (isCurrentlyOpen) {
          newSet.delete(itemId);
        } else {
          if (!allowMultiple) {
            newSet.clear();
          }
          newSet.add(itemId);
        }

        onItemToggle?.(itemId, !isCurrentlyOpen);
        return newSet;
      });
    };

    const getBaseClasses = () =>
      cn(
        ACCORDION_STYLES.base.wrapper,
        variant === "flush"
          ? ACCORDION_STYLES.base.flushBorder
          : ACCORDION_STYLES.base.defaultBorder,
        className,
      );

    const getItemClasses = (isLast: boolean) =>
      cn(
        ACCORDION_STYLES.item.group,
        variant === "flush" ? ACCORDION_STYLES.item.flushBorder : "",
        !isLast && variant === "default"
          ? ACCORDION_STYLES.item.defaultBorder
          : "",
        isLast && variant === "flush"
          ? ACCORDION_STYLES.item.lastItemFlush
          : "",
      );

    const getIconClasses = (isOpen: boolean) =>
      cn(
        ACCORDION_STYLES.icon.base,
        isOpen ? ACCORDION_STYLES.icon.open : ACCORDION_STYLES.icon.closed,
      );

    const getContentContainerClasses = (isOpen: boolean) =>
      cn(
        ACCORDION_STYLES.contentContainer.base,
        isOpen
          ? ACCORDION_STYLES.contentContainer.open
          : ACCORDION_STYLES.contentContainer.closed,
      );

    if (!items || items.length === 0) {
      return null;
    }

    return (
      <div ref={ref} className={getBaseClasses()} {...props}>
        {accordionItems.map((item, index) => (
          <div
            key={item.id}
            className={getItemClasses(index === accordionItems.length)}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className={ACCORDION_STYLES.header}
              aria-expanded={item.isOpen}
              aria-controls={`accordion-content-${item.id}`}
              id={`accordion-header-${item.id}`}
            >
              <span className={ACCORDION_STYLES.title}>{item.title}</span>
              <Icon
                iconName="ArrowDown"
                className={getIconClasses(item.isOpen)}
                size={20}
                viewSize={24}
              />
            </button>

            <div
              id={`accordion-content-${item.id}`}
              role="region"
              aria-labelledby={`accordion-header-${item.id}`}
              className={getContentContainerClasses(item.isOpen)}
            >
              <div
                className={`${ACCORDION_STYLES.content} ${item.isOpen ? "border-none" : ""}`}
              >
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  },
);

Accordion.displayName = "Accordion";

export { Accordion };
