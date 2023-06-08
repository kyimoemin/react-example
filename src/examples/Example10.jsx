
import React from 'react';
import { useSyncExternalStore } from 'react';
export function Example10() {

  const isOnline = useIsOnline();

  return <p>{isOnline ? '✅ Online' : '❌ Disconnected'}</p>;
}

function useIsOnline() {
  return useSyncExternalStore(subscribe, listener);
}

function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

function listener() {
  return navigator.onLine;
}