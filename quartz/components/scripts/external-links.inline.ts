import { document } from "document"

document.addEventListener("nav", () => {
  for (const link of document.querySelectorAll<HTMLAnchorElement>("a[href]")) {
    const href = link.getAttribute("href")
    if (!href) continue

    // Solo link esterni
    if (href.startsWith("http://") || href.startsWith("https://")) {
      link.target = "_blank"
      link.rel = "noopener noreferrer"
    }
  }
})