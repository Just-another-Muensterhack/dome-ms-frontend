import config from '@helpwave/eslint-config'

export default [
  {
    ignores: [
      'next-env.d.ts',
      'build/*',
    ],
  },
  {
    rules: {
      indent: ['warn', 2],
    },
  },
  ...config.nextExtension,
]
