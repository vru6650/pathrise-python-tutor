// Shared configuration helpers for Python Tutor frontend modules.

export const DEFAULT_PYTUTOR_ORIGIN = 'https://pythontutor.com';

function getWindow(): (Window & typeof globalThis) | undefined {
  if (typeof window !== 'undefined') {
    return window;
  }
  return undefined;
}

export function getPyTutorOrigin(): string {
  const win = getWindow();
  if (win && win.location && win.location.origin) {
    return win.location.origin;
  }
  return DEFAULT_PYTUTOR_ORIGIN;
}

export function getPyTutorBaseUrl(): string {
  const origin = getPyTutorOrigin();
  if (origin.endsWith('/')) {
    return origin;
  }
  return `${origin}/`;
}
