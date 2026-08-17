import Navigation from "./Navigation";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { LinkedInIcon } from "@/components/ui/SocialIcons";

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto grid min-h-20 w-full max-w-7xl grid-cols-3 items-center px-6">
        <div className="justify-self-start">
          <span className="font-heading text-2xl text-foreground">
            LOGO
          </span>
        </div>

        <div className="justify-self-center">
          <Navigation />
        </div>

        <div className="flex items-center gap-4 justify-self-end">
          <InstagramIcon />
          <LinkedInIcon />
          {/* Instagram */}
        </div>
      </div>
    </header>
  );
}