import { Camera, Mail, Share2, Video } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative border-t border-border py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <span className="text-lg font-semibold tracking-tight">
              MH<span className="text-electric"> Consulting</span>
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Influencer marketing for travel brands. Dubai · Worldwide.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:hello@mhconsulting.ae"
            aria-label="Email MH Consulting"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card/40 text-muted-foreground transition hover:border-electric/50 hover:text-electric"
          >
            <Mail className="size-4" aria-hidden />
          </a>
          <a
            href="#"
            aria-label="MH Consulting on LinkedIn"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card/40 text-muted-foreground transition hover:border-electric/50 hover:text-electric"
          >
            <Share2 className="size-4" aria-hidden />
          </a>
          <a
            href="#"
            aria-label="MH Consulting on Instagram"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card/40 text-muted-foreground transition hover:border-electric/50 hover:text-electric"
          >
            <Camera className="size-4" aria-hidden />
          </a>
          <a
            href="#"
            aria-label="MH Consulting on YouTube"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card/40 text-muted-foreground transition hover:border-electric/50 hover:text-electric"
          >
            <Video className="size-4" aria-hidden />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border px-6 pt-6">
        <p className="text-center text-xs text-muted-foreground md:text-left">
          © {new Date().getFullYear()} MH Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
