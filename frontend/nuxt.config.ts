export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  sourcemap: {
    server: true,
    client: true
  },
  devServer: {
    port: 3001,
    host: '0.0.0.0'
  },
  srcDir: 'src/',   // ★ Nuxt のソースディレクトリを src に指定
})
