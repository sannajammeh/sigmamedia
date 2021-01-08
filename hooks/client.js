export const useIsClient = () => typeof window !== 'undefined';

export const useIsServer = () => typeof window === 'undefined';
