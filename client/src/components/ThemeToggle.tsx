import { Moon, Sun, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="w-9 h-9 rounded-md"
            aria-label="Toggle theme"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "light" && <Sun className="h-4 w-4" />}
              {theme === "dark" && <Moon className="h-4 w-4" />}
              {theme === "system" && <Monitor className="h-4 w-4" />}
            </motion.div>
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
      </motion.div>

      <AnimatePresence>
        <DropdownMenuContent align="end" forceMount>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div whileHover={{ backgroundColor: "hsl(var(--accent) / 0.1)" }}>
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <motion.div
                  className="flex items-center gap-2"
                  animate={theme === "light" ? { x: 5 } : { x: 0 }}
                >
                  <Sun className="h-4 w-4" />
                  <span>Light</span>
                  {theme === "light" && <motion.span className="ml-auto">✓</motion.span>}
                </motion.div>
              </DropdownMenuItem>
            </motion.div>

            <motion.div whileHover={{ backgroundColor: "hsl(var(--accent) / 0.1)" }}>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <motion.div
                  className="flex items-center gap-2"
                  animate={theme === "dark" ? { x: 5 } : { x: 0 }}
                >
                  <Moon className="h-4 w-4" />
                  <span>Dark</span>
                  {theme === "dark" && <motion.span className="ml-auto">✓</motion.span>}
                </motion.div>
              </DropdownMenuItem>
            </motion.div>

            <motion.div whileHover={{ backgroundColor: "hsl(var(--accent) / 0.1)" }}>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                <motion.div
                  className="flex items-center gap-2"
                  animate={theme === "system" ? { x: 5 } : { x: 0 }}
                >
                  <Monitor className="h-4 w-4" />
                  <span>System</span>
                  {theme === "system" && <motion.span className="ml-auto">✓</motion.span>}
                </motion.div>
              </DropdownMenuItem>
            </motion.div>
          </motion.div>
        </DropdownMenuContent>
      </AnimatePresence>
    </DropdownMenu>
  );
}
