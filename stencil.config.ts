import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'my-counter',
  hashFileNames: false,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  hydratedFlag: null,
  extras: {
    cssVarsShim: false,
    dynamicImportShim: false,
    safari10: false,
    shadowDomShim: false,
  }
};
