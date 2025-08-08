"use client";

import type React from "react";
import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "../../../utils/utils";
import { IDialogProps } from "./dialog.type";

import {
  sizeClasses,
  placementClasses,
  DIALOG_CLASSES,
} from "./_default-classes";

// Animation styles
export function Dialog({
  placement = "center",
  size = "md",
  ariaLabel = "Dialog",
  id,
  isOpen,
  header,
  children,
  footer,
  isPortal = true,
  onClose,
  dialogClasses,
  ...props
}: IDialogProps) {
  const [instanceClasses, setInstanceClasses] = useState(() => {
    const clonedClasses: Record<string, any> = JSON.parse(
      JSON.stringify(DIALOG_CLASSES),
    );

    if (dialogClasses) {
      Object.keys(dialogClasses).forEach((key) => {
        if (clonedClasses[key]) {
          if (
            typeof dialogClasses[key] === "object" &&
            !Array.isArray(dialogClasses[key])
          ) {
            clonedClasses[key] = {
              ...clonedClasses[key],
              ...dialogClasses[key],
            };
          } else {
            clonedClasses[key] = dialogClasses[key];
          }
        }
      });
    }

    return clonedClasses;
  });

  const dialogRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  // Focus trap implementation
  const focusableElementsSelector =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  const trapFocus = useCallback((e: KeyboardEvent) => {
    if (!dialogRef.current) return;

    const focusableElements = dialogRef.current.querySelectorAll(
      focusableElementsSelector,
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    }
  }, []);

  // Handle escape key - always enabled
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose?.();
      }
      trapFocus(e);
    },
    [onClose, trapFocus],
  );

  // Handle outside interactions - always enabled
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      // Close dialog when clicking on backdrop or any area outside the dialog content
      if (
        e.target === backdropRef.current ||
        !dialogRef.current?.contains(e.target as Node)
      ) {
        onClose?.();
      }
    },
    [onClose],
  );

  // Effects
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element
      previousActiveElement.current = document.activeElement as HTMLElement;

      // Always prevent scroll
      document.body.style.overflow = "hidden";

      // Add event listeners
      document.addEventListener("keydown", handleKeyDown);

      // Focus the dialog
      setTimeout(() => {
        const firstFocusable = dialogRef.current?.querySelector(
          focusableElementsSelector,
        ) as HTMLElement;
        firstFocusable?.focus();
      }, 0);
    } else {
      // Always restore scroll
      document.body.style.overflow = "";

      // Remove event listeners
      document.removeEventListener("keydown", handleKeyDown);

      // Restore focus
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
        previousActiveElement.current = null;
      }
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown, focusableElementsSelector, onClose]);

  if (!mounted || !isOpen) return null;

  const dialogContent = (
    <div>
      {isOpen && (
        <div
          ref={backdropRef}
          className={cn(
            instanceClasses.backdrop.base,
            placementClasses[placement],
            "animate-fade-in",
          )}
          onClick={handleBackdropClick}
          aria-hidden="true"
        >
          {/* Always show backdrop */}
          <div
            className={cn(
              instanceClasses.backdropOverlay.base,
              "animate-fade-in",
            )}
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel}
            aria-labelledby={header ? `${id}-title` : undefined}
            aria-describedby={`${id}-content`}
            id={id}
            className={cn(
              "relative z-10",
              instanceClasses.dialog.base,
              sizeClasses[size],
              size !== "full" && instanceClasses.dialog.size.notFull,
              size === "full" && instanceClasses.dialog.size.full,
            )}
            onClick={(e) => e.stopPropagation()}
            {...props}
          >
            {header ? (
              <div className={instanceClasses.header.container}>
                <div
                  id={`${id}-title`}
                  className={instanceClasses.header.title}
                >
                  {header as React.ReactNode}
                </div>
                <button
                  type="button"
                  className={instanceClasses.closeButton.button}
                  onClick={() => onClose?.()}
                  aria-label="Close dialog"
                >
                  <X className={instanceClasses.closeButton.icon} />
                </button>
              </div>
            ) : null}

            <div id={`${id}-content`} className={instanceClasses.content.base}>
              {children as React.ReactNode}
            </div>

            {footer ? (
              <div className={instanceClasses.footer.base}>
                {footer as React.ReactNode}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );

  if (isPortal && typeof window !== "undefined") {
    return createPortal(dialogContent, document.body);
  }

  return dialogContent;
}
