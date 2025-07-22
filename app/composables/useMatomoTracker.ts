type TrackEvent = (category: string, action: string, name?: string) => void;

export const useMatomoTracker = (): { trackEvent: TrackEvent } => {
  const trackEvent: TrackEvent = (category, action, name) => {
    if (process.client && typeof window !== "undefined" && window._paq) {
      const args = ["trackEvent", category, action];
      if (name) args.push(name);
      window._paq.push(args);
    }
  };
  return { trackEvent };
};
