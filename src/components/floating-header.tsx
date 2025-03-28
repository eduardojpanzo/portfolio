"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "./Logo";
import clsx from "clsx";
import NavGridLinks from "./nav-grid-links";
import { Container } from "./container";

export function FloatingHeader() {
  const [isAtTop, setIsAtTop] = useState(true);

  // Track scroll position to determine if header is at top
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsAtTop(scrollPosition <= 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="md:col-span-2 py-4">
      <Container className="flex items-center justify-between">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Logo />
        </motion.div>

        <nav
          // fixed top-0 z-50
          className={clsx(
            "fixed left-1/2 -translate-x-1/2 flex items-center space-x-8 py-2 px-4  border rounded-full  transition-all duration-300 ease-in-out max-md:hidden",
            {
              ["border-transparent"]: isAtTop,
              ["shadow-md backdrop-blur-md bg-background/90"]: !isAtTop,
            }
          )}
        >
          <NavLinks />
        </nav>

        <motion.div
          // fixed top-0 z-50
          className={
            "fixed right-0 p-4 transition-all duration-300 ease-in-out"
          }
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <NavGridLinks />
        </motion.div>
      </Container>
    </header>
  );
}

// Separate component for navigation links
function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClass = `text-muted-foreground hover:text-foreground transition-colors ${
    mobile ? "block py-2" : ""
  }`;

  return (
    <>
      <Link href="#features" className={linkClass}>
        Features
      </Link>
      <Link href="#pricing" className={linkClass}>
        Pricing
      </Link>
      <Link href="#about" className={linkClass}>
        About
      </Link>
      <Link href="#contact" className={linkClass}>
        Contact
      </Link>
    </>
  );
}
