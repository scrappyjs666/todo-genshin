module.exports = defineConfig({
  root: 'src',
  base: '/todo-genshin/dist/',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        'index': resolve(__dirname, 'src/index.html'),
      }
    }
  }
})