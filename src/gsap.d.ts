declare module 'gsap' {
  const gsap: any;
  export default gsap;
  export const ScrollTrigger: any;
}

declare module 'gsap/ScrollTrigger' {
  export const ScrollTrigger: any;
}

declare module 'lenis' {
  export default class Lenis {
    constructor(options?: any);
    raf(time: number): void;
    on(event: string, callback: (...args: any[]) => void): void;
    destroy(): void;
    scrollTo(target: any, options?: any): void;
  }
}
