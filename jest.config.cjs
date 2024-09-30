module.exports = {
  testTimeout: 60000,
  workerIdleMemoryLimit: '512MB',
  setupFilesAfterEnv: ['<rootDir>jest.setup.ts'],
  coveragePathIgnorePatterns: [
    '.snap',
    'index.ts',
    'index.ts',
    '.scss.d.ts',
    '.const.ts',
    '.types.ts',
    '.mocks.ts',
    '.hoc.tsx',
    '.renderer.tsx',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  modulePaths: ['./src'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.module.(css|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/react-magma-dom'],
};
