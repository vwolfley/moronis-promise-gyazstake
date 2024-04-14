export default function NavLinks() {
    const navLinks = [
      {
        id: "about",
        name: "About",
        link: "/",
        internal: true,
      },
      {
        id: "reading-challenge",
        name: "Reading Challenge",
        link: "/reading-challenge",
        internal: true,
      },
      {
        id: "registration",
        name: "Registration",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdp57k5kOQZvyPQ8FotqHsMnqYrycxbGlnLOKliEPjzJUs48w/viewform",
        internal: false,
      },
      {
        id: "checklist",
        name: "Checklist",
        link: "/checklist",
        internal: true,
      },
      // {
      //   id: "calendar",
      //   name: "Calendar",
      //   link: "/calendar",
      //   internal: true,
      // },
      {
        id: "clothing",
        name: "Clothing",
        link: "/clothing",
        internal: true,
      },
      // {
      //   id: "important-info",
      //   name: "Important Info",
      //   link: "/important-info",
      //   internal: true,
      // },
      {
        id: "faqs",
        name: "FAQ's",
        link: "/faqs",
        internal: true,
      },
      
    ]
    return navLinks
  }
  