import { useEffect } from "react";
import { SITE } from "../data/site";

function setMetaByName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setMetaByProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Sets document title, meta description, canonical URL, and Open Graph /
 * Twitter tags for the current route. Google renders client-side JS and
 * will see these; crawlers that don't execute JS (some social share bots)
 * will fall back to the static defaults in index.html.
 */
export default function useSEO({ title, description, path = "/", noindex = false }) {
  useEffect(() => {
    document.title = title;

    if (description) {
      setMetaByName("description", description);
      setMetaByProperty("og:description", description);
      setMetaByName("twitter:description", description);
    }

    const url = `${SITE.url}${path === "/" ? "" : path}`;
    setCanonical(url);
    setMetaByProperty("og:url", url);
    setMetaByProperty("og:title", title);
    setMetaByName("twitter:title", title);

    setMetaByName("robots", noindex ? "noindex, follow" : "index, follow");
  }, [title, description, path, noindex]);
}
